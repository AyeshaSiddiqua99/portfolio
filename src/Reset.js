import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


function Reset() {

    const [resetClass, setResetClass] = useState('scroll-up-btn-off');

    document.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setResetClass('scroll-up-btn');
        } else if (window.scrollY <= 200) {
            setResetClass('scroll-up-btn-off')
        }
    })

    return (
        <>
            <div id={resetClass}>
                <a href = '#home'>
                    <IconButton>
                        <ArrowUpwardIcon id='reset' />
                    </IconButton>
                </a>
            </div>
        </>
    );
}

export default Reset;