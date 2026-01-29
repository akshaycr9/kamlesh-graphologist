
const Benefits = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden" id="why-matters">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <h2 className="text-4xl font-bold mb-8">Why Handwriting Matters</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl leading-relaxed">
                            Handwriting is a neuro-muscular movement connected to your subconscious mind. Changing your strokes can reprogram your inner patterns — this process is called <span className="text-primary dark:text-secondary font-semibold">Graphotherapy</span>.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined">health_and_safety</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Health</h4>
                                <p className="text-slate-600 dark:text-slate-400">Manage stress levels, achieve anxiety reduction, and find emotional balance.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Money</h4>
                                <p className="text-slate-600 dark:text-slate-400">Build confidence, remove psychological blocks, and cultivate an abundance mindset.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined">diversity_3</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Relationships</h4>
                                <p className="text-slate-600 dark:text-slate-400">Develop empathy, enhance communication, and bring harmony to your connections.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined">work</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">Career</h4>
                                <p className="text-slate-600 dark:text-slate-400">Sharpen leadership skills, improve focus, and accelerate professional success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="bg-primary p-8 rounded-3xl text-white h-full relative overflow-hidden group">
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined">edit_note</span>
                                Signature Correction
                            </h3>
                            <div className="space-y-6 relative z-10">
                                <p className="text-slate-200 text-lg leading-relaxed">
                                    Your signature is your public autobiography. It is a direct reflection of your <span className="text-secondary font-bold">self-image</span> and how you wish the world to perceive you.
                                </p>
                                <div className="h-px bg-white/20"></div>
                                <p className="text-slate-200 leading-relaxed">
                                    A scientific correction of your signature can project <span className="text-secondary font-bold">unshakeable confidence</span> and align your public persona with your inner potential.
                                </p>
                                <div className="pt-4">
                                    <img alt="Signature Sample" className="rounded-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-500 h-24 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwC28Lv2eu7FG7eb4OZ0BlNTPfqVOBciJRD4qPLamZjDKZwomPOWyIKWUzp-GL4_bwwhE6MLmHyEcbFOOx2YWNWA9rv4lYITeD4unGaI3q6DxLZu6rTMDL2C9g_A2NGXRI_l307GYDqDVe4XqX72SsPdsc5phpNI95b8MFJY-rXQQQZvq7NdTAaPFHXmnal4MUWNuDzADn0dotAt50MUERclx-etr9D6I48fMYdxt8QkzBS0Jm8B6M00NCxsVWVKeuJAXY9BXJ-SEn" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
