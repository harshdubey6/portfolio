import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({ children, align = "center" }: SectionHeadingProps) {
  return (
    <h2 className={`text-2xl font-semibold capitalize mb-6 ${align === "left" ? "text-left" : "text-center"}`}>
      {children}
    </h2>
  );
}
