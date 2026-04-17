import { Camera } from 'lucide-react';

interface Props {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImagePlaceholder({ label, className = '', style }: Props) {
  return (
    <div className={`img-placeholder ${className}`} style={style}>
      <Camera size={28} style={{ opacity: 0.3 }} />
      <span>{label}</span>
    </div>
  );
}
