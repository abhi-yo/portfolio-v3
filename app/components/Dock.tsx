'use client';

import React, { useState, useEffect, useRef } from 'react';

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hideTimeoutRef = useRef<number | undefined>(undefined);

  // Show dock on scroll and hide after inactivity
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      
      // Clear existing timeout
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
      
      // Set new timeout to hide dock after 3 seconds
      hideTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show dock initially for 3 seconds
    setIsVisible(true);
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Keep dock visible when hovering
  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
    }
    setIsVisible(true);
  };

  // Resume auto-hide when leaving dock
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  const apps = [
    { 
      id: 'projects', 
      name: 'Projects', 
      icon: 'https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024',
      action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    },
    { 
      id: 'github', 
      name: 'GitHub', 
      icon: 'https://cdn.jim-nielsen.com/macos/1024/github-desktop-2021-05-20.png?rf=1024',
      action: () => window.open('https://github.com', '_blank')
    },
    { 
      id: 'twitter', 
      name: 'Twitter', 
      icon: 'https://icon.horse/icon/x.com',
      action: () => window.open('https://twitter.com', '_blank')
    },
    { 
      id: 'mail', 
      name: 'Mail', 
      icon: 'https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024',
      action: () => window.location.href = 'mailto:your.email@example.com'
    },
  ];

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.3;
    if (distance === 1) return 1.15;
    return 1;
  };

  return (
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div 
        className="flex items-end justify-center gap-3.5 bg-white/10 backdrop-blur-md rounded-2xl px-3 py-2 border border-white/20 shadow-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {apps.map((app, index) => {
          const scale = getScale(index);
          return (
            <div
              key={app.id}
              className="flex flex-col items-center justify-end transition-transform duration-200 ease-out cursor-pointer"
              style={{ 
                transform: `scale(${scale})`,
                transformOrigin: 'bottom center'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={app.action}
              title={app.name}
            >
              <img
                src={app.icon}
                alt={app.name}
                className="w-10 h-10 rounded-lg object-cover"
                style={{
                  filter: `drop-shadow(0 ${scale > 1.1 ? '2px 4px' : '1px 2px'} rgba(0,0,0,0.3))`
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dock; 