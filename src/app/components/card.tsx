'use client';

import { useLottie } from 'lottie-react';

import animationData from '../../../public/confetti.json';
import styles from './styles.module.css';

interface Props {
    hi?: string;
    backgroundClasses?: string;
    paragraphs: string[];
}

export default function Card({ hi = 'Hey there!', backgroundClasses = 'bg-[#fae1dd]', paragraphs }: Props) {
    const { View: confetti, play, stop } = useLottie({ animationData, loop: false, autoPlay: false });

    const onFloatingClick = () => {
        stop();
        play();
    };

    return (
        <main className={`${styles.container} ${backgroundClasses}`}>
            <div className={`${styles.floating} z-10`} onClick={onFloatingClick}>
                <div className={styles.envelope}>
                    <div className={styles.card}>
                        <div className={styles.text}>
                            <h1 className="text-3xl">{hi}</h1>
                            {paragraphs.map((content, index) => <p key={index}>{content}</p>)}
                            <p className="text-right">Lean</p>
                        </div>
                    </div>
                </div>
                <div className={styles.front}></div>
            </div>
            <div className="absolute z-0">{confetti}</div>
        </main>
    );
}
