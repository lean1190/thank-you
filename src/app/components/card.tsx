'use client';

import clsx from 'clsx';
import { useLottie } from 'lottie-react';
import { Dancing_Script } from 'next/font/google';

import animationData from '../../../public/confetti.json';

interface Props {
    hi?: string;
    backgroundClasses?: string;
    paragraphs: string[];
}

const font = Dancing_Script({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
});

const floatingStyles = clsx(
    'relative top-[50px] z-10 animate-up cursor-pointer',
    '[&_#card]:hover:-translate-y-44',
    'before:absolute before:left-[-15px] before:top-[265px] before:h-[25px] before:w-[330px] before:animate-scale before:rounded-[50%] before:bg-[#0000004D] before:content-[""]'
);

const envelopeStyles = clsx(
    'relative grid h-[200px] w-[300px] place-items-center bg-[#f08080]',
    'before:absolute before:left-[44px] before:top-[-105px] before:size-[212px] before:rotate-45 before:rounded-tl-[30px] before:bg-[#f08080] before:content-[""]'
);

const frontStyles = clsx(
    'absolute left-[120px] top-[5px] z-10 size-0 border-b-[100px] border-r-[180px] border-t-[95px] border-solid border-transparent border-r-[#f4978e]',
    'before:absolute before:left-[-120px] before:top-[-95px] before:border-l-[300px] before:border-t-[195px] before:border-solid before:border-l-[#fda996] before:border-t-transparent before:content-[""]'
);

const cardStyles = clsx(
    'relative h-[180px] w-[250px] place-items-center rounded-[2px] bg-white p-[18px] duration-1000',
    'before:absolute before:inset-[8px] before:border-2 before:border-dashed before:border-[#003049] before:content-[""]'
);

export default function Card({ hi = 'Hey there!', backgroundClasses = 'bg-[#fae1dd]', paragraphs }: Props) {
    const { View: confetti, play, stop } = useLottie({ animationData, loop: false, autoPlay: false });

    const onFloatingClick = () => {
        stop();
        play();
    };

    return (
        <main className={`relative grid min-h-full min-w-full place-items-center overflow-hidden ${backgroundClasses}`}>
            <div className={floatingStyles} onClick={onFloatingClick}>
                <div className={envelopeStyles}>
                    <div className={cardStyles} id="card">
                        <div className={`text-[#003049] ${font.className}`}>
                            <h1 className="text-3xl">{hi}</h1>
                            {paragraphs.map((content, index) => <p key={index}>{content}</p>)}
                            <p className="text-right">Lean</p>
                        </div>
                    </div>
                </div>
                <div className={frontStyles}></div>
            </div>
            <div className="absolute z-0">{confetti}</div>
        </main>
    );
}
