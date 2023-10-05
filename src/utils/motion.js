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