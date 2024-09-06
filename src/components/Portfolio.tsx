"use client"
import Image from "next/image";
import { motion } from 'framer-motion';
import VideoImg from "../assests/project.jpg";
import portfolioImg from "../assests/portfolioImg.png";
import bit from "../assests/bit.jpg";
import shortUrl from "../assests/urlShortener.jpg";
import dashboard from "../assests/dashboard.png";
import fireDetection from "../assests/fireDetection.jpg";

const projects = [
    {
        title: "Clash Crypto Token with its Buy and Sell page",
        description: "I engineered a sophisticated Crypto Token leveraging advanced blockchain technology, complete with a nostalgic retro 90s’ style interface for buying, selling, and transferring tokens. This user-friendly page not only captured the aesthetic charm of the 90s but also facilitated the seamless processing of up to 10,000,000 tokens simultaneously. The system was designed to ensure high efficiency and security, providing users with a reliable and engaging platform for their cryptocurrency transactions.",
        devStack: "React, Motoko, JavaScript, npm, Git",
        link: "",
        git: "https://github.com/vansh-2905/Clash-Crypto-Token",
        src: bit,
        img: "freepik"
    },
    {
        title: "Short-URL",
        description: "I leveraged a variety of Node libraries and deployed robust authentication mechanisms to construct a full-stack application. This application effectively reduces the size of URLs by up to 97% of their original length, ensuring efficient and secure URL management. The implementation involved optimizing algorithms and integrating advanced compression techniques, resulting in a highly efficient system that enhances user experience and operational performance.",
        devStack: "HTML, CSS, Express, Node, Embedded JavaScript, MongoDB",
        link: "",
        git: "https://github.com/vansh-2905/Short-URL",
        src: shortUrl, 
        img: "freepik"
    },
    {
        title: "Video Streaming Platform",
        description: "I developed a stand-alone video streaming platform utilizing agile methodologies to ensure rapid and iterative progress. By implementing advanced buffering techniques and optimizing data flow, I successfully minimized buffer time by up to 75%. This resulted in a significantly smoother and more enjoyable viewing experience for users, enhancing the platform’s overall performance and user satisfaction.",
        devStack: "JavaScript, CSS, HTML, Node, React, Ffmpeg",
        link: "",
        git: "",
        src: VideoImg,
        img: ""
    },
    {
        title: "Management Dashboard",
        description: "I constructed a comprehensive business dashboard featuring a variety of interactive graphs and charts. This tool significantly enhanced operational efficiency for business owners by up to 75%, providing real-time insights and analytics. The dashboard enabled users to make informed decisions quickly and effectively, streamlining their business processes and improving overall productivity.",
        devStack: "React, HTML, Tailwind, Sync Fusion",
        link: "https://dashboard-vansh-k.vercel.app/",
        git: "https://github.com/vansh-2905/Dashboard",
        src: dashboard,
        img: ""
    },
    {
        title: "Machine Learning Fire Detection System",
        description: "I trained a highly accurate machine learning model for fire detection, achieving an impressive accuracy rate of over 98.2%. This model was designed to be seamlessly integrated with surveillance cameras, significantly enhancing fire monitoring and early detection capabilities. The integration process involved rigorous testing and optimization to ensure reliable performance in real-world scenarios, providing a robust solution for proactive fire safety measures.",
        devStack: "Python, Yolo, Pandas, Numpy, OpenCV",
        link: "",
        git: "https://github.com/vansh-2905/ML-fire-detection",
        src: fireDetection,
        img: "freepik"
    },
    {
        title: "This website",
        description: "",
        devStack: "NextJS, Tailwind, Framer Motion, HTML, CSS",
        link: "https://vansh-kapoor-seven.vercel.app/",
        git: "https://github.com/vansh-2905/Portfolio",
        src: portfolioImg,
        img: ""
    },
]

const Portfolio = () => {
    return (
        <div className="text-white bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-18" id="portfolio"> 

            <h1 className="text-white text-6xl max-w-[380px] mx-auto font-semibold p-4 mb-10">
                My <span className="text-orange-400">Projects</span>
            </h1>

            <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24 mt-2">
                {projects.map((project,index) => (
                    <motion.div
                        key={index}
                        initial= {{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay:0.25 }}
                        className={` mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                    >
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${ index + 1 }`}</h2>
                            <h2 className="text-4xl font-semibold ">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.description}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                {project.link === "" ? <p/> : <a href={project.link} className="mr-6">Link</a>}
                                <a href={project.git}>Git</a>
                            </div>

                        </div>
                        <div className="flex justify-center items-center">
                            <Image 
                                src = {project.src} 
                                alt = {project.title} 
                                className="h-[350px] w-[500px] object-cover border rounded-2xl border-gray-700"/>
                            {project.img === "freepik" ? 
                                    <a
                                    className = "text-white/70 p-4"
                                    href= "https://www.freepik.com/"    
                                    >Image by designed by Freepik</a> : 
                                    <p></p>}
                        </div>

                    </motion.div>
                ))}

            </div>

        </div>
    )
}

export default Portfolio
