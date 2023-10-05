export function staggerContainer(staggerChildren, delayChildren) {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren,
            },
        },
    };
}

export function fadeIn(direction, type, delay, duration) {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {

            type,
            delay,
            duration,
            ease: "easeOut",
            },
        },
    };
}