import React from "react";

interface Props {
  tool: string;
}
export default function ToolChip({ tool }: Props) {
  return (
    <span
      key={tool}
      className="bg-secondary text-primary px-3 py-1 rounded-full text-sm hover:shadow-sm transition"
    >
      {tool}
    </span>
  );
}
