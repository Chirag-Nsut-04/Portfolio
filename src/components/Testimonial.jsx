import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaQuoteLeft } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';
import { testimonials } from '../constants';
import style from './styles/testimonial.module.css';

const Testimonial = () => {
  const [number, setNumber] = useState(1);
  const [showPerPage, setShowPerPage] = useState(1);
  const lastNumber = number * showPerPage;
  const firstNumber = lastNumber - showPerPage;
  const filterTestimonial = testimonials.slice(firstNumber, lastNumber);

  const prev1 = () => {
    setNumber((prevNumber) => (prevNumber === 1 ? testimonials.length : prevNumber - 1));
  };

  const next1 = () => {
    setNumber((prevNumber) => (prevNumber === testimonials.length ? 1 : prevNumber + 1));
  };

  const prev2 = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const next2 = () => {
    if (number < 2) {
      setNumber(number + 1);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1200px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setShowPerPage(3);
      } else {
        setShowPerPage(1);
      }
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={style.container}>
      <motion.h1 variants={textVariant()} className={style.title}>
        Testimonials
      </motion.h1>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>What my coding partners say about me -</motion.p>
      <motion.div variants={fadeIn('', '', 0.5, 1)} className={style.card_container}>
        <button
          // className={number <= filterTestimonial.length ? 'opacity-0' : 'opacity-100'}
          type="button"
          onClick={showPerPage === 1 ? prev1 : prev2}
        >
          <BsArrowLeft />
        </button>
        {/* Testimonials card */}
        {filterTestimonial.map((testimonial) => (
          <div
            key={testimonial.id}
            className={style.card_shadow}
          >
            <div
              className={style.card}
            >
              <div className={style.header}>
                <FaQuoteLeft className={style.openquote} />
                <img className={style.img} src={testimonial.image} alt="profile" />
              </div>
              <p className={style.para}>{testimonial.text}</p>
              <div className={`${style.label} ${style.firstlabel}`}>
                <p className={style.name}>
                  {testimonial.name}
                  {' '}
                  <span className={style.country}>
                    (
                    {testimonial.country}
                    )
                  </span>
                </p>
                <abbr title="LinkedIn Profile">
                  <a
                    href={testimonial.linkedIn}
                    target="_blank"
                    className={style.icon}
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn />
                  </a>
                </abbr>
              </div>
            </div>
          </div>
        ))}
        <button
          // className={number > 1 ? 'opacity-0' : 'opacity-100'}
          type="button"
          onClick={showPerPage === 1 ? next1 : next2}
        >
          <BsArrowRight />
        </button>
      </motion.div>
      <motion.div variants={fadeIn('', '', 0.15, 1)} className={style.recommendationsLink}>
        <a href="https://www.linkedin.com/in/kaungmyatkyaw/details/recommendations/?detailScreenTabIndex=0" target="_blank" className={style.a} rel="noreferrer">More recommendations here</a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Testimonial, 'testimonial', 'my-0');
