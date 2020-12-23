import React from "react";

function Middle() {
  return (
    <section className="container">
      <hr />
      <div className="row  pt-3 ">
        <div className="col-lg-4">
          <img
            style={{ maxHeight: "14rem" }}
            className="w-100 img-thumbnail"
            src="https://picsum.photos/400"
            alt=""
          />
          <div class="card text-light bg-success text-center mt-2">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <img
            style={{ maxHeight: "14rem" }}
            className="w-100 img-thumbnail"
            src="https://picsum.photos/500"
            alt=""
          />
          <div class="card text-light bg-primary text-center mt-2">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <img
            style={{ maxHeight: "14rem" }}
            className="w-100 img-thumbnail"
            src="https://picsum.photos/600"
            alt=""
          />
          <div class="card text-light bg-dark text-center mt-2">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Middle;
