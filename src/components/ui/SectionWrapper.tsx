interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  background?: "white" | "soft" | "gradient";
  className?: string;
}

const bgStyles = {
  white: "bg-white",
  soft: "bg-white-soft",
  gradient: "bg-gradient-to-b from-white-soft to-white",
};

export function SectionWrapper({
  children,
  id,
  background = "white",
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${bgStyles[background]} ${className}`}
      style={{
        paddingTop: "clamp(2.75rem, 6vw, 5.625rem)",
        paddingBottom: "clamp(2.75rem, 6vw, 5.625rem)",
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--max-w-content)",
          paddingLeft: "clamp(1rem, 3vw, 2rem)",
          paddingRight: "clamp(1rem, 3vw, 2rem)",
        }}
      >
        {children}
      </div>
    </section>
  );
}
