interface OptionsAnimation {
    className?: string;
    animateMoreThanOnce?: boolean;
}

interface OptionsTransitionDelay {
    numberOfElements?: number;
    index?: number;
    delayIncrement?: number;
    mode?: "staggered" | "random";
}

export function useAnimation(options: OptionsAnimation = {}) {
    const { className, animateMoreThanOnce } = {
        ...{ className: "animation", animateMoreThanOnce: false },
        ...options,
    };

    let observer: IntersectionObserver | null = null;

    onMounted(async () => {
        await setAnimation();
    });

    onUpdated(async () => {
        await setAnimation();
    });

    async function setAnimation() {
        setIntersectionObserver();
        await animate();
    }

    function setIntersectionObserver() {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.classList.contains(`start-${className}`)) {
                    entry.target.classList.add(`start-${className}`);
                } else if (animateMoreThanOnce) {
                    entry.target.classList.remove(`start-${className}`);
                }
            });
        });
    }

    async function animate() {
        await nextTick();
        const noAnimationElements = document.querySelectorAll(`.${className}`);
        noAnimationElements.forEach((element) => {
            observer?.observe(element);
        });
    }

    function getTransitionDelay(options: OptionsTransitionDelay) {
        const { numberOfElements, index, delayIncrement, mode } = {
            ...{ numberOfElements: 9, index: 1, delayIncrement: 100, mode: "staggered" },
            ...options,
        };

        if (mode === "staggered") {
            if (!Number(index % numberOfElements)) {
                return 0 + "ms";
            }

            return (index % numberOfElements) * delayIncrement + "ms";
        }

        if (mode === "random") {
            if (!Number(index % numberOfElements)) {
                return 0 + "ms";
            }

            return Math.floor(Math.random() * (numberOfElements * 100 - 100 + 1) + 100) + "ms";
        }
    }

    return {
        getTransitionDelay,
    };
}
