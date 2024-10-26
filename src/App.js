import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactHowler from 'react-howler';

import './App.css';

const App = () => {
  const [playMusic, setPlayMusic] = useState(false);

  const handlePlayMusic = () => {
    setPlayMusic(true);
  };

  return (
    <div className="birthday-page" onClick={handlePlayMusic}>
      {playMusic && (
        <ReactHowler
          src="/music/song.mp3"
          playing={true}
          loop={true}
          volume={0.4}
        />
      )}
      
      <div className="main-image-container">
        <Slide direction="down" triggerOnce>
          <img src="/images/main.jpg" alt="Main" className="main-image" />
        </Slide>
      </div>
      
      <div className="birthday-message">
        <Slide direction="up" triggerOnce>
          <p>Happy Birthday, Love! 🎉💖 You mean the world to me!</p>
        </Slide>
      </div>
      
      <div className="info-paragraph">
        <p>Here are some of our favorite moments together! Each photo tells a story that brings a smile to my face. I hope they remind you of all the beautiful times we've shared.</p>
      </div>

      <div className="image-carousel">
      <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src="/images/one.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="/images/three.jpg" alt="Slide 3" />
          </div>
          <div>
            <img src="/images/four.jpg" alt="Slide 4" />
          </div>
          <div>
            <img src="/images/five.jpg" alt="Slide 5" />
          </div>
          <div>
            <img src="/images/six.jpg" alt="Slide 6" />
          </div>
          <div>
            <img src="/images/seven.jpg" alt="Slide 7" />
          </div>
          <div>
            <img src="/images/eight.jpg" alt="Slide 8" />
          </div>
          <div>
            <img src="/images/nine.jpg" alt="Slide 9" />
          </div>
          <div>
            <img src="/images/ten.jpg" alt="Slide 10" />
          </div>
          <div>
            <img src="/images/eleven.jpg" alt="Slide 11" />
          </div>
          <div>
            <img src="/images/twelve.jpg" alt="Slide 12" />
          </div>
          <div>
            <img src="/images/thirteen.jpg" alt="Slide 13" />
          </div>
          <div>
            <img src="/images/fourteen.jpg" alt="Slide 14" />
          </div>
          <div>
            <img src="/images/fifteen.jpg" alt="Slide 15" />
          </div>
        </Carousel>
      </div>

      <div className="info-paragraph">
        <p>Every moment we spend together is a treasure. I'm grateful for you every day, and I look forward to making even more memories in the future.</p>
      </div>

      <div className="heart-container">
        {[...Array(10)].map((_, index) => (
          <div key={index} className={`heart heart-${index}`}></div>
        ))}
      </div>

      {!playMusic && (
        <div className="play-music-prompt">Click anywhere to start the celebration 🎉</div>
      )}

      
      <Slide direction="left" triggerOnce>
        <div className="section">
          <img src="/images/three.jpg" alt="Description 1" className="section-image" />
          <div className="section-paragraph">
            <p>This is a special moment we shared together. It reminds me of how much fun we had!</p>
          </div>
        </div>
      </Slide>

      <Slide direction="right" triggerOnce>
        <div className="section section-reverse">
          <img src="/images/six.jpg" alt="Description 2" className="section-image" />
          <div className="section-paragraph">
            <p>Another beautiful memory! I cherish every second we spend together.</p>
          </div>
        </div>
      </Slide>
      {/* Long paragraph with slide-up effect */}
      <div className="long-message-container">
        <Slide direction="up" triggerOnce>
          <div className="long-message">
            <p>
              My love, I cannot express how much joy you've brought into my life. From the smallest moments to the biggest milestones, you've been my rock, my inspiration, and my reason to smile. Every laugh we've shared, every tear, and every adventure has brought us closer, and I wouldn't trade any of it for the world. Here's to many more years of love, laughter, and countless memories. You are my everything, and I will always cherish you. Happy Birthday once again, my love. 💖
            </p>
          </div>
        </Slide>
      </div>

      
      
    </div>
  );
};

export default App;