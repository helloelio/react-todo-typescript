import { motion } from 'framer-motion';
import React from 'react';
import style from './styles.module.css';

export const ErrorMessage = ({ errorText, error }: any) => {
  return (
    <motion.p
      initial={{ x: 1000 }}
      animate={{ x: error ? 0 : 1000 }}
      transition={{ delay: 0.2 }}
      className={style.empty}
    >
      {errorText}
    </motion.p>
  );
};
