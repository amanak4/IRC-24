import React from 'react';
import bg1 from "../../assets/bg2.jpg"
const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'contrast(100%)',
    opacity: '0.65',
    height: '100vh',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
    fontFamily: "Maven Pro"
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    margin: '0.5rem 0',
    fontFamily: "Itim",
  fontWeight: 'bold',
  fontStyle: 'normal',
  color: '#8f1402'
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: '500',
    marginTop: '1rem',
    fontFamily: "Ubuntu",
  fontWeight: 'semi-bold',
  fontStyle: 'normal',
  };

  return (
    <div>
     <div className='flex flex-col justify-center items-center'>
     <img src={bg1} alt="Background Image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1,opacity: '0.65' }}  />
     <div className='z-10'>
     <svg id="svg" viewBox="0, 0, 400,27.708333333333336">
                    <g id="svgg">
                        <path id="path0" d="M0.000 13.854 L 0.000 27.708 200.000 27.708 L 400.000 27.708 400.000 14.216 L 400.000 0.725 395.573 1.822 C 322.012 20.064,241.242 29.243,178.709 26.467 C 123.876 24.033,57.451 14.315,4.123 0.926 C 2.094 0.417,0.336 0.000,0.217 0.000 C 0.069 0.000,0.000 4.399,0.000 13.854" stroke="none" fill="#fff" fill-rule="evenodd"></path>
                    </g>
                </svg>
     </div>
     </div>
    <div className='flex justify-center align-middle w-[100vw] h-[100vh] items-center flex-col'>
    <p style={subtitleStyle}>Dec 11-12, IIT(ISM) Dhanbad, India</p>
      <h1 style={titleStyle} className=' text-[#000000]'>All India International Relations Conclave</h1>
      <h2 style={titleStyle}>2024</h2>
      <p style={headingStyle}>Study in India – A Pathway to Excellence</p>
    </div>
    </div>
  );
};

export default Home;
