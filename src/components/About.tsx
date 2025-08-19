"use client";
import React from "react";
import Image from "next/image";
import book from "../assests/book.png";
import pc from "../assests/pc.png";
import card from "../assests/card.png";
import finance from "../assests/finance.png";
import boy from "../assests/Graduated Student 3D Scene.png";
import setting from "../assests/Settings 3D Icon Model For UI.png";

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto" id="about">

            <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
                About <span className="text-orange-400">Me</span>
            </h1>

            <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">

                <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 
                    opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image
                            src = {boy}
                            alt="boy"
                            className="w-auto h-[130px]"
                        />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white">Vansh Kapoor</h2>
                            <p className="text-lg text-white/80">I am a full-stack developer, building websites and softwares for both Web2 and Web3</p>
                        </div>

                    </div>

                </div>

                <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 
                    opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image
                            src = {book}
                            alt="book"
                            className="w-auto h-[130px]"
                        />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white">Education</h2>
                            <p className="text-lg text-white/80">Arizona State University - BSE Computer Science</p>
                        </div>

                    </div>

                </div>

                <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 
                    opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image
                            src = {pc}
                            alt="pc"
                            className="w-auto h-[130px]"
                        />
                        <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white">Currently Learning</h2>
                            <ul className="text-lg text-white/80">
                                <li>Artificial Intelligence</li>
                                <li>Machine Learning</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 
                    opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image
                            src = {setting}
                            alt="setting"
                            className="w-auto h-[130px]"
                        />
                        <div className="flex flex-col mt-4 ml-3">
                            <h2 className="text-2xl font-bold text-white">Experience</h2>
                            <p className="text-lg text-white/80">Software Development Eng. Intern- AWS (2025) </p>
                            <p className="text-lg text-white/80">Software Developer Intern- Kiwi Healthcare Pvt. Ltd.(2024) </p>
                            <p className="text-lg text-white/80">Frontend Developer Intern- Remedo Clinitech Pvt. Ltd.(2023) </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default About
