
const Process = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-slate-900/50" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold mb-6">Your Path to Transformation</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">A structured methodology to unlock your subconscious potential and drive meaningful life changes.</p>
                </div>
                <div className="relative">
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-background-light dark:ring-slate-900">1</div>
                            <h4 className="text-xl font-bold mb-3">Sample Analysis</h4>
                            <p className="text-slate-600 dark:text-slate-400">Submission of your handwriting and signature samples for deep scientific examination.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-background-light dark:ring-slate-900">2</div>
                            <h4 className="text-xl font-bold mb-3">Personality Mapping</h4>
                            <p className="text-slate-600 dark:text-slate-400">Decoding traits, mental blocks, and strengths into a comprehensive persona report.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-background-light dark:ring-slate-900">3</div>
                            <h4 className="text-xl font-bold mb-3">Graphotherapy Plan</h4>
                            <p className="text-slate-600 dark:text-slate-400">Curating specific stroke exercises to reprogram subconscious patterns for betterment.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-background-light dark:ring-slate-900">4</div>
                            <h4 className="text-xl font-bold mb-3">Progress Tracking</h4>
                            <p className="text-slate-600 dark:text-slate-400">Regular follow-ups and evaluation to ensure lasting behavioral transformation.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-20 bg-primary/5 dark:bg-primary/20 p-8 rounded-3xl border border-primary/10 text-center max-w-4xl mx-auto">
                    <h5 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Moving Ahead</h5>
                    <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-0 leading-relaxed">
                        "Your handwriting is your blueprint. Small changes can lead to major life improvements. Let's unlock your potential, one stroke at a time."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Process;
