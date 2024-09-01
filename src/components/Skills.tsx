"use client";
import { animate, useMotionValue, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { FaCloud, FaCss3Alt, FaGithub, FaHtml5, FaJava, FaJsSquare, FaNode, FaPython, FaReact } from 'react-icons/fa';
import useMeasure from "react-use-measure";

const skillIcons1 = [
    { icon: <FaHtml5 size={100}/>, label: "HTML" },
    { icon: <FaCss3Alt size={100}/>, label: "CSS" },
    { icon: <FaReact size={100}/>, label: "React" },
    { icon: <i className="devicon-typescript-plain" style={{fontSize: 55}}></i>, label: "Typescript" },
    { icon: <FaJsSquare size={100}/>, label: "JavaScript" },
    { icon: <i className="devicon-nextjs-original-wordmark" style={{fontSize: 55}}></i>, label: "NextJS" },
    { icon: <FaJava size={100}/>, label: "Java" },
    { icon: <i className="devicon-cplusplus-plain" style={{fontSize: 55}}></i>, label: "C++" },
    { icon: <FaCloud size={100}/>, label: "Cloud" },
    { icon: <FaGithub size={100}/>, label: "GitHub" },
    { icon: <FaPython size={100}/>, label: "Python" },
    { icon: <i className="devicon-mongodb-plain" style={{fontSize: 55}}></i>, label: "MongoDB" },
    { icon: <FaNode size={100}/>, label: "NodeJS" },
    { icon: <i className="devicon-postgresql-plain" style={{fontSize: 55}}></i>, label: "Postgres" },
    { icon: <i className="devicon-json-plain" style={{fontSize: 55}}></i>, label: "JSON" },
    { icon: <i className="devicon-postman-plain" style={{fontSize: 55}}></i>, label: "Postman" },
    { icon: <i className="devicon-tailwindcss-original" style={{fontSize: 55}}></i>, label: "Tailwind" },
    { icon: <i className="devicon-framermotion-original" style={{fontSize: 55}}></i>, label: "Framer Motion" },
];


const Skills = () => {
    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width/2;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width]);

    return (
        <div className='bg-gradient-to-b from-black to-[#381a5f] py-10' id='skills'>
            <div className='text-white w-full overflow-hidden mx-auto p-8 text-center relative h-[350px] md:max-h-[300px]'>
                <h1 className="text-white text-6xl max-w-[380px] mx-auto font-semibold p-4 mb-10">
                    Tech <span className="text-orange-400">Stack</span>
                </h1>
                <motion.div className='absolute left-0 flex gap-4' ref={ref} style={{ x: xTranslation }}>
                    {[...skillIcons1, ...skillIcons1].map((skill, index) => (
                        <div 
                            key={index}
                            className='h-[130px] w-[120px] md:h-[130px] md:w-[120px] flex flex-col justify-between 
                                        items-center bg-white/10 p-4 rounded-xl'>
                                {skill.icon}
                                <p className='mt-2'>{skill.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Skills;
