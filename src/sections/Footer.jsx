import React from "react";

const Footer = () => {
  return (
    <div>
      <svg className="mb-40" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="red"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
          
        />
        <text className="text-[6px] uppercase  font-playfair tracking-tighter">
          {[...Array(3)].map((_, i) => (
            <textPath href="#curve" startOffset={` ${40*i}%`} key={i}>
              Corner of my bed
            </textPath>
          ))}
        </text>
      </svg>
    </div>
  );
};

export default Footer;
