import React, { useState } from 'react';

const photos = [
  {
    src: '/bg.jpg',
    date: '2025-07-01',
    location: 'Hanoi, Vietnam',
  },
  {
    src: '/bg.jpg',
    date: '2025-07-05',
    location: 'Da Nang, Vietnam',
  },
  {
    src: '/bg.jpg',
    date: '2025-07-10',
    location: 'Ho Chi Minh City, Vietnam',
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">SarangXanh Gallery</h2>
        
        {/* Slideshow */}
        <div className="relative group">
          <img
            src={photos[currentIndex].src}
            alt="cleanup"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
          {/* Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-6 py-4 rounded-b-xl flex justify-between items-center">
            <div>
              <p className="text-sm">{photos[currentIndex].date}</p>
              <p className="text-md font-semibold">{photos[currentIndex].location}</p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevPhoto} className="text-white hover:text-gray-300">&larr;</button>
              <button onClick={nextPhoto} className="text-white hover:text-gray-300">&rarr;</button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 space-y-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex items-center gap-6 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={photo.src}
                alt="timeline"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <p className="text-sm text-gray-500">{photo.date}</p>
                <p className="text-md font-semibold text-gray-800">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
