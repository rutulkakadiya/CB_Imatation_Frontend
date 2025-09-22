import React, { useState, useRef, useEffect, useCallback } from 'react';

const SAMPLE_STORIES = [
  {
    id: 1,
    username: "Elegant Earrings",
    avatar: "/Product_Images/Product_1_1.webp",
    items: [
      {
        id: 1,
        type: "image",
        url: "/Product_Images/Product_1_1.webp",
        duration: 4000,
        caption: "Timeless elegance in every detail ✨"
      },
      {
        id: 2,
        type: "image", 
        url: "/Product_Images/Product_1_2.webp",
        duration: 4000,
        caption: "Perfect for any occasion 💎"
      }
    ]
  },
  {
    id: 2,
    username: "Gold Collection",
    avatar: "/Product_Images/Product_2_1.jpg",
    items: [
      {
        id: 1,
        type: "image",
        url: "/Product_Images/Product_2_1.jpg",
        duration: 4000,
        caption: "Luxury redefined in gold 🌟"
      },
      {
        id: 2,
        type: "image",
        url: "/Product_Images/Product_2_2.webp", 
        duration: 4000,
        caption: "Crafted with precision and care"
      },
      {
        id: 3,
        type: "image",
        url: "/Product_Images/Product_3_1.webp",
        duration: 4000,
        caption: "Every piece tells a story 💫"
      }
    ]
  },
  {
    id: 3,
    username: "Diamond Dreams",
    avatar: "/Product_Images/Product_3_1.webp",
    items: [
      {
        id: 1,
        type: "image",
        url: "/Product_Images/Product_3_1.webp",
        duration: 4000,
        caption: "Sparkle like never before ✨"
      },
      {
        id: 2,
        type: "image",
        url: "/Product_Images/Product_3_2.webp",
        duration: 4000,
        caption: "Diamonds are forever 💎"
      }
    ]
  }
];

