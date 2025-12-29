import * as React from 'react';
import clsx from 'clsx';

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={clsx('bg-white border border-muted rounded-t-xl', className)}
      {...props}
    />
  );
}

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={clsx(className)} {...props} />;
}
