import React, { useEffect, useState } from 'react';
import Section from './Section';
import laravel from './Images/laravel.png';
import react from './Images/react.png';
import php from './Images/php.png';
import js from './Images/js.png';
import mysql from './Images/mysql.png';
import css from './Images/css.png';
import html from './Images/html.png';
import OwlCarousal from 'react-elastic-carousel';



function SkillsContent() {
    const [cardClass, setCardClass] = useState("card");

    const myServices = [
        {
            key: 1,
            serviceIcon: <img src={laravel} alt = 'Laravel icon'/>,
            serviceName: 'Laravel',
            description: 'A flexible and reliable PHP Framework.'
        },
        {
            key: 2,
            serviceIcon: <img src={react} alt = 'React icon'/>,
            serviceName: 'ReactJs',
            description: 'A flexible and reliable JavaScript Library.'
        },
        {
            key: 3,
            serviceIcon: <img src={php} alt = 'PHP icon'/>,
            serviceName: 'PHP',
            description: 'A server side programming language.'
        },
        {
            key: 4,
            serviceIcon: <img src={js} alt = 'JS icon'/>,
            serviceName: 'JavaScript',
            description: 'A cient side scripting or programming language.'
        },
        {
            key: 5,
            serviceIcon: <img src={mysql} alt = 'MySql icon'/>,
            serviceName: 'MySql',
            description: 'An open-source relational database management system.'
        },
        {
            key: 6,
            serviceIcon: <img src={css} alt = 'CSS icon'/>,
            serviceName: 'CSS',
            description: 'A style sheet language to designe Web page elements.'
        }, {
            key: 7,
            serviceIcon: <img src={html} alt = 'HTML icon'/>,
            serviceName: 'HTML',
            description: 'The standard markup language for Web pages.'
        },

    ];

    useEffect(() => {
        let skill = document.getElementById("skills");
        document.addEventListener('scroll', () => {
            if (window.scrollY > skill.offsetTop - 250) {
                setCardClass('card animation');
            }
        });
    },[]);

    const breakpoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1000, itemsToShow: 3 },
        { width: 1300, itemsToShow: 4 },
    ];

    const serviceS = (arr) => {
        return (

            <div className={cardClass} key = {arr.key}>
                <div className="box">
                    <div>{arr.serviceIcon}</div>
                    <div className='text'>{arr.serviceName}</div>
                    <p>{arr.description}</p>
                </div>
            </div>




        );
    }

    return (
        <>
         <OwlCarousal breakPoints={breakpoints}>
                {myServices.map(serviceS)}
            </OwlCarousal>
        </>
    );
}

function Skills() {

    const ca = "carousel owl-carousel";
    return (
        <>
            <Section sectionClassName="skills" id="skills" widthClassName="max-width" contentClassName={ca} titleValue="Projects" content={<SkillsContent />} />
        </>
    );
}

export default Skills;

