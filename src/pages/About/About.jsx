import React from 'react';

function About() {
  return (
    <div className="flex justify-center items-start w-[100vw] h-[100vh] flex-col px-4 mt-4">
      <h1 className="text-3xl text-black text-center w-full mb-6">About IIT (ISM) Dhanbad</h1>
      <p className="text-center max-w-2xl mx-auto">
        Established in 1926, IIT (ISM) Dhanbad stands as a beacon of learning, innovation, and research. 
        As we approach our centenary year in 2026, we celebrate nearly a century of educational excellence, 
        impactful research, and international collaborations. Recognized for our cutting-edge programs in engineering, 
        applied sciences, management, and humanities, IIT (ISM) Dhanbad has nurtured leaders, innovators, and global thinkers. 
        Our strong commitment to fostering an inclusive and dynamic learning environment positions us as one of India’s premier institutions.
      </p>
    </div>
  );
}

export default About;
