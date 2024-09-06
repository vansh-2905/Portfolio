"use client"
import Image from "next/image";
import { motion } from 'framer-motion';
import project1 from "../assests/project.jpg";
import project2 from "../assests/proj1.jpg";
import project3 from "../assests/proj2.jpg";


const projects = [
    {
        title: "Clash Crypto Token with its Buy and Sell page",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit natus harum odio animi eius, maxime nostrum quae consequatur temporibus ex reiciendis unde dolorem aliquam accusamus, doloribus, molestiae rerum tempora",
        devStack: "React, Motoko, JavaScript, npm, Git",
        link: "",
        git: "",
        src: project1 
    },
    {
        title: "URL Shortner",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit natus harum odio animi eius, maxime nostrum quae consequatur temporibus ex reiciendis unde dolorem aliquam accusamus, doloribus, molestiae rerum tempora",
        devStack: "Node, Express, EJS, MongoDB, Git",
        link: "",
        git: "",
        src: project2 
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
                                <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git}>Git</a>
                            </div>

                        </div>
                        <div className="flex justify-center items-center">
                            <Image 
                                src = {project.src} 
                                alt = {project.title} 
                                className="h-[350px] w-[500px] object-cover border rounded-2xl border-gray-700"/>
                        </div>

                    </motion.div>
                ))}

            </div>

        </div>
    )
}

export default Portfolio
