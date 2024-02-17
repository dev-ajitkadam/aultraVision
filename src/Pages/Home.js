import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const buttonStyle = {
    backgroundColor: "blue",
    padding: "8px 16px",
    borderRadius: "6px",
    color: "#ffffff",
    textDecoration: "none",
  };

  return (
    <div className="p-2">
      <div className="position-relative overflow-hidden p-md-3 m-md-1 text-center bg-custom-colors form-control-lg">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">ALTRAAVISON TEST HOUSE PVT.LTD</h1>
          <h3 className="fw-normal text-muted mb-3">
            Uplifting construction benchmarks through a skilled team of
            engineers and advanced laboratories, committed to resolving client
            challenges
          </h3>
          <div className="d-flex form-control-lg justify-content-center text-center text-dark">
            <Link to="./About.js">
              <button
                variant="primary"
                className="icon-link "
                style={buttonStyle}
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block "></div>

      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-1 border-bottom text-center display-6 fw-bold">
          Services
        </h2>
        <div className="row">
          {/* Featured Boxes */}
          <div className="col d-flex align-items-start bg-custom-colors p-5 m-3 form-control-lg">
            <div>
              <h3 className="fs-2 text-body-emphasis">Chemical Testing</h3>
              <p>
                Elevate your construction projects with our premium range of
                building materials, including OPC and PPC cements, admixtures,
                bentonite, fly ash, and pozzolanic materials.
              </p>
              <a href="#" className="btn btn-primary">
                Discover More..
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start bg-custom-colors p-5 m-3 form-control-lg">
            <div>
              <h3 className="fs-2 text-body-emphasis">Mechanical Testing</h3>
              <p>
                Experience thorough mechanical testing for your construction
                materials, covering aspects such as bitumen penetration,
                macadam, AR bricks, and cement concrete tiles.
              </p>
              <a href="#" className="btn btn-primary">
                Discover More..
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start bg-custom-colors p-5 m-3 form-control-lg">
            <div>
              <h3 className="fs-2 text-body-emphasis">Other Testing</h3>
              <p>
                Prepare for an expanded range of testing services in the
                upcoming year, including additional assessments beyond testing
              </p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
        </div>
        {/* Call Now */}

        <div className="container my-5">
          <div className="p-5 text-center rounded-3 bg-custom-colors py-5">
            <h3 className="oranges bold">We Ensure our Performance Meet your Expectations!</h3>
            <h1 className="text-body-emphasis">EXPERTISE</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
            We know you rely on us to keep your business moving forward. We make sure the results come in as expected by managing the speedy sample collection, and high-quality testing followed by a quick response.
              Get your tailored support today!
            </p>
            <h3> Contact No: +918888403292</h3>
            <h3>Email ID: altraavision@gmail.com</h3>
            <div className="d-inline-flex gap-2 mb-5">
              <button
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                type="button"
              >
                Call to action
                <svg className="bi ms-2" width="24" height="24">
                  <use xlinkHref="#arrow-right-short"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
