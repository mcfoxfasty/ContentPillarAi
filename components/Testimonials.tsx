import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; title: string; imageUrl: string; }> = ({ quote, name, title, imageUrl }) => {
    return (
        <div className="relative transform rounded-xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute top-0 left-0 -translate-x-2 -translate-y-2">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-100">
                    <path d="M10 60C10 45.8333 22.5 34.1667 40 30V0C21.6667 3.33333 10 18.3333 10 35V60ZM50 60C50 45.8333 62.5 34.1667 80 30V0C61.6667 3.33333 50 18.3333 50 35V60Z" fill="currentColor"/>
                </svg>
            </div>
            <div className="relative z-10">
                <p className="text-gray-600 mb-6">"{quote}"</p>
                <div className="flex items-center">
                    <img alt={name} className="h-12 w-12 rounded-full object-cover" src={imageUrl} />
                    <div className="ml-4">
                        <p className="font-bold text-gray-900">{name}</p>
                        <p className="text-sm text-gray-500">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Testimonials: React.FC = () => {
    const testimonials = [
        {
            quote: "ContentPillar AI has revolutionized our content strategy. We've seen a 300% increase in organic traffic in just 3 months. An indispensable tool for any marketing team.",
            name: "Sarah Johnson",
            title: "Head of Content, TechSavvy",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGqLlN7WHJ39kbJ4PCJOkzbQhsbNiL5nZKcegqFWQEjy94vi1ZxilZe5e8N3D3NiOuC94ewUKYSk5P5rrih6OWUB7Ilj_9hoeYOSMqt7elzMXu_FjAIgaCFw_XTkzfkJ-7FiH_AhHlgF2Rfi-fXOu7NI__U6MdDmplJgBwHiq4Erk1pIyJfdn1Vdqp2uR0H8k9pmn5vKgptE-f3xLYVvFNdtCOOg6o099e7v_t29WfUlBsrUSXbrPTJFiPgjSQArgeETbhFZzawSA"
        },
        {
            quote: "The competitor analysis feature is a game-changer. We've identified new content opportunities we would have never found otherwise. Highly recommended!",
            name: "Michael Chen",
            title: "SEO Manager, GrowthHackers Inc.",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwI5uhKkpn5G93RSSWgWucPENS2EBUW5EW60iYUmbaL-IdIgPwaaFg93ilAUg4HFawkQnhfkQd7OzgaHhoU0eW9Au90w-wIawQG024lIvGBqKc_uq1kos8awgEZH0Df94fHrrQdsOSbO3IvFmeEb1ZG5JUE5tiVxjoHOZKNAGgKm7FJhfrjqBsI4_AlZLsVbfrejL0Lh8UKWHQvfXdYvEMdG2WqXlyw4U8L158emFNUBiB9Rn6hyiRpuJdN0ZNjxEWSv4PxTBjMIc"
        },
        {
            quote: "As a startup, we need to be efficient. ContentPillar AI gives us a clear roadmap, saving us hours of research and planning. It's like having a full-time content strategist on the team.",
            name: "Emily Rodriguez",
            title: "Founder, Innovate Solutions",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTRVLwMdQg5dDY2ZM5Y3UYNh8nv8w-KVGdWqLsAo5_taNpbzwauuhLadkpMBYto156-Kq9AIHaz7RkRKJZfKA5kQAC7_vGRp3o9FzObpEW_ZznOxBcS5tlJtD7cd8IwHROjmizwQpRMiSepvrj4vGdp7-hpDN9eb_42_WkalweBaY-yer6srP2Kn54-s5WNYQzdk4tw_4PxYony3muJ6_NQp5-hCHcELB53OpNwiQKFcAhPytE9nspVydVnLB713tBFwOdOEY9ZvU"
        }
    ];

    return (
        <section id="testimonials" className="bg-gray-50 py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by Content Teams Worldwide</h2>
                    <p className="mt-4 text-lg text-gray-600">See what our customers are saying about ContentPillar AI.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}