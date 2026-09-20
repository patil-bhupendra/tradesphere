import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>TradeSphere Support</h4>
        <a href="">My Tickets</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3" style={{ lineHeight: "1.5" }}>
            Search for help or browse topics to find solutions
          </h1>

          <input
            type="text"
            placeholder="Eg. How do I place an order?"
            className="mb-3 p-2"
          />

          <br />

          <a href="">Account & Login</a>&nbsp;&nbsp;&nbsp;
          <a href="">Orders & Trading</a>&nbsp;&nbsp;&nbsp;
          <a href="">Portfolio</a>&nbsp;&nbsp;&nbsp;

          <br />

          <a href="">Technical Support</a>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>

          <ol>
            <li>
              <a href="">Getting started with TradeSphere</a>
            </li>

            <br />

            <li>
              <a href="">Understanding orders and positions</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;