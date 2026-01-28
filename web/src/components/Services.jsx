import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: "person",
            iconBg: "bg-blue-100 text-blue-600",
            title: "Personality & Character",
            desc: "Deep dive into your core persona and the fundamental traits that define who you are."
        },
        {
            icon: "psychology",
            iconBg: "bg-amber-100 text-amber-600",
            title: "Thinking Patterns",
            desc: "Understand how you process information and make decisions in daily life."
        },
        {
            icon: "favorite",
            iconBg: "bg-green-100 text-green-600",
            title: "Relationships & Energy",
            desc: "Reveal your emotional health and how you interact with others in your circle."
        },
        {
            icon: "security",
            iconBg: "bg-red-100 text-red-600",
            title: "Fears & Defenses",
            desc: "Identify subconscious blocks and defense mechanisms holding you back."
        },
        {
            icon: "star",
            iconBg: "bg-indigo-100 text-indigo-600",
            title: "Strengths & Motivations",
            desc: "Discover your untapped potential and what truly drives your ambition."
        },
        {
            icon: "lightbulb",
            iconBg: "bg-purple-100 text-purple-600",
            title: "Imagination & Integrity",
            desc: "Explore your creative capacities and moral alignment through your stroke patterns."
        }
    ];

    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-6">What I Do?</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        As a Professional Handwriting Analyst, I have the skill to support you in re-discovering yourself through your unique script. A pen and paper is all you need for me to decode:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 ${item.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                                <span className="material-icons">{item.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
