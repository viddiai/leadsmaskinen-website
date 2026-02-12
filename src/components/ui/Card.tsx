interface CardProps {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}

export function Card({
  children,
  highlighted = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-lg border p-6 transition-shadow duration-200 md:p-8 ${
        highlighted
          ? "border-orange bg-white shadow-[var(--shadow-card-hover)]"
          : "border-grey-light bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
