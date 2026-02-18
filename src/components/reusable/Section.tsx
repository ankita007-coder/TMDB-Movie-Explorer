import type React from "react";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}
export default function Section({ title, children, className }: SectionProps) {
  return (
    <section className={className}>
      {title && <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </section>
  );
}
