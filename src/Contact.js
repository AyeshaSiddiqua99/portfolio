import React, { useEffect, useState } from 'react';
import Section from './Section';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import emailjs from 'emailjs-com';


const Address = (Props) => {
    return (
        <div className='row'>
            {Props.icon}
            <div className='info'>
                <div className='head'>{Props.head}</div>
                <div className='sub-title'>{Props.sub_title}</div>
            </div>
        </div>
    );
}

const SocialMedia = (Props) => {
    return (
        <a href={Props.href} target='_blank'>
            <IconButton className={'icon-button ' + Props.site}>
                {Props.icon}
            </IconButton>
        </a>
    );
}


function ContactContent() {
    const [image_class, set_image_class] = useState("column left");
    const [text_class, set_text_class] = useState("column right");
    const field_name = "field name";
    const field_email = "field email";
    const field_textarea = "field textarea";

    const AddressProperties = [
        {
            icon: <AccountCircleRoundedIcon className='icon' />,
            head: 'Name',
            sub_title: 'Ayesha Siddiqua',
        },
        {
            icon: <HomeRoundedIcon className='icon' />,
            head: 'Address',
            sub_title: "North York, ON M2H 2K8",
        },
        {
            icon: <EmailRoundedIcon className='icon' />,
            head: 'E-Mail',
            sub_title: 'ayeshasiddiqua01@hotmail.com',
        },
    ];

    const SocialMedias = [
        {
            href: 'https://www.facebook.com/ayesha.siddiqua.9022?mibextid=ZbWKwL',
            site: 'fb',
            icon: <FacebookIcon className=' icon' />,
        },
        {
            href: 'https://www.linkedin.com/in/ayesha-siddiqua-9a227399/',
            site: 'ld',
            icon: <LinkedInIcon className='icon' />,
        },
        
    ];

    useEffect(() => {
        let contact = document.getElementById("contact");
        document.addEventListener('scroll', () => {
           
            if (window.scrollY > contact.offsetTop - 250) {
                set_image_class('column left contactLeftAnimation');
                set_text_class('column right contactRightAnimation');
            }
        });
    },[]);

    const sendEmail = (event) => {
        event.preventDefault();
        var message = document.getElementById('message');
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var invalid_email = document.getElementById('invalid_email');
        var invalid_name = document.getElementById('invalid_name');

        var checkName = /^[A-Za-z. ]{3,}$/;
        var checkEmail = /^[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

        if (event.target[0].value === "" || event.target[1].value === "" || event.target[2].value === "" || event.target[3].value === "") {
            message.innerText = 'Please fill up all the boxes!!';
            message.style.color = 'crimson';
            invalid_email.style.color = 'transparent';
            invalid_name.style.color = 'transparent';
            name.style.border = '1px solid RGB(13, 151 , 129)';
            email.style.border = '1px solid RGB(13, 151 , 129)';

            return false;

        } else if (!checkName.test(name.value)) {
            message.style.color = 'transparent';
            invalid_email.style.color = 'transparent';
            invalid_name.innerText = '** Please write a valid name';
            invalid_name.style.color = 'crimson';
            name.style.border = '1px solid crimson';
            email.style.border = '1px solid RGB(13, 151 , 129)';
            name.value = "";
            return false;

        } else if (!checkEmail.test(email.value)) {
            message.style.color = 'transparent';
            name.style.border = '1px solid RGB(13, 151 , 129)';
            invalid_name.style.color = 'transparent';
            invalid_email.innerText = '** Please write a valid email';
            invalid_email.style.color = 'crimson';
            email.style.border = '1px solid crimson';
            email.value = ""
            return false;
        } else {
            emailjs.sendForm('service_a3vaprs', 'ayeshasiddiqua01@hotmail.com', event.target, 'user_aTSNZ5f6VxQCfl4ZAyyGs').then((result) => {
                message.innerText = 'Your message has been sent successfully!!';
                message.style.color = "green";
            }, (error) => {
                message.innerText = 'Message Sending Failed!!';
                message.style.color = 'crimson';
                invalid_email.style.color = 'transparent';
                invalid_name.style.color = 'transparent';
                name.style.border = '1px solid RGB(13, 151 , 129)';
                email.style.border = '1px solid RGB(13, 151 , 129)';

            });
        }


        event.target.reset();
    }

    return (
        <>
            <div className={image_class}>
                <div className="text">Contact With Me</div>
                <p>You can find me on the given information below. To contact with me, Please feel free to message me.</p>
                <div className='icons'>
                    {
                        AddressProperties.map((arr, index) => {
                            return <Address key={index} icon={arr.icon} head={arr.head} sub_title={arr.sub_title} />
                        })
                    }
                </div>
                <div className='social-icon'>
                    {
                        SocialMedias.map((arr, index) => {
                            return <SocialMedia key={index} href={arr.href} site={arr.site} icon={arr.icon} />
                        })
                    }
                </div>
            </div>
            <div className={text_class}>
                <div className='text'>Message Me</div>
                <span id='message'>Your Message Has Been Sent!!!</span>
                <form onSubmit={sendEmail}>
                    <div className='fields'>
                        <div className={field_name}>
                            <input type='text' id='name' placeholder='Name' name='name'></input>
                            <span className='invalid_alert' id='invalid_name'>Name</span>
                        </div>
                        <div className={field_email}>
                            <input type='text' id='email' placeholder='Email' name='email'></input>
                            <span className='invalid_alert' id='invalid_email'>Email</span>
                        </div>
                    </div>
                    <div className='field'>
                        <input type='text' placeholder='Subject' name='subject' id='subject'></input>
                    </div>
                    <div className={field_textarea}>
                        <textarea cols='30' rows='10' placeholder='Message' name='message' id='textMessage'></textarea>
                    </div>
                    <div className='button'>
                        <button type='submit' name='submit'> Send </button>
                    </div>
                </form>
            </div>
        </>
    );
}

function Contact() {


    return (
        <>
            <Section sectionClassName="contact" id="contact" widthClassName="max-width" contentClassName="contact-content" titleValue="Contact" content={<ContactContent />} />
        </>
    );
}

export default Contact;

