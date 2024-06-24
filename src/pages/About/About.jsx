import './about.css'
import React, { useState, useEffect } from 'react';
import activityData from './activities.json';

const activityImages = [
    { src: "../../images/content/park1.jpg", alt: "Test 1" },
    { src: "../../images/content/park1.jpg", alt: "Test 2" },
    { src: "../../images/content/park1.jpg", alt: "Test 3" },
];

const sections = activityData.map((item, index) => ({
    id: index,
    imageUrl: item.imageUrl,
    text: item.text,
}));

export default function About() {
    return (
        <div className='about-container'>
            <section className="activity">
                {sections.map((section) => (
                    <div key={section.id} className="about-section">
                        <div className='about-img-container'>
                            <img height="100%" src={section.imageUrl} alt="About Section Image"/>
                        </div>
                        <div className='about-text-container'>
                            <p>{section.text}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

// export default function About() {
//     return (
//         <div className='about-container'>
//             <section className='about-section'>
//                 <div className='about-img-container'>
//                     <img
//                         className="about-img-activity"
//                         src={activityImages[0].src}
//                         alt={activityImages[0].alt} />
//                 </div>
//                 <div className='about-text-container'>
//                     <p>Activity 1</p>
//                 </div>
//             </section>
//             <section className='about-section'>
//                 <div className='about-text-container'>
//                     <p>Activity 2</p>
//                 </div>
//                 <div className='about-img-container'>
//                 <div className='about-img'>
//                     <img
//                         className="about-img-activity"
//                         src={activityImages[0].src}
//                         alt={activityImages[0].alt} />
//                 </div>
//                 </div>
//             </section>
//             <section className='about-section'>
//                 <div className='about-img-container'></div>
//                 <div className='about-text-container'>
//                     <p>Activity 3</p>
//                 </div>
//             </section>
//         </div>
//     )
// }