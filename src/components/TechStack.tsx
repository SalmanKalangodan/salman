import React from 'react';

const techStack = [
  { name: "HTML", icon: "https://img.icons8.com/?size=48&id=20909&format=png" },
  { name: "CSS", icon: "https://img.icons8.com/?size=48&id=21278&format=png" },
  { name: "JavaScript", icon: "https://th.bing.com/th/id/OIP.bN6cnS4rQ5PWJcYI9jFVGQHaHa?rs=1&pid=ImgDetMain" },
  { name: "React", icon: "https://th.bing.com/th/id/OIP.JCGGgssMIuUrZFU3I6jv0AHaHC?rs=1&pid=ImgDetMain" },
  { name: "Redux", icon: "https://th.bing.com/th/id/OIP.QkI9rLXxb4fBMHKwZ0JYqgAAAA?rs=1&pid=ImgDetMain" },
  { name: "Bootstrap", icon: "https://th.bing.com/th/id/OIP.xiQ6oEk0-lZ1Rre1ihj80gAAAA?w=256&h=256&rs=1&pid=ImgDetMain" },
  { name: "Tailwind CSS", icon: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257079/file-type-tailwind-icon-md.png" },
  { name: "Node.js", icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/233_Node_Js-512.png" },
  { name: "Express.js", icon: "https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?rs=1&pid=ImgDetMain" },
  { name: "MongoDB", icon: "https://th.bing.com/th/id/OIP.CzNB3YomS9ywOxYYqJMoxwHaHa?rs=1&pid=ImgDetMain" },
  { name: "Type Script", icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png" },
  { name: "Git", icon: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912097/git-icon-md.png" },
  { name: "AWS", icon: "https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png" },
  { name: "Vercel", icon: "https://th.bing.com/th/id/OIP.DjyyR-WqcyVc6nYaLA2XawAAAA?rs=1&pid=ImgDetMain" },
];

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center">My Tech Stack</h2>
      <p className="text-center text-gray-600">Technologies I've been working with recently</p>
      <div className="flex justify-center flex-wrap mt-8">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center m-4 w-20">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
            <span className="mt-2 text-gray-800 text-sm text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
