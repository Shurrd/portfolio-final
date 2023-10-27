import React from 'react';
import Abraham from '../images/abraham.jpg';

const About = () => {
  return (
    <div
      id='about'
      className='bg-gray-800 flex flex-col md:flex-row md:justify-center justify-start md:h-[100vh] h-full items-center lg:px-24 md:px-10 px-8 md:py-0 py-12 gap-14'
    >
      <div className='md:block hidden h-[80%] w-[1150px] xl:w-[550px] lg:w-[900px]'>
        <img
          src={Abraham}
          alt='abraham'
          className='w-full h-full md:block border rounded-full'
        />
      </div>
      <div className='flex gap-6 flex-col'>
        <p className='text-[#a8a8e7] text-xl font-bold'>WHO IS ABRAHAM ?</p>
        <p className='text-5xl font-bold mt-[-1rem] mb-[1.5rem]'>
          A Bit About Me
        </p>
        <p>
          A recent graduate leveraging studies in Electrical and Electronics
          Engineering and equally gaining skills in software development,
        </p>
        <p>
          who is easily able to adapt to new environments and has excellent
          organizational and positive interpersonal skills
        </p>
        <p>
          and who is also highly motivated, organized and target oriented seeks
          real-world experience as an Electrical and Software Engineer.
        </p>
        <p>
          I am not all "Geeky" haha 😉, <br />
          You can also catch me gaming as well as watching basketball and
          soccer.
        </p>
      </div>
    </div>
  );
};

export default About;
