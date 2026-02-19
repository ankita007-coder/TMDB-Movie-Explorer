import type React from "react";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}
export default function Section({ title, children, className }: SectionProps) {
  return (
    <section className={`${className} mb-8`}>
      {title && <h2 className="text-2xl md:text-2xl font-bold px-4">{title}</h2>}
      {children}
    </section>
  );
}
