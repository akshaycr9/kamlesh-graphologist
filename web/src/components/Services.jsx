
const Services = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-6">What I Do?</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">As a Professional Handwriting Analyst, I have the skill to support you in re-discovering yourself through your unique script. A pen and paper is all you need for me to decode:</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                            <span className="material-icons">person</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3">Personality & Character</h4>
                        <p className="text-slate-600 dark:text-slate-400">Deep dive into your core persona and the fundamental traits that define who you are.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                            <span className="material-icons">psychology</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3">Thinking Patterns</h4>
                        <p className="text-slate-600 dark:text-slate-400">Understand how you process information and make decisions in daily life.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                            <span className="material-icons">favorite</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3">Relationships & Energy</h4>
                        <p className="text-slate-600 dark:text-slate-400">Reveal your emotional health and how you interact with others in your circle.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                            <span className="material-icons">security</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3">Fears & Defenses</h4>
                        <p className="text-slate-600 dark:text-slate-400">Identify subconscious blocks and defense mechanisms holding you back.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                            <span className="material-icons">star</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3">Strengths & Motivations</h4>
                        <p className="text-slate-600 dark:text-slate-400">Discover your untapped potential and what truly drives your ambition.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                            <span className="material-icons">lightbulb</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3">Imagination & Integrity</h4>
                        <p className="text-slate-600 dark:text-slate-400">Explore your creative capacities and moral alignment through your stroke patterns.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
