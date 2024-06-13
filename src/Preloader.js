import React from 'react';
import loader from './Images/loader2.gif';


function Preloader() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%', background: 'RGB(2, 0 , 0)' }}>
                <img src={loader} style={{ height: '100px', width: '170px' }}></img>
            </div>
        </>
    );
}

export default Preloader;