import { icons } from 'lucide-react';

const LucideIcon = ({ name, color, size }) => {
    const LucideIcon = icons[name];

    return <LucideIcon color={color} size={size} />;
};

export default LucideIcon;