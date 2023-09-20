import React from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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

const projectsData = [
  {
    title: 'Sentiment Analysis and Twitter Post Popularity',
    image: cloud_of_pos_words,
    description: 'Main goal of this research is to investigate the corrleation between sentiments of the tweets of popular people with its popularity (number of likes and shares).',
    tools: 'Pandas, NLTK, Scikit-learn',
    category: 'Data Science, Natural Language Processing',
    repoLink: 'https://github.com/rawbeen248/nlp-sentiment-analysis-tweets-vs-popularity' 
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
    tools: 'Pandas, Scikit-learn, Matplotlib, Seaborn',
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
    tools: 'Scikit-learn, Pandas, Matplotlib, Seaborn, Missingno',
    category: 'Machine learning, Classification Problem',
    repoLink: 'https://github.com/rawbeen248/diabetes_classification' 
  },

  {
    title: 'SQL and Python Data Analysis on Chinook Database',
    image: sql_pie_chart,
    description: 'This project performs a comprehensive data analysis on the Chinook Database using SQL, Python, and data visualization techniques. The Chinook Database holds information about a music store.',
    tools: 'SQLite3, Pandas, Matplotlib, Seaborn',
    category: 'Data Analysis, Data Visualization',
    repoLink: 'https://github.com/rawbeen248/eda-sql-python' 
  },

  {
    title: 'Fraud Detection',
    image: confusion_matrix_fraud,
    description: 'This is a machine learning project to detect fraudulent transactions implemented in Python and involves data exploration, visualization, feature selection, model training, and evaluation.',
    tools: 'Pandas, Scikit-learn, Matplotlib, Seaborn',
    category: 'Machine Learning, Fraud Detection',
    repoLink: 'https://github.com/rawbeen248/fraud-detection'
  }

];

function Project(props) {
  return (
    <div className="project">
      <img src={props.image} alt={props.title} />
      <div className="project-info"> {/* add div wrapper around the text content */}
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p><span>Languages & Libraries: </span>{props.tools}</p>
        <p><span>Category: </span>{props.category}</p>
        <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Link to the project
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