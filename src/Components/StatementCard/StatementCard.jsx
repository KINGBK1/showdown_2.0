import React from "react";

const StatementCard = ( {statement} ) => {
  return (
    <div className="relative bg-zinc-800 shadow-lg rounded-lg overflow-hidden p-6 m-8">
    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <rect
        rx="8"
        ry="8"
        className="line"
        height="100%"
        width="100%"
        strokeLinejoin="round"
        style={{
          fill: 'none',
          stroke: '#4a5568',
          strokeWidth: 2,
          strokeDasharray: 510,
          animation: 'svgAnimation 5s linear infinite',
        }}
      />
    </svg>
    <div className="relative z-10">
      <h3 className="text-xl font-semibold text-white">{statement.title}</h3>
      <p className="text-gray-300">{statement.description}</p>
    </div>
  </div>
  
    
  );
};

export default StatementCard;
