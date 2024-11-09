import React, { useEffect, useState } from "react";
import { useNavigationContext } from "../../contexts/navigation.context";
import { motion, AnimatePresence } from "framer-motion";
import "../../App.css";

const anim = {
  initial: {
    opacity: 0
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * i }
  }),
  closed: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.02 * i }
  })
}

export default function NavigationLoader() {
  const { isNavigating } = useNavigationContext();
  /**
    * Shuffles array in place (Fisher–Yates shuffle).
    * @param {Array} a items An array containing the items.
    */
  interface ShuffleArray<T> {
    (a: T[]): T[];
  }

  const shuffle: ShuffleArray<number> = (a) => {
    let j: number, x: number, i: number;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = () => {
    const { innerWidth, innerHeight, outerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(outerHeight / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i))
    return shuffledIndexes.map((randomIndex, index) => {
      return (
        <motion.div
          key={index}
          // className={'pixel-block'}
          style={{
            width: '100%',
            height: '5vw',
            backgroundColor: '#00C9CD',
          }}
          variants={anim}
          initial="initial"
          animate={isNavigating ? 'open' : 'closed'}
          custom={randomIndex}
        />
      )
    })
  }

  return (
    <div
      className={'pixel-block'}
      style={{
        display: 'flex',
        height: '100%',
        width: '99%',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 1,
        pointerEvents: 'none',
      }}>
      {
        [...Array(20)].map((_, index) => {
          return <div key={index} style={{width:'5vw', height:'99%', display: 'flex', flexDirection:'column'}} className={'pixel-column'}>
            {getBlocks()}
          </div>
        })
      }
    </div>
  );
}
