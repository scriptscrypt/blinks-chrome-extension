import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#pattern0_18_71)" d="M0 0H32V32H0z" />
      <defs>
        <pattern
          id="pattern0_18_71"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_18_71"
            transform="matrix(.0022 0 0 .0022 -.063 -.063)"
          />
        </pattern>
        <image
          id="image0_18_71"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgComponent;
