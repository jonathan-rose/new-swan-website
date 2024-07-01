import './about.css'
import React, { useState, useEffect } from 'react';
import activityData from './activities.json';
import ImgInfo from '../../components/ImgInfo/ImgInfo';

const activities = activityData.map((item, index) => ({
    id: index,
    imageUrl: item.imageUrl,
    alt: item.altText,
    text: item.text,
}));

export default function About() {
    return (
      <div className="about-container">
        <div className="activities">
          {activities.map((section) => (
            <ImgInfo
              key={section.id}
              id={section.id}
              imageUrl={section.imageUrl}
              text={section.text}
              altText={section.alt}
            />
          ))}
        </div>
      </div>
    );
  }