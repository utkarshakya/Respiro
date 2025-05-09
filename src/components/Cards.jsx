import React from "react";

export function CardForLink({ heading, description }) {
  return (
    <div className="group relative max-w-md min-h-[200px] bg-gray-900 p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/50 border border-gray-800 cursor-pointer">
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative">
        {/* Heading with animated underline */}
        <h3 className="text-2xl font-bold text-white mb-3 inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
          {heading}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-6 transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export function CardForInfo({ title, description }) {
  return (
    <div className="group relative max-w-sm min-h-[200px] bg-gray-900 p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/50 border border-gray-800 cursor-default">
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative">
        {/* Heading with animated underline */}
        <h3 className="text-2xl font-bold text-white mb-3 inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-6 transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}

// List for key points
// return (
//   <div className="max-w-2xl mx-auto space-y-4">
//     <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
//       Key Features
//     </h2>

//     <ul className="space-y-4">
//       {[
//         "Smooth hover interactions with subtle animations",
//         "Modern dark theme with gradient accents",
//         "Responsive design for all screen sizes",
//         "Clean typography hierarchy",
//         "Low-contrast but readable text elements",
//         "CSS-powered transitions with 300ms duration",
//         "Reusable component structure",
//         "Easy color customization"
//       ].map((feature, index) => (
//         <li
//           key={index}
//           className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-gray-900/50 hover:scale-[1.02] border border-gray-800 hover:border-gray-700"
//         >
//           {/* Animated bullet point */}
//           <div className="flex-shrink-0 mt-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 transition-transform duration-300 hover:scale-110" />

//           <span className="text-gray-400 text-lg leading-relaxed transition-colors duration-300 hover:text-gray-300">
//             {feature}
//           </span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
