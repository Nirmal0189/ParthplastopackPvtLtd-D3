'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface SmoothImageProps extends ImageProps {
  wrapperClassName?: string;
}

export default function SmoothImage({ src, alt, className, wrapperClassName, ...props }: SmoothImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Fallback to check if image is already loaded from cache (common on mobile iOS/Safari)
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={cn("relative flex items-center justify-center", wrapperClassName)}>
      {/* Shimmer Effect while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200/40 animate-pulse rounded-inherit z-0" />
      )}
      
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(
          className,
          "transition-all duration-700 ease-out z-10",
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
