import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const texts = useRef([]);
  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      },
    });
    console.log(scrollProgress)

    texts.current.forEach((text, i) => {
      text.setAttribute("startOffset", -42 + (i*42) + (scrollProgress*40)  + "%");

    });
  }, [scrollProgress]);

  return (
    <div ref={containerRef}>
      <svg className="pb-40" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
          
        />
        <text
          className="text-[6px] uppercase font-bold  font-playfair tracking-tighter"
          style={{ fill: "red" }}
        >
          {[...Array(3)].map((_, i) => (
            <textPath
              ref={(ref) => (texts.current[i] = ref)}
              href="#curve"
              startOffset={` ${40 * i}%`}
              key={i}
            >
              Corner of my bed , maybe?
            </textPath>
          ))}
        </text>
      </svg>
      <div className='h-[250px]'></div>
      
    </div>
  );
};

export default Footer;
