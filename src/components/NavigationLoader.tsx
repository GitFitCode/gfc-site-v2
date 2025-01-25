import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

const anim = {
    initial: {
        opacity: 0
    },
    open: (i: number) => ({
        opacity: 1,
        transition: {duration: 0, delay: 0.03 * i}
    }),
    closed: (i: number) => ({
        opacity: 0,
        transition: {duration: 0, delay: 0.03 * i}
    })
}

interface NavigationLoaderProps {
    isAnimating: boolean;
}

export default function index({ isAnimating }: NavigationLoaderProps) {
  
    /**
     * Shuffles array in place (Fisher–Yates shuffle).
     * @param {Array} a items An array containing the items.
     */
    const shuffle = (a: any[]) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    const getBlocks = () => {
        const { innerWidth, innerHeight } = window;
        const blockSize = innerWidth * 0.05;
        const nbOfBlocks = Math.ceil(innerHeight / blockSize);
        const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map( (_, i) => i))
        return shuffledIndexes.map( (randomIndex, index) => {
            return (
                <motion.div 
                    key={index} 
                    style={{width: '100%', height: '5vw', backgroundColor: '#00C9CD'}}
                    variants={anim}
                    initial="initial"
                    animate={isAnimating ? "open" : "closed"}
                    custom={randomIndex}
                />
            )
        })
    }

    return (
        <div style={{display: 'flex', height: '100%', width: '100%', overflow: 'hidden', position: 'absolute', zIndex: 1, pointerEvents: 'none'}}>
            {
                [...Array(20)].map( (_, index) => {
                    return <div key={index} style={{width:'5vw', height:'100%', display: 'flex', flexDirection:'column'}}>
                        {
                            getBlocks()
                        }
                    </div>
                })
            }
        </div>
    )
}
