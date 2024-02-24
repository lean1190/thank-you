'use client';

import { RefObject, useRef } from 'react';
import { useInterval } from 'usehooks-ts';

import styles from './styles.module.css';

function useTypedWords(words: string[], elementRef: RefObject<HTMLElement>) {
    let part;
    let i = 0;
    let offset = 0;
    const len = words.length;
    let forwards = true;
    let skipCount = 0;
    const skipDelay = 15;

    useInterval(() => {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skipCount;
                if (skipCount === skipDelay) {
                    forwards = false;
                    skipCount = 0;
                }
            }
        } else {
            if (offset === 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substring(0, offset);
        if (skipCount === 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }

        if (elementRef?.current) {
            elementRef.current.innerText = part;
        }
    }, 70);
}

const appreciationWords = [
    'Thank you for trusting me with your learning',
    'I\'m glad we met',
    'I hope you learned something valuable',
    'Let\'s keep learning together',
    'Looking forward to helping you again'
];

export default function Home() {
    const elementRef = useRef<HTMLHeadingElement>(null);
    useTypedWords(appreciationWords, elementRef);

    return (
        <main className="w-full p-4 text-left lg:w-[1000px]">
            <h1 className={`${styles.hi} mb-10 w-80 px-4`}>Hi there!</h1>
            <h2 className={`${styles.word} h-12 text-neutral-950`} ref={elementRef}></h2>
        </main>
    );
}
