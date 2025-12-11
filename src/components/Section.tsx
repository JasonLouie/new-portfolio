interface SectionProps {
    title?: string,
    className?: string,
    children: React.ReactNode,
}

export default function Section({
    title,
    className,
    children
} : SectionProps) {
    const classes = `px-8 py-10 ${className}`;

    return (
        <section className={classes}>
            {title && <h1 className="text-3xl mb-3 font-bold text-center">{title}</h1>}
            {children}
        </section>
    );
}