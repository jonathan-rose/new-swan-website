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