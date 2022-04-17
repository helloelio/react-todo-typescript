import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Select } from '../../../../UIElements/Select';
import style from './styles.module.css';

export const TodoFooter = ({ delayForFooter, numberOfItems }: any) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const targets = [
    { value: 'All', label: 'All' },
    { value: 'Active', label: 'Active' },
    { value: 'Completed', label: 'Completed' },
  ];

  const [target, setTarget] = useState('es2019');
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
        <motion.div
          variants={footerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className={style.footerContent}>
            <div className={style.footerLeft}>
              <span>add/search</span>
              <span className={style.line}></span>
              <span className={style.numbers}>{numberOfItems} items</span>
            </div>
            <div className={style.footerRight}>
              <Select options={targets} value={target} onChange={setTarget} />
            </div>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
};
