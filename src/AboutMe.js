import React from 'react';
import Header from './Header';
import './AboutMe.css';
import { FaGraduationCap, FaBriefcase, FaAward, FaCogs, FaLanguage, FaLink, FaStar, FaRegStar} from 'react-icons/fa';
import { FaHtml5, FaReact, FaDatabase } from 'react-icons/fa';
const Tools = () => (
    <div className="tools-box">
        <div className="tools-item">VS Code</div>
        <div className="tools-item">Jupyter Notebook</div>
        <div className="tools-item">Git</div>
        <div className="tools-item">ReactJS</div>
        <div className="tools-item">MySQL</div>
        <div className="tools-item">Docker</div>
        <div className="tools-item">Unity</div>
        <div className="tools-item">Microsoft Azure</div>
        <div className="tools-item">Microsoft Power BI</div>
    </div>
  );

const Languages = () => (
    <div className="prolang-box">
        <div className="prolang-item">Python</div>
        <div className="prolang-item">JavaScript</div>
        <div className="prolang-item">SQL</div>
        <div className="prolang-item">C++</div>
        <div className="prolang-item">Java</div>
        <div className="prolang-item">R</div>
        <div className="prolang-item">HTML</div>
        <div className="prolang-item">CSS</div>
        <div className="prolang-item">PHP</div>
    </div>
  );

const Proficiencies = () => (
    <div className="expertise-box">
      <div className="expertise-item"><FaDatabase size="1em" /> Data Science</div>
      <div className="expertise-item"><FaHtml5 size="1em" /> Web Development</div>
      <div className="expertise-item"><FaDatabase size="1em" /> Database Management</div>
      <div className="expertise-item"><FaReact size="1em" /> AI Technologies</div>
    </div>
  );

const StarRating = ({rating}) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FaStar key={i} className="star" />);
        } else {
            stars.push(<FaRegStar key={i} className="star" />);
        }
    }

    return <>{stars}</>;
};

function AboutMe () {
    return (
        <div className="app">
        <Header />
        <div className="aboutme">
            <FaGraduationCap className="aboutme__icon" />
            <div className="aboutme__section">
                <div className="aboutme__box">
                    <p><strong>Bachelor of Computer Science & Artificial Intelligence</strong><br/><strong>IE University</strong><br/>Madrid, Spain<br/>September 2020 - July 2024</p>
                </div>
            </div>
            <FaBriefcase className="aboutme__icon" />
            <div className="aboutme__section">

                <div className="aboutme__box">
                    <p><strong>AI Data Annotator</strong><br/><strong>Data Annotation Tech</strong><br/>Madrid, Spain<br/>February 2024 - July 2024</p>
                </div>

                <div className="aboutme__box">
                    <p><strong>Data Analyst Intern</strong><br/><strong>Infitnity Sevices Private Limited</strong><br/>Kathmandu, Nepal<br/>May 2023 - October 2023</p>
                </div>

                <div className="aboutme__box">
                    <p><strong>Datathon Winner</strong><br/><strong>IE University & Ryan Air</strong><br/>Madrid, Spain<br/>October 2022</p>
                </div>

                <div className="aboutme__box">
                    <p><strong>Database Solutions Consultant Intern</strong><br/><strong>Black Snow Nepal</strong><br/>Kathmandu, Nepal<br/>June 2022 - August 2022</p>
                </div>
                
            </div>
            <FaAward className="aboutme__icon" />
            <div className="aboutme__section">
                <div className="aboutme__box-small">
                    <p><strong>Data Analysis with Python <a href="https://www.freecodecamp.org/certification/fcc243a4501-d777-4156-80c3-f9c87c876da6/machine-learning-with-python-v7" target="_blank" rel="noopener noreferrer">Certification <FaLink /></a></strong> - FreeCodeCamp</p>
                </div>
                <div className="aboutme__box-small">
                    <p><strong>JavaScript Algorithms and Data Structures <a href="https://www.freecodecamp.org/certification/fcc243a4501-d777-4156-80c3-f9c87c876da6/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">Certification <FaLink /></a></strong> - FreeCodeCamp</p>
                </div>
                <div className="aboutme__box-small">
                    <p><strong>Next Generation Tech Booster Scholarship </strong> - Udacity & Bertelsmann</p>
                </div>
            </div>
            <FaCogs className="aboutme__icon" />
            <div className="aboutme__section">
                <div className="aboutme__box">
                    <p><strong>Development Tools and Frameworks</strong><br/><Tools /></p>
                </div>
                <div className="aboutme__box">
                    <p><strong>Programming Languages</strong><br/><Languages /></p>
                </div>
                <div className="aboutme__box">
                    <p><strong>Technology Proficiencies</strong><br/><Proficiencies /></p>
                </div>
            </div>
            <FaLanguage className="aboutme__icon" />
            <div className="aboutme__section" style={{alignItems: 'flex-start'}}>
                <div className="aboutme__box-small">
                    <p><strong>English</strong> <StarRating rating={5} /></p>
                </div>
                <div className="aboutme__box-small">
                    <p><strong>Spanish</strong> <StarRating rating={3} /></p>
                </div>
                <div className="aboutme__box-small">
                    <p><strong>Nepali</strong> <StarRating rating={5} /></p>
                </div>
                <div className="aboutme__box-small">
                    <p><strong>Hindi</strong> <StarRating rating={5} /></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;