const JewelleryStories = ({ stories = SAMPLE_STORIES, brandTitle = "CB Imitation" }) => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const progressRef = useRef(null);
  const animationRef = useRef(null);
  const longPressRef = useRef(null);
  const videoRef = useRef(null);

  const currentStory = selectedStory ? stories.find(s => s.id === selectedStory) : null;
  const currentItem = currentStory?.items[currentItemIndex];

  // Progress animation
  const animateProgress = useCallback((startTime) => {
    if (!currentItem || isPaused) return;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / currentItem.duration) * 100, 100);
      
      setProgress(newProgress);

      if (newProgress < 100) {
        animationRef.current = requestAnimationFrame(() => animate(currentTime));
      } else {
        // Auto advance to next item
        if (currentItemIndex < currentStory.items.length - 1) {
          setCurrentItemIndex(prev => prev + 1);
          setProgress(0);
        } else {
          // Auto advance to next story
          const currentStoryIndex = stories.findIndex(s => s.id === selectedStory);
          if (currentStoryIndex < stories.length - 1) {
            setSelectedStory(stories[currentStoryIndex + 1].id);
            setCurrentItemIndex(0);
            setProgress(0);
          } else {
            // Close viewer when all stories are done
            closeViewer();
          }
        }
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [currentItem, isPaused, currentItemIndex, currentStory, selectedStory, stories]);

  // Start progress animation
  useEffect(() => {
    if (selectedStory && currentItem && !isPaused) {
      setProgress(0);
      const startTime = performance.now();
      animateProgress(startTime);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [selectedStory, currentItemIndex, isPaused, animateProgress]);

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [isPaused, currentItem]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    });

    // Long press detection
    longPressRef.current = setTimeout(() => {
      setIsPaused(true);
    }, 500);
  };

  const handleTouchMove = (e) => {
    if (longPressRef.current) {
      clearTimeout(longPressRef.current);
      longPressRef.current = null;
    }
  };

  const handleTouchEnd = (e) => {
    if (longPressRef.current) {
      clearTimeout(longPressRef.current);
      longPressRef.current = null;
    }

    if (!touchStart) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
      time: Date.now()
    };

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const duration = touchEnd.time - touchStart.time;

    // Swipe detection
    if (duration < 300) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 50) {
          // Swipe left - next item
          nextItem();
        } else if (deltaX < -50) {
          // Swipe right - previous item
          previousItem();
        }
      } else if (deltaY > 50) {
        // Swipe down - close viewer
        closeViewer();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse handlers for desktop
  const handleMouseDown = () => {
    longPressRef.current = setTimeout(() => {
      setIsPaused(true);
    }, 500);
  };

  const handleMouseUp = () => {
    if (longPressRef.current) {
      clearTimeout(longPressRef.current);
      longPressRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (longPressRef.current) {
      clearTimeout(longPressRef.current);
      longPressRef.current = null;
    }
  };

  // Navigation functions
  const nextItem = () => {
    if (currentItemIndex < currentStory.items.length - 1) {
      setCurrentItemIndex(prev => prev + 1);
      setProgress(0);
    } else {
      const currentStoryIndex = stories.findIndex(s => s.id === selectedStory);
      if (currentStoryIndex < stories.length - 1) {
        setSelectedStory(stories[currentStoryIndex + 1].id);
        setCurrentItemIndex(0);
        setProgress(0);
      }
    }
  };

  const previousItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(prev => prev - 1);
      setProgress(0);
    } else {
      const currentStoryIndex = stories.findIndex(s => s.id === selectedStory);
      if (currentStoryIndex > 0) {
        setSelectedStory(stories[currentStoryIndex - 1].id);
        setCurrentItemIndex(stories[currentStoryIndex - 1].items.length - 1);
        setProgress(0);
      }
    }
  };

  const closeViewer = () => {
    setSelectedStory(null);
    setCurrentItemIndex(0);
    setProgress(0);
    setIsPaused(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const openStory = (storyId) => {
    setSelectedStory(storyId);
    setCurrentItemIndex(0);
    setProgress(0);
    setIsPaused(false);
  };

  return (
    <div className="w-full pb-[30px]">
      {/* Story Rings */}
      <div className="px-4">
        <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-1 text-start">Latest Stories</h3>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide justify-start">
          {stories.map((story) => {
            const hasUnseenItems = true; // You can implement logic to track seen/unseen
            return (
              <div
                key={story.id}
                className="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer"
                onClick={() => openStory(story.id)}
              >
                <div className={`w-[90px] h-[90px] sm:w-16 sm:h-16 rounded-full p-0.5 ${
                  hasUnseenItems 
                    ? 'bg-gradient-to-r from-[#ab7f5c] to-[#8b6b4a]' 
                    : 'bg-gray-300'
                }`}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                    <img
                      src={story.avatar}
                      alt={story.username}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <span className="text-xs text-[var(--text-dark)] text-center max-w-16 truncate">
                  {story.username}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Story Viewer */}
      {selectedStory && currentStory && (
        <div className="fixed inset-0 bg-black z-50">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 z-10 p-4">
            <div className="flex space-x-1">
              {currentStory.items.map((_, index) => (
                <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-white transition-all duration-100 ${
                      index < currentItemIndex ? 'w-full' : 
                      index === currentItemIndex ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      width: index === currentItemIndex ? `${progress}%` : 
                             index < currentItemIndex ? '100%' : '0%'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Header */}
          <div className="absolute top-16 left-0 right-0 z-10 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={currentStory.avatar}
                  alt={currentStory.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{currentStory.username}</p>
                <p className="text-white/70 text-xs">{currentItemIndex + 1} of {currentStory.items.length}</p>
              </div>
            </div>
            <button
              onClick={closeViewer}
              className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Story Content */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {currentItem?.type === 'video' ? (
              <video
                ref={videoRef}
                src={currentItem.url}
                className="max-w-full max-h-full object-contain"
                muted
                playsInline
                autoPlay
                loop={false}
              />
            ) : (
              <img
                src={currentItem?.url}
                alt="Story"
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Caption */}
          {currentItem?.caption && (
            <div className="absolute bottom-20 left-0 right-0 z-10 p-4">
              <p className="text-white text-center text-sm bg-black/30 backdrop-blur-sm rounded-lg p-3">
                {currentItem.caption}
              </p>
            </div>
          )}

          {/* Navigation Areas */}
          <div className="absolute inset-0 flex">
            <div 
              className="w-1/2 h-full cursor-pointer"
              onClick={previousItem}
            />
            <div 
              className="w-1/2 h-full cursor-pointer"
              onClick={nextItem}
            />
          </div>

          {/* Pause Indicator */}
          {isPaused && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default JewelleryStories;
