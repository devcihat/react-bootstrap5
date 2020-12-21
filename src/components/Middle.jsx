import React from "react";

function Middle() {
  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://picsum.photos/seed/picsum/600/300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary btn-sm mx-2">
                Small button
              </button>
              <button type="button" className="btn btn-secondary btn-sm">
                Small button
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://picsum.photos/seed/picsum/600/300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text text-muted">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary btn-sm mx-2">
                Small button
              </button>
              <button type="button" className="btn btn-secondary btn-sm">
                Small button
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://picsum.photos/seed/picsum/600/300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary btn-sm mx-2">
                Small button
              </button>
              <button type="button" className="btn btn-secondary btn-sm">
                Small button
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Middle;
