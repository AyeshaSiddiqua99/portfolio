import React, { useEffect, useState } from 'react';
import Section from './Section';
import me from './Images/pictureMyself.jpg';
import Typical from "react-typical";
import cv from './Images/Ayesha Siddiqua.pdf'
import new_cv from './Images/Ayesha Siddiqua.pdf'


function AboutContent() {
    const [image_class, set_image_class] = useState("column left");
    const [text_class, set_text_class] = useState("column right");
    const [evenT, setEvent] = useState();
    //const image_class = "column left";
    //const text_class = "column right";

    const Download = (event) => {
        event.preventDefault();
    }

    useEffect(()=>{
         setEvent(
                <Typical
                    steps={[
                        'Software Engineer',
                        1000,
                        ' Web Developer',
                        1000,
                    ]}
                    wrapper="b"
                    loop={Infinity}
                />
            );
    },[])
    useEffect(() => {
        let about = document.getElementById("about");
        document.addEventListener('scroll', () => {
            if (window.scrollY > about.offsetTop-250) {
                set_image_class('column left aboutLeftAnimation');
                set_text_class('column right aboutRightAnimation');
            }
        });
    },[]);



    return (
        <>
            <div className={image_class}>
                <img src={me} />
            </div>
            <div className={text_class}>
                <div className="text">Hello I'm Ayesha Siddiqua. I'm a <span>
                    {evenT}</span></div>
                <p>Hi, I'm Ayesha Siddika, A passionate computer science student with a keen interest in software development and artificial intelligence. I thrive on solving complex problems and am constantly exploring new technologies to expand my skill set. My academic journey has equipped me with a solid foundation in programming, algorithms, and data structures, and I am eager to apply this knowledge in real-world applications. Outside of academics, I enjoy participating in coding competitions and collaborating on innovative projects. I am committed to using my skills to make a positive impact and contribute to the ever-evolving field of technology.</p>
                <a id='download' href={new_cv} traget='_blank'>Download Resume</a>
            </div>

        </>
    );
}

function About() {


    return (
        <>
            <Section sectionClassName="about" id="about" widthClassName="max-width" contentClassName="about-content" titleValue="About Me" content={<AboutContent />} />
        </>
    );
}

export default About;

