import React from 'react'
import '../../css/gallery.css'

const Gallery = () => {
  return (
    <div>
      <div>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </div>
      <div><title>Gallery</title></div>
      <div>
        <header className="gallery-header">
          <h1><strong>sarangxanh photo gallery</strong></h1>
        </header>
      </div>
      <div className="gallery-body">
        <div className="gallery">
          <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg" alt="image"></img>
          <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg" alt="image"></img>
          <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg" alt="image"></img>
          <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg" alt="image"></img>
          <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg" alt="image"></img>
          <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg" alt="image"></img>
        </div>
      </div>
    </div>

  )
}

export default Gallery