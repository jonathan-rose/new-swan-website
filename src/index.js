import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Video from './pages/Video';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

export default function App() {
  const [activeContent, setActiveContent] = useState('home');

  const handleLinkClick = (content) => {
    setActiveContent(content);
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'video':
        return <Video />;
      default:
        return <p>Error: Unknown content</p>;
    }
  };

  return (
    <div className="App">
      <Header onLinkClick={handleLinkClick} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  )
}