import React from 'react'

export default function Carousel() {
  return (
    <div className="container-fluid">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="" className="d-block w-100" alt="pics1" />
    </div>
    <div className="carousel-item">
      <img src="" className="d-block w-100" alt="pics2" />
    </div>
    <div className="carousel-item">
      <img src="" className="d-block w-100" alt="pics3" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      
    </div>
  )
}
