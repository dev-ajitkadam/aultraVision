import React from "react";
import { Link } from "react-router-dom";
import heroVideo from '../images/heroVideo.mp4'


function Home() {
  const buttonStyle = {
    backgroundColor: "blue",
    padding: "8px 16px",
    borderRadius: "6px",
    color: "#ffffff",
    textDecoration: "none",
  };

  return (
    <div className="mt-2 mb-2">
      <div className="video-container ">
      <video autoPlay loop muted className="background-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content text-center">
        <div className=" p-md-3 m-md-1 text-center lorn">
          <div className=" mx-auto">
            <h1 className="display-2 fw-bold">ALTRAAVISON TEST HOUSE PVT.LTD</h1>
            <h3 className="fw-normal text-dark-emphasis">
              Uplifting construction benchmarks through a skilled team of
              engineers and advanced laboratories, committed to resolving client
              challenges
            </h3>
            <div className="d-flex form-control-lg justify-content-center text-center text-dark">
              <Link to='/about'>
                <button
                  className="icon-link"
                  style={buttonStyle}
                >
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      

      {/* Services */}
  

      <div className="container px-4 py-5 text-center pt-4 pb-2" id="hanging-icons">
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
              </p><Link to='/services'>
              <a className="btn btn-primary">
                Discover More..
              </a></Link>
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
              <Link to='/services'>
              <a className="btn btn-primary">
                Discover More..
              </a></Link>
            </div>
          </div>
          <div className="col d-flex align-items-start bg-custom-colors p-5 m-3 form-control-lg">
            <div>
              <h3 className="fs-2 text-body-emphasis">Other Testing</h3>
              <p>
                Prepare for an expanded range of testing services in the
                upcoming year, including additional assessments beyond testing
              </p>
              <Link to='/services'>
              <a className="btn btn-primary">
                Discover More..
              </a></Link>
            </div>
          </div>
        </div>
        {/* Call Now */}

      </div>
      <div className="position-relative overflow-hidden text-center shadow-sm mt-2 mb-md-2 p-5">
          <div className="bg-custom-colors py-5 form-control-lg">
            <h3 className="oranges bold">We Ensure our Performance Meet your Expectations!</h3>
            <h1 className="text-body-emphasis">EXPERTISE</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
            We know you rely on us to keep your business moving forward. We make sure the results come in as expected by managing the speedy sample collection, and high-quality testing followed by a quick response.
              Get your tailored support today!
            </p>
            <h3> Contact No: +918888403292</h3>
            <h3>Email ID: altraavision@gmail.com</h3>
            <div className="d-inline-flex gap-2 pt-2 pb-2"> <Link to='/contact'>
              <button
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                type="button"
              >
                Call to action
                
              </button></Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
