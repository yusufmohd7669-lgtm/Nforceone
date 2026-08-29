import React from "react";
import * as Icons from "lucide-react";

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export function IconRenderer({ name, className = "w-5 h-5", size = 20 }: IconRendererProps) {
  // @ts-expect-error Lucide icons indexed dynamically
  const IconComponent = Icons[name] || Icons.Layers;
  return <IconComponent className={className} size={size} />;
}
