import React from "react";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import Services from "../components/Services";

function Homepage() {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage:
              'url("https://i.postimg.cc/Znjv4tZ3/pexels-photo-3435249.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img
            className="w-100"
            style={{ position: "absolute" }}
            src="https://i.postimg.cc/Znjv4tZ3/pexels-photo-3435249.jpg"
            alt=""
          /> */}
          <Header></Header>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className=" mt-5  text-white">Bloom from an idea</h1>
            <img
              className="w-100"
              src="https://i.postimg.cc/CKwq6Ttj/png-clipart-web-development-responsive-web-design-graphic-design-web-design-web-design-company-remov.png"
              alt=""
            />
            <h3 className="text-white pt-3">
              Technology that we use:React, nextJs, Nodejs, MongoDB, AWS,
              Digital Ocean, Firebase, Redis
            </h3>
            <Button className="bg-white text-dark rounded-5 px-5 mb-5 mt-3">
              <b>Get Started</b>
            </Button>
          </div>
        </div>
        <div>
          <Services></Services>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
