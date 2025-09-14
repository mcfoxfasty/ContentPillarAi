import { GoogleGenAI, Type } from "@google/genai";
import type { Strategy, StrategyItem } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const model = "gemini-2.5-flash";

const parseJsonArray = (jsonString: string): string[] => {
    try {
        // Attempt to trim whitespace and markdown backticks before parsing
        const cleanJsonString = jsonString.trim().replace(/^```json|```$/g, '').trim();
        const parsed = JSON.parse(cleanJsonString);
        if (Array.isArray(parsed) && parsed.every(item => typeof item === 'string')) {
            return parsed;
        }
        throw new Error("Parsed JSON is not an array of strings.");
    } catch (e) {
        console.error("Failed to parse JSON array:", e, "Original string:", jsonString);
        throw new Error("Invalid JSON format received from API. Could not parse the list of topics.");
    }
};


export const generateContentStrategy = async (websiteUrl: string): Promise<Strategy> => {
    // Step 1: Analyze the website's business using Google Search grounding for a deep analysis
    const analysisPrompt = `Analyze the content of the website at ${websiteUrl}. 
    Based on the information found, provide a detailed analysis that covers the following points:
    1.  **Core Business:** What is the company's primary purpose and industry?
    2.  **Products/Services:** What specific products or services do they offer?
    3.  **Target Audience:** Who are their ideal customers or users?

    Present this as a clear, structured summary. This analysis is crucial for building a content strategy.`;

    const analysisResponse = await ai.models.generateContent({
        model: model,
        contents: analysisPrompt,
        config: {
            tools: [{ googleSearch: {} }],
        },
    });

    const businessAnalysis = analysisResponse.text;

    if (!businessAnalysis || businessAnalysis.trim().length < 50) {
        throw new Error(`Could not retrieve enough content from ${websiteUrl} to perform an analysis. The URL might be invalid, inaccessible, or have very little text content.`);
    }

    // Step 2: Generate Pillar Pages from the detailed analysis
    const pillarPagesPrompt = `Based on this detailed business analysis: 
    ---
    ${businessAnalysis}
    ---
    Generate 4 broad, foundational 'pillar page' topics for their content marketing strategy. These topics must be the main categories of their expertise and be directly relevant to their products and audience. Return the result ONLY as a JSON-formatted array of strings.

    Example format:
    ["Topic A", "Topic B", "Topic C", "Topic D"]`;

    const pillarPagesResponse = await ai.models.generateContent({
        model: model,
        contents: pillarPagesPrompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
            }
        }
    });

    const pillarTopics = parseJsonArray(pillarPagesResponse.text);

    // Step 3: Generate Blog Posts for each Pillar Page
    const blogPostPromises = pillarTopics.map(async (topic): Promise<StrategyItem> => {
        const blogPostPrompt = `For the content pillar topic of '${topic}', generate a list of 8 specific and engaging blog post titles. These titles should address common user questions, 'how-to' guides, comparisons, or listicles relevant to the business. Return the result ONLY as a JSON-formatted array of strings.

        Example format:
        ["Blog Title 1", "Blog Title 2", "Blog Title 3", "Blog Title 4", "Blog Title 5", "Blog Title 6", "Blog Title 7", "Blog Title 8"]`;

        const blogPostResponse = await ai.models.generateContent({
            model: model,
            contents: blogPostPrompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                }
            }
        });

        const blogPosts = parseJsonArray(blogPostResponse.text);

        return {
            pillar_topic: topic,
            blog_posts: blogPosts
        };
    });

    return Promise.all(blogPostPromises);
};