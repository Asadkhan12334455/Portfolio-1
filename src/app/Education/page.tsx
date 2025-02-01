// 'use client';

// import React from 'react';

// const educationData = [
//   { year: '2022', title: 'Nasra Secondary School (D.H.S) Campus', description: 'Matriculation: Computer Science' },
//   { year: '2024', title: 'Jamia Millia College Morning (Shah Faisal)', description: 'Intermediate: Computer Science' },
//   { year: '2025', title: 'Presidential Initiative For Artificial Intelligence & Computing (PIAIC)', description: 'Certified Agentic And Robotic AI Engineer' },
//   { year: 'Job', title: 'Freelancer', description: 'UPWORK: Frontend Developer' },
//   { year: 'Job', title: 'Frontend Developer', description: 'Presidential Initiative For Artificial Intelligence & Computing (PIAIC)' },
// ];

// export default function Education() {
//   return (
//     <section id="education" className="bg-black text-white py-20 px-6 min-h-screen flex flex-col items-center">
//       <h2 className="text-5xl font-extrabold text-center mb-16 text-red-500">Education</h2>
//       <div className="max-w-4xl mx-auto relative">
//         <div className="absolute left-1/2 w-1 bg-red-500 h-full transform -translate-x-1/2"></div>
//         <div className="absolute left-1/2 top-0 h-6 w-6 bg-red-500 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-red-500"></div>
//         {educationData.map((item, index) => (
//           <div
//             key={index}
//             className={`relative flex flex-col max-w-[45%] ${index % 2 === 0 ? 'items-start ml-0' : 'items-end ml-auto'} my-8 p-6 bg-gray-800 rounded-lg border border-gray-600 shadow-2xl shadow-gray-700 transition transform hover:scale-110 hover:shadow-red-500/50`}
//           >
//             <div className="text-lg font-bold text-red-400">{item.year}</div>
//             <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>
//             <p className="text-white opacity-80 mt-1">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
