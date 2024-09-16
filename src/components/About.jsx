import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';
import GitHubCalendar from 'react-github-calendar';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        I’m Chirag Maini, a final-year B.Tech student at NSUT, driven by a deep passion for computer science. My curiosity fuels my desire to understand the logic behind everything, making me not only an avid learner but also a great problem solver. To date, I have tackled over <span style={{ fontWeight: 'bold', color: '#ff6347' }}>1400+ DSA</span> problems, refining my problem-solving skills and reinforcing my technical knowledge.
      </motion.p>

      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        As a proficient MERN stack developer, I thrive on creating clean, responsive, and modern <span style={{ fontWeight: 'bold', color: '#4682b4' }}>web applications</span>. I am always eager to explore new technologies and stay abreast of the latest trends in web development. My technical journey also includes a growing interest in DevOps, where I am actively enhancing my skills.
      </motion.p>

      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Beyond the tech world, I am passionate about <span style={{ fontWeight: 'bold', color: '#32cd32' }}>trading</span> and <span style={{ fontWeight: 'bold', color: '#32cd32' }}>finance</span>, constantly seeking knowledge and opportunities in these fields.
      </motion.p>
      <motion.div variants={fadeIn('', '', 1.5, 1)} className={style.heatmap}>
        <GitHubCalendar username="Chirag-04" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
