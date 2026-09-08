import { cn } from '../../utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circle' | 'rectangle' | 'card';
  width?: string;
  height?: string;
}

export const Skeleton = ({ className, variant = 'text', width, height, ...props }: SkeletonProps) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';
  const variants = {
    text: 'h-4',
    circle: 'rounded-full',
    rectangle: 'h-24',
    card: 'h-48 rounded-xl',
  };

  return (
    <div
      className={cn(baseClasses, variants[variant], className)}
      style={{ width, height }}
      {...props}
    />
  );
};

interface SkeletonGroupProps {
  count: number;
  children: React.ReactNode;
}

export const SkeletonGroup = ({ count, children }: SkeletonGroupProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>{children}</div>
      ))}
    </>
  );
};