import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a pre-final year student pursuing B.Tech. in Computer Science & Engineering from Babu Banarasi Das Institute Of Technology & Management, Lucknow
I’m a curious learner and passionate Software Developer in the making. I’m on a journey to turn my love for coding into solutions that make a difference.
I thrive on tackling challenges, learning something new every day, and bringing creative ideas to life through technology. Whether it’s solving complex problems or crafting intuitive solutions, I’m always up for the adventure!
As someone who’s constantly evolving, I’m excited to take on new projects and grow through every opportunity. Let’s create something amazing together!`;

export const ABOUT_TEXT = `I’m  a B.Tech Computer Science student with a strong passion for technology and problem-solving. 
Driven by curiosity and a desire to innovate, I aim to become a skilled Full Stack Web Developer capable of crafting efficient, scalable, 
and user-friendly solutions to real-world problems. With hands-on experience in Python, SQL, Java and JavaScript, I’m steadily building
 my expertise in both frontend and backend development. My journey is fueled by a constant thirst for learning, and I am always on the 
 lookout for opportunities to take on new challenges and grow as a developer. Whether it’s collaborating on impactful projects or 
 exploring the latest technologies, I’m ready to make a meaningful contribution to the world of software development.`;

export const EXPERIENCES = [
  {
    year: "March, 2024 - June, 2024",
    role: "Project Intern",
    company: "Infosys Springboard",
    certificate: "View Certificate",
    description: `During my internship as a Project Intern, I independently developed an E-Commerce website for a sweet 
    store named "Sweetspot" under the guidance of mentors. Utilizing Angular17, I created a user-friendly interface implemented an online ordering 
    and customization module, allowing users to select customized cakes based on occasion. The module seamlessly integrated with a shopping 
    cart functionality, enabling users to add products and proceed to a basic checkout flow.
Also developed a robust store management module leveraging Angular 17 local storage. This module enabled CRUD
(Create, Read, Update, Delete) operations on store locations data. This project allowed me to enhance my skills in frontend development, 
       meet deadlines effectively, and deliver a scalable, user-focused solution.`,
    technologies: ["Typescript", "Angular17", "BootStrap"],
  }
];

export const PROJECTS = [
  {
    title: "SweetSpot",
    image: project1,
    link: "https://github.com/silkirai1812/SweetSpot",
    description:
      "An e-commerce website for online cake delivery services, aims to facilitate seamless user interface and user experience, built with Angular17.",
    technologies: ["Angular17", "BootStrap", "TypeScript"],
  },
  {
    title: "Digital Dashboard App",
    image: project2,
    link: "https://github.com/singhshreya-bhriguvanshi/Mini-Project",
    description:
      "This website provides you with a single view of all the information you need to be productive, such as your to-do list, calendar, weather and many more. It provides a professional and efficient workspace with a wide range of tools and resources.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "Pinterest Clone",
    image: project3,
    link: "https://github.com/silkirai1812/PinterestClone",
    description:
      "The goal of this project is to make pinterest like website using backend technology.A full-stack Pinterest clone using MongoDB, Express.js, and Node.js. Enabled users to create boards, pin images, and explore a responsive interface. Demonstrated proficiency in frontend and backend technologies, user authentication, and efficient data management with MongoDB.",
    technologies: ["MongoDB", "NodeJs","Express"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    link: "https://github.com/silkirai1812/PinterestClone",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React","Node", "Tailwind"],
  },
  
];

export const CONTACT = {
  address: "Lucknow, Uttar Pradesh,India ",
  phoneNo: "+91 95558 96143 ",
  email: "silkyrai18@gmail.com",
};