import React, { useEffect, useState } from 'react';
import Section from './Section';
import BrushRoundedIcon from '@material-ui/icons/BrushRounded';
import DeveloperModeRoundedIcon from '@material-ui/icons/DeveloperModeRounded';

function ServicesContent() {
    const [cardClass, setCardClass] = useState("card");
    const myServices = [
        {
            key : 1,
            serviceIcon : <BrushRoundedIcon className='icon' />,
            serviceName : 'Web Design',
            description : 'To help the clients to have Well-Designed websites that will help to form a good impression on their prospective customers'
        },
        {
            key : 2,
            serviceIcon : <DeveloperModeRoundedIcon className='icon' />,
            serviceName : 'Web Developing',
            description : 'To make a strong backend process of a Website make target audiences aware of the services and/or products that the clients are offering'
        },
    ];

    useEffect(() => {
        let service = document.getElementById("services");
        document.addEventListener('scroll', () => {
            if (window.scrollY > service.offsetTop - 250) {
                setCardClass('card animation');
            }
        });
    },[]);

    const serviceS = (arr, index)=>{
        return(
            <div className={cardClass} key = {index}>
                <div className="box">
                    {arr.serviceIcon}
                    <div className='text'>{arr.serviceName}</div>
                    <p>{arr.description}</p>
                </div>
            </div>
        );
    }
 
    return (
        <>
            {myServices.map(serviceS)}
        </>
    );
}

function Services() {
    return (
        <>
            <Section sectionClassName="services" id="services" widthClassName="max-width" contentClassName="serv-content" titleValue="My Services" content={<ServicesContent/>} />
        </>
    );
}

export default Services;