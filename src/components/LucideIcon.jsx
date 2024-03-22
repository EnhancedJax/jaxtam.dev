import { icons } from 'lucide-react';

function LucideIcon({ name, color, size }) {
    const LucideIcon = icons[name];

    return <LucideIcon color={color} size={size} />;
};

export default LucideIcon;