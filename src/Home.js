import React, { useEffect, useState } from 'react';
import Section from './Section';
import me from './Images/z3.jpg';
import Typical from "react-typical";

function HomeContent() {

    const [img_class, set_img_class] = useState("glowAnimation");
    const [typer, setTyper] = useState();
    


    const updateClass = () => {
        if (img_class === "glowAnimation") {
            set_img_class("dimAnimation");
        } else if (img_class === "dimAnimation") {
            set_img_class("glowAnimation");
        }
    }

    const inter = setInterval(updateClass, 2000);
    useEffect(() => {

        return () => {
            clearInterval(inter);
        };
    });

    useEffect(()=>{
        setTyper(
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
    },[]);

    return (
        <>
            <img className={img_class} src={me} alt="Profile Picture" />
            <div className='text-1'>Hello, My name is</div>
            <div className='text-2'>Ayesha Siddiqua</div>
            <div className='text-3'>and I am a <span>
                {typer}
            </span></div>
        </>
    );
}

function Home() {

    return (
        <>
            <Section sectionClassName="home" id="home" widthClassName="max-width" contentClassName="home-content" content={<HomeContent />} />
        </>
    );
}

export default Home;