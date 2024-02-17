import React from 'react'

function Contact() {
  return (
    <div>
     <div className="form-control-lg container bg-custom-colors mb-5 mt-5">
          <div className="container form-control-lg px-4 py-5 p-1 bg-custom-colors">
            <div className="row align-items-center g-lg-5 py-5">
              <div className="col-lg-7 text-center text-lg-start">
                <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-3 px-2 py-3">
                  LET'S BEGIN YOUR PROJECT WITH ALTRAAVISON TEST HOUSE PVT.LTD
                </h1>
                <p className="col-lg-10 px-1">
                  Elevate your projects with ALTRAAVISON TEST HOUSE PVT. LTD,
                  offering advanced Testing Services developed with precision in
                  our state-of-the-art ISO certified laboratory. Our commitment
                  to authenticity and integrity sets us apart. For unparalleled
                  quality and a seamless experience, take advantage of our
                  services. Contact us today
                </p>
              </div>
              <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile Number"
                    />
                    <label htmlFor="mobile">Mobile Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Your Address"
                    />
                    <label htmlFor="address">Your Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="comments"
                      placeholder="Comments"
                      rows="4"
                    ></textarea>
                    <label htmlFor="comments">Comments</label>
                  </div>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
