import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const onClick = e => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={onClick}
    >
      <motion.img
        src={selectedImg}
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        alt="enlarged img"
      />
    </motion.div>
  );
};

export default Modal;
