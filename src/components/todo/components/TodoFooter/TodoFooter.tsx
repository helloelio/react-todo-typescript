import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import style from './styles.module.css';

export const TodoFooter = ({ delayForFooter }: any) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      if (delayForFooter !== 0) {
        setIsDisplayed(true);
      }
    }, 100);
  }, [delayForFooter]);

  const footerVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delayForFooter / 2,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className={style.footer}>
      {isDisplayed ? (
        <motion.p variants={footerVariants} initial='hidden' animate='visible'>
          hello
        </motion.p>
      ) : null}
    </div>
  );
};
