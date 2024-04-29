import {

  web,
  javascript,
  html,
  github,
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
   {
    title: "Data Scientist",
  company_name: "Measurements and Sensors Technology",
  icon: mst,
  iconBg: "#383E56",
  date: "Feb 2024 - Jan 2024",
     points: [
       "develop an automated data processing  pipeline for electrical impedance tomography",

   ],
  },

  
];
const certificates=[
  {
    name:"Tensorflow Developer Certificate",
    certifProvider:"Tensorflow (Google)",
    pdfName:"https://drive.google.com/file/d/1t-m9Y1DBMxTD6DZH8mesUQo-5xBbUcTq/view?usp=sharing",

  },
  {
    name:"Natural Language Processing Specialization",
    certifProvider:"DeepLearning.AI (Coursera)",
    pdfName:"https://drive.google.com/file/d/1IO9H2tN0-ZZuJ4jNzbtTJlNRkfEzVy7e/view?usp=sharing",

  },
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
  {
    name: "Image Captioning",
    description:"implement an image captioning system using deep learning techniques. It utilizes a pre-trained VGG16 model to extract features from images and an LSTM-based neural network to generate captions. The Flickr8k dataset is employed for training and testing the model. The process involves data preprocessing, including cleaning and tokenizing captions, and training the model using Keras. Performance evaluation is done using BLEU scores. Additionally, functions are provided to generate captions for sample images and predict captions for new images using the trained model.",
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
        name: "VGG16",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/oussamabenhariz/Image_captioning.git",
  },
  {
    name: "Lip Reading",
    description:"Built a deep learning model for lip reading using CNNs and LSTMs. It loads video data along with corresponding text alignments, preprocesses them, and constructs a data pipeline. The model architecture includes convolutional and recurrent layers. Training options such as custom loss function and learning rate scheduler are defined, and the model is trained. Predictions are made on test data, and the model's performance is evaluated. Finally, the model is tested on a video sample, and predictions are compared with actual text alignments.",
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
        name: "Lipnet",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/oussamabenhariz/Lipnet.git",
  },
];

export { services, technologies, experiences, projects,certificates, };
