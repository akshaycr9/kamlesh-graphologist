
const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 dark:bg-primary/10 -skew-x-12 -translate-x-24"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-lg bg-primary/10 text-primary dark:text-secondary font-bold text-sm tracking-wider uppercase mb-4">Master Graphologist</span>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                            Your <span className="text-primary italic font-serif">Handwriting</span> <br /> Speaks
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
                            Unlock the secrets of your personality, character, and subconscious mind through the scientific study of graphology.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer" href="#services">Explore Services</a>
                            <a className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer" href="#about">Learn More</a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                            <img alt="Handwriting Close-up" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwC28Lv2eu7FG7eb4OZ0BlNTPfqVOBciJRD4qPLamZjDKZwomPOWyIKWUzp-GL4_bwwhE6MLmHyEcbFOOx2YWNWA9rv4lYITeD4unGaI3q6DxLZu6rTMDL2C9g_A2NGXRI_l307GYDqDVe4XqX72SsPdsc5phpNI95b8MFJY-rXQQQZvq7NdTAaPFHXmnal4MUWNuDzADn0dotAt50MUERclx-etr9D6I48fMYdxt8QkzBS0Jm8B6M00NCxsVWVKeuJAXY9BXJ-SEn" />
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
