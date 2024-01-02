import {

  web,
  javascript,
  html,
  css,
  reactjs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  python,
  java,
  tensorflow,
  tflite,
  tfjs,
  nestjs,
  mysql,
  ml,
  dl,
  nlp,
  tekru,
  edus,
  mst,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: ml,
  },
  {
    title: "Deep Learning Engineer",
    icon: dl,
  },
  {
    title: "NLP Engineer",
    icon: nlp,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Tensorflow Lite",
    icon: tflite,
  },
  {
    name: "Tensorflow JS",
    icon: tfjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Mysql ",
    icon: mysql,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: " Tekru Technologies",
    icon: tekru,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Analyze and design a Raspberry to make smart advertising.",
      "Develop a script in Python language that takes advantage of the features of the Google Maps API and Firebase.",
      "Implement the script in a Raspberry board.",
    ],
  },
  {
    title: "Back-end developer Intern (NestJS)",
    company_name: "Edu Spazio",
    icon: edus,
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
      "Develop a server using the framework NestJS" ,
      "Ensure the security and performance of the server using such techniques as clustering ,authentication and authorization.",
    ],
  },
  // {
  //   title: "Data Scientist",
  //   company_name: "Measurements and Sensors Technology",
  //   icon: mst,
  //   iconBg: "#383E56",
  //   date: "Feb 2024 - Jan 2024",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

  
];
const certificates=[
  {
    name:"Machine Learning Specialization",
    certifProvider:"DeepLearning.AI (Coursera)",
    pdfName:"https://drive.google.com/file/d/1DNq3IhlbxIYGWhJox1b10MN0FXJzlfFL/view?usp=sharing",

  },
  {
    name:"Deep Learning Specialization",
    certifProvider:"DeepLearning.AI (Coursera)",
    pdfName:"https://drive.google.com/file/d/1S0ZqNg5AW-2w3iUmoHU7weSsgeJ_AgRc/view?usp=sharing",

  },
  {
    name:"Azure AI Fundamentals",
    certifProvider:"Microsoft",
    pdfName:"https://drive.google.com/file/d/1RPdL9O-em5Tsllnsphm8tz0loln9Cdqg/view?usp=sharing",

  },
  {
    name:"Azure Data Fundamentals",
    certifProvider:"Microsoft",
    pdfName:"https://drive.google.com/file/d/1pPvnrLstF9JuRbts24ZJUOwXZQsT3dYo/view?usp=sharing",

  },
  {
    name:"Node JS",
    certifProvider:"ZeroToMastery (Udemy)",
    pdfName:"https://drive.google.com/file/d/1MBmTto3lmbn5118g3iir7zn1WaSnpJbo/view?usp=sharing",
  },
  {
    name:"React JS",
    certifProvider:"CrocoCoder",
    pdfName:"https://drive.google.com/file/d/1Ss8ArAv779Nul-h9wvaaxxSNP6i5AdJ5/view?usp=sharing",
  },
  
]



const projects = [
  {
    name: "Object Detection",
    description:
    "Develop a model that can detect 20 objects using the YOLO Algorithm and Tensorflow, also used albumentations to do data augmentation.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TenserFlow",
        color: "green-text-gradient",
      },
      {
        name: "Yolo",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/oussamabenhariz/Object-Detection-with-YOLO.git",
  },
  {
    name: "Image Generation",
    description:
      "built and trained a DCGAN to generate realistic and diverse human faces from celebrity photos using Python and Tensorflow. used various techniques to improve the image quality and diversity and evaluated the model performance using visual inspection.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "DCGAN",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/oussamabenhariz/DCGan-using-Tensorflow-.git",
  },
  {
    name: "Action Recognition",
    description:
      "Developed a real-time action recognition system using MediaPipe for pose estimation and an LSTM neural network for classification.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/oussamabenhariz/ActionDetectionWithTensorflowAndMediapipe.git",
  },
];

export { services, technologies, experiences, projects,certificates, };
