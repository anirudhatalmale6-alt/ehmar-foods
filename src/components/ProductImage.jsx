import { useState } from 'react';

export default function ProductImage({ product, className = '', size = 'md' }) {
  const [failed, setFailed] = useState(false);

  const sizeMap = { sm: 'text-5xl', md: 'text-6xl', lg: 'text-7xl', xl: 'text-[8rem] sm:text-[10rem]' };

  if (product.image && !failed) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className={`w-full h-full object-cover ${className}`}
        onError={() => setFailed(true)}
        loading="lazy"
      />
    );
  }

  return (
    <div className={`w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center ${className}`}>
      <span className={`${sizeMap[size] || sizeMap.md} select-none`}>{product.emoji}</span>
    </div>
  );
}
