import React from 'react';
import Header from './Header';


function Resume() {
    const fileId = "1xKuK56qy2FTDpAQCO7_79z2VdFhiV-ye";
    const embedURL = `https://drive.google.com/file/d/${fileId}/preview`;

    return (
        <div>
            <Header/>
        
        <iframe title="Resume" src={embedURL} style={{width:"100%", height:"1000px"}}></iframe>
    
        </div>);
}

export default Resume;



