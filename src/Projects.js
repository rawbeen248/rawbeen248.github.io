import React from "react";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Header';
import './Projects.css'

//importing images
import cloud_of_pos_words from './assets/cloud_of_pos_words.png';
import gin_rummy from './assets/gin_rummy.png';
import yolo from './assets/yolo.jpg';
import house_price_prediction_heatmap from './assets/house_price_prediction_heatmap.png';
import kill_them_down from './assets/kill_them_down.png';
import sql_pie_chart from './assets/sql_pie_chart.png';
import confusion_matrix_fraud from './assets/confusion_matrix_fraud.png';
import diabetes_3d_scatter_plot from './assets/diabetes.png';
import homepage_fmdb from './assets/homepage_fmdb.png';
import bayesian_network from './assets/bayesian_network.png';
import pawpal from './assets/pawpal_home_screen.png';
import travel_reco from './assets/travel_reco.png';
import animal_sound_classifier from './assets/audio_classification.png';
import mcq_generator from './assets/mcq_quiz.png';
import huggingFaceIcon from './assets/hugging_face_icon.png';
import AALP from './assets/AALP.png';


const projectsData = [

  {
    title: 'Advanced Automated Lecture Processing (AALP)',
    image: AALP,
    description: 'This project develops an advanced automated lecture processing (AALP) tool that leverages state-of-the-art machine learning models to enhance the educational experience through automated video summarization and interactive learning features.',
    tools: 'Python, JavaScript, FastAPI, Transformers, Hugging Face',
    category: 'Automatic Speech Recognition, Machine Translation, Content Generation, Text Summarization, Video Summarization, Fine-Tuning',
    repoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7212179230141386752/' 
  },
  {
    title: 'Animal Sound Classifier',
    image: animal_sound_classifier,
    description: 'This project aims to build a model, hubert-finetuned-animals, that is a fine-tuned version of facebook/hubert-base-ls960 specifically for the task of animal sound classification. The model has been trained to identify various animal sounds from a subset of the ESC-50 dataset, focusing exclusively on animal categories.',
    tools: 'Python, Transformers, Hugging Face, Scikit-learn, Librosa, Torch',
    category: 'Audio Processing, Fine-Tuning, Sound Classification, Transfer Learning',
    repoLink: 'https://huggingface.co/ardneebwar/wav2vec2-animal-sounds-finetuned-hubert-finetuned-animals' 
  },
  {
    title: 'MCQ Generator',
    image: mcq_generator,
    description: 'This projectaims to build a model, Mistral 7B MCQ Generator, that is a fine-tuned version of the Mistralai/Mistral-7B-v0.1 aimed at generating multiple-choice questions (MCQs) with their correct answers. Developed to aid in educational content creation, this tool is perfect for educators, e-learning content creators, and students preparing for exams.',
    tools: 'Python, Transformers, Hugging, Face, Torch, NLTK',
    category: 'Natural Language Processing, Parameter-Efficent Fine-Tuning, Text Generation',
    repoLink: 'https://huggingface.co/ardneebwar/mistral_7b_mcq_generator' 
  },

  {
    title: 'Bayesian Network for News/Statements Credibility Assessment',
    image: bayesian_network,
    description: 'This project aims to address the research question: What indicators most significantly determine the credibility of news statements? Using a Bayesian Network, it captures the probabilistic relationships among different features that influence news credibility.',
    tools: 'Python, Pandas, PGMPY, Transformers, NLTK, Netica, GeNIe',
    category: 'Search Algorithm, Natural Language Processing, Probabilistic Graph Models',
    repoLink: 'https://github.com/rawbeen248/bayesian-network-news-credibility' 
  },

  {
    title: 'Gin Rummy : AI vs Human',
    image: gin_rummy,
    description: 'Gin-Rummy-AI-vs-Human is a fully-featured implementation of the classic card game, Gin Rummy, presented in an interactive console environment.It integrates every essential element of the original game while introducing a strategically competant AI bot as an opponent.',
    tools: 'Python',
    category: 'Artificial Intelligence, Game Development',
    repoLink: 'https://github.com/rawbeen248/Gin-Rummy-AI-vs-Human' 
  },

  {
    title: 'PawPal: Mobile Pet Maketplace App',
    image: pawpal,
    description: 'PawPal is a mobile application designed for the buying and selling of pets, offering a platform for users to connect, share, and engage with a community of pet lovers.',
    tools: 'JavaScript, HTML, CSS, React, Firebase',
    category: 'Mobile App Development',
    repoLink: 'https://github.com/rawbeen248/paw-pal' 
  },

  {
    title: 'Full Package Travel Recommendation System',
    image: travel_reco,
    description: 'This project aims to build a full package travel recommendation system that provides users with a list of recommended destinations based on their preferences. The system also provides a list of recommended hotels, restaurants, and activities for each destination.',
    tools: 'Python, Pandas, Gradio, Scikit-learn, NLTK',
    category: 'Hybrid Filtering, Natural Language Processing, Recommender System',
    repoLink: 'https://github.com/rawbeen248/full-package-travel-recommendation-system' 
  },

  {
    title: 'Sentiment Analysis and Twitter Post Popularity',
    image: cloud_of_pos_words,
    description: 'Main goal of this research is to investigate the corrleation between sentiments of the tweets of popular people with its popularity (number of likes and shares).',
    tools: 'Python, Pandas, NLTK, Scikit-learn',
    category: 'Data Science, Natural Language Processing',
    repoLink: 'https://github.com/rawbeen248/nlp-sentiment-analysis-tweets-vs-popularity' 
  },

  {
    title: 'Object Recognition for Visually Challenged Individuals',
    image: yolo,
    description: 'This project is aimed at helping visually challenged people to detect, recognize and describe their surroundings using object recognition and text-to-speech.',
    tools: 'Python, Yolov8, OpenCV, Torch, Ultralytics, Text-to-speech (pyttsx3)',
    category: 'Computer Vision',
    repoLink: 'https://github.com/rawbeen248/object-recognition-for-visually-challenged' 
  },

  {
    title: 'House Price Prediction',
    image: house_price_prediction_heatmap,
    description: 'This project provides a step-by-step guide to understanding, implementing, and refining a regression model using a real-world dataset. The dataset contains information pertaining to various aspects of houses, along with their respective prices, making it an ideal example to illustrate a regression problem.',
    tools: 'Python, Pandas, Scikit-learn, Matplotlib, Seaborn',
    category: 'Machine Learning, Regression Analysis',
    repoLink: 'https://github.com/rawbeen248/house-price-prediction' 
  },

  {
    title: 'Kill Them Down',
    image: kill_them_down,
    description: 'Kill Them Down is a thrilling first-person shooter (FPS) game developed in Unity. Set in a vibrant 3D environment, the game is a thrilling combat adventure where the player can defeat enemies and try to accomplish highest score.',
    tools: 'Javascript, C#, Unity',
    category: 'Game Development',
    repoLink: 'https://github.com/rawbeen248/fps-game-unity' 
  },

  {
    title: 'Football League Database Management System',
    image: homepage_fmdb,
    description: 'This is a Football League Database Management System developed using PHP, HTML, CSS, and MySQL. The system allows users to manage and view information about football teams, matches, players, contracts, events, and more.',
    tools: 'MySQL, PHP, HTML, CSS',
    category: 'Database Management System',
    repoLink: 'https://github.com/rawbeen248/football-league-DBMS' 
  },

  {
    title: 'Diabetes Detection through Classification',
    image: diabetes_3d_scatter_plot,
    description: 'This project aims to classify whether a patient has diabetes based on other health conditions. The objective is to provide insights into which features are most impactful in predicting the disease, as well as to compare the performance of different machine learning algorithms in making the predictions.',
    tools: 'Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Missingno',
    category: 'Machine learning, Classification Problem',
    repoLink: 'https://github.com/rawbeen248/diabetes_classification' 
  },

  {
    title: 'SQL and Python Data Analysis on Chinook Database',
    image: sql_pie_chart,
    description: 'This project performs a comprehensive data analysis on the Chinook Database using SQL, Python, and data visualization techniques. The Chinook Database holds information about a music store.',
    tools: 'Python, Pandas, SQLite3, Matplotlib, Seaborn',
    category: 'Data Analysis, Data Visualization',
    repoLink: 'https://github.com/rawbeen248/eda-sql-python' 
  },

  {
    title: 'Fraud Detection',
    image: confusion_matrix_fraud,
    description: 'This is a machine learning project to detect fraudulent transactions implemented in Python and involves data exploration, visualization, feature selection, model training, and evaluation.',
    tools: 'Python, Pandas, Scikit-learn, Matplotlib, Seaborn',
    category: 'Machine Learning, Fraud Detection',
    repoLink: 'https://github.com/rawbeen248/fraud-detection'
  }

];

function Project(props) {
  const isHuggingFace = props.repoLink.includes('huggingface');
  const isLinkedIn = props.repoLink.includes('linkedin');

  return (
    <div className="project">
      <img src={props.image} alt={props.title} />
      <div className="project-info"> {/* add div wrapper around the text content */}
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p><span>Languages & Libraries: </span>{props.tools}</p>
        <p><span>Category: </span>{props.category}</p>
        <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
          {isHuggingFace ? (
            <img src={huggingFaceIcon} alt="Hugging Face" style={{ width: '20px', height: '20px' }} />
          ) : isLinkedIn ? (
            <FontAwesomeIcon icon={faLinkedin} style={{ width: '20px', height: '20px' }} />
          ) : (
            <FontAwesomeIcon icon={faGithub} style={{ width: '20px', height: '20px' }} />
          )}
          Link to the project
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="app">
      <Header />
      <div className="projectsPage">
      {projectsData.map((project, index) => (
        <Project 
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          tools={project.tools}
          category={project.category}
          repoLink={project.repoLink}
        />
      ))}
    </div>
    </div>
  );
}

export default Projects;