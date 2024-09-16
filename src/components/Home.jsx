import React, { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import style from './styles/home.module.css';
import { fadeIn, staggerContainer } from '../utils/motion';

// Import your local profile picture
import profilePic from '../assets/socials/pfp.png';

// Custom modal styles
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // semi-transparent background
    zIndex: 1000, // make sure modal is above all
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1)', // Ensure it's centered
    borderRadius: '10px',
    padding: '0',
    width: '80%',
    height: '80%',
    border: 'none',
    transition: 'transform 0.3s ease-in-out', // Add a smooth transition
    background: 'white',
  },
};

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className={style.container}>
        {/* Profile Picture */}
        <div className={style.profile_pic_container}>
          <img
            src={profilePic}
            alt="Chirag Maini"
            className={style.profile_pic}
          />
        </div>
        <p className={style.intro}>
          Hi, I&apos;m{' '}
          <motion.span variants={fadeIn('', '', 0.1, 1)} className={style.name}>
            Chirag Maini
          </motion.span>
        </p>
        <p className={style.intro}>
          A MERN Developer From{' '}
          <motion.span variants={fadeIn('', '', 0.3, 1)} className={style.name}>
            India
          </motion.span>
        </p>
        <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.desc}>
          Turning ideas into websites
        </motion.p>
        <motion.button
          variants={fadeIn('', '', 0.6, 1)}
          className={style.btn_container}
          onClick={openModal}
        >
          <span className={style.btn_hover}>Hire Me</span>
          <span className={style.btn}>Hire Me</span>
          <MdOutlineArrowForwardIos className={style.arrow} />
        </motion.button>
      </div>

      {/* Modal with embedded PDF */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Resume Modal"
        ariaHideApp={false}
      >
        <div className={style.modal_content}>
          <button onClick={closeModal} className={style.close_button}>
            Close
          </button>
          <iframe
            src="https://drive.google.com/file/d/1BEylhmtncLwOHUgBvt2GOZA_nuYm5V1r/preview"
            title="Resume"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </Modal>
    </motion.section>
  );
};

export default Home;
