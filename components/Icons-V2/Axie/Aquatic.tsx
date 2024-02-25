import React, { forwardRef } from 'react';
import { ISvgProps } from '../Icon.type';

export const IconAxieAquatic = forwardRef<SVGSVGElement, ISvgProps>(
  function IconAxieAquatic({ className, ...props }, ref) {
    return (
      <svg
        viewBox="0 0 16 16"
        fill="#00b8ce"
        className={className}
        {...props}
        ref={ref}
      >
        <path d="M15.036 5.73c-.136-.615-.329-1.207-.989-.985-.3.102-.578.285-.843.47a8.114 8.114 0 00-1.82 1.777c-.646-1.22-1.717-2.15-2.73-2.786-1.575-.99-3.155-1.12-4.78-.239C2.5 4.712 1.326 6.03.94 7.717a2.81 2.81 0 00-.051.304c.012.1.027.202.05.304.387 1.686 1.562 3.005 2.935 3.75 1.625.88 3.205.751 4.78-.24 1.013-.636 2.084-1.565 2.73-2.786a8.108 8.108 0 001.82 1.776c.265.186.542.37.843.471.66.222.853-.369.989-.985.165-.747.21-1.522.189-2.29.02-.768-.024-1.543-.19-2.29" />
      </svg>
    );
  },
);
