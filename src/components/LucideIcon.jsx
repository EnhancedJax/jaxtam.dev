import { icons } from "lucide-react";

function LucideIcon({ name, size, ...props }) {
  const LucideIcon = icons[name];

  return <LucideIcon size={size} {...props} />;
}

export default LucideIcon;
