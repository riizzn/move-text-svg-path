import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);
  const texts = useRef([]);
  const trigRef = useRef(null);
  // Ref to hold the array of textPath elements

  useGSAP(
    () => {
      texts.current.forEach((text, i) => {
        gsap.to(text, {
          // Animate the 'startOffset' attribute
          attr: {
            // This is the *end* position
            startOffset: `${40 * i}%`, // END: 0%, 40%, 80%
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              trigRef.current = self.progress;
            },
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative">
      <svg className="pb-40" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text
          className="text-[6px] uppercase font-bold font-playfair tracking-tighter"
          style={{ fill: "red" }}
        >
          {[...Array(3)].map((_, i) => (
            <textPath
              key={i}
              ref={(el) => (texts.current[i] = el)}
              href="#curve"
              // This is the *start* position
              startOffset={`${40 * i - 40}%`} // START: -40%, 0%, 40%
            >
              Corner of my bed , maybe?
            </textPath>
          ))}
        </text>
      </svg>

      <Logos ref={trigRef} />
    </div>
  );
};

export default Footer;

export const Logos = () => {
  const smallRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      smallRef.current,
      { y: -700 },
      {
        y: 0,
        duration:1,
        delay: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="h-[250px] bg-black">
      <div
        ref={smallRef}
        className="h-full flex gap-5 font-bold text-white text-3xl justify-center items-center"
      >
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </div>
    </div>
  );
};
