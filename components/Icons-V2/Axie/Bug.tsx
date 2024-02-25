import React, { forwardRef } from 'react';
import { ISvgProps } from '../Icon.type';

export const IconAxieBug = forwardRef<SVGSVGElement, ISvgProps>(
  function IconAxieBug({ className, ...props }, ref) {
    return (
      <svg
        viewBox="0 0 16 16"
        fill="#ff5341"
        className={className}
        {...props}
        ref={ref}
      >
        <path d="M13.264 3.198c-1.565.33-3.077.994-4.084 2.216A6.19 6.19 0 008 7.704a6.19 6.19 0 00-1.18-2.29C5.813 4.192 4.301 3.527 2.736 3.198c-.357-.075-.75-.181-1.116-.197-.72-.031-.612.948-.616 1.439-.006.666.103 1.328.249 1.979.171.764.311 1.571.851 2.193.356.41.846.692 1.321.972.083.048.169.1.213.183.05.095.033.208.016.313l-.383 2.245c-.029.168-.048.366.081.484a.53.53 0 00.239.105c1.534.367 3.211-.478 4.01-1.774.176-.286.305-.585.399-.893.094.308.223.607.399.893.799 1.296 2.476 2.141 4.01 1.774a.529.529 0 00.238-.105c.13-.118.11-.316.082-.484l-.383-2.245c-.018-.105-.034-.218.016-.313.044-.082.13-.135.212-.183.476-.28.966-.561 1.322-.972.54-.622.68-1.43.851-2.193.146-.65.255-1.313.25-1.98-.005-.49.104-1.47-.617-1.438-.366.016-.759.122-1.116.197z" />
      </svg>
    );
  },
);
