import React from "react";

function Main() {
  return (
    <div className="container">
      <div className="row pt-3">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
            />
            <li
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
            />
            <li
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
            />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://picsum.photos/1200/400?grayscale"
                className=" img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/id/237/1200/400"
                className=" img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/id/101/1200/400"
                className=" img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
