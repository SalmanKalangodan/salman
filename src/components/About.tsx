import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="text-center text-gray-600 mt-4">
          Hi, I'm Salman Faris K, a passionate web developer with a knack for building dynamic and responsive web applications. I have a diverse skill set ranging from front-end development with React and Tailwind CSS to back-end development with Node.js and MongoDB.
        </p>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <img src="path_to_your_image" alt="Salman Faris K" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold mt-4">Who I Am</h3>
              <p className="text-gray-600 mt-2">
                I'm a web developer with a passion for creating interactive and user-friendly web applications. With a background in computer science, I have developed a strong foundation in both front-end and back-end technologies.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <img src="path_to_your_image" alt="My Mission" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold mt-4">My Mission</h3>
              <p className="text-gray-600 mt-2">
                My mission is to leverage my skills to build web applications that not only look great but also provide a seamless user experience. I aim to stay updated with the latest industry trends and continuously improve my skill set.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <img src="path_to_your_image" alt="My Skills" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold mt-4">My Skills</h3>
              <p className="text-gray-600 mt-2">
                I have expertise in a variety of technologies including HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, MongoDB, TypeScript, and more. I'm also experienced with tools like Git, AWS, and Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
