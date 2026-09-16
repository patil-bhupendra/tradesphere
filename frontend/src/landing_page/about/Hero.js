import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We are building a modern trading experience for the next generation
          of investors.
          <br />
          Technology, simplicity, and transparency at the core of TradeSphere.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            TradeSphere is a full-stack stock trading platform project designed
            to provide a clean and intuitive experience for exploring stocks,
            managing holdings, tracking orders, and monitoring a trading
            portfolio.
          </p>

          <p>
            The platform is being built with modern web technologies, with a
            focus on responsive interfaces, secure authentication, and a smooth
            user experience.
          </p>

          <p>
            Our goal is to bring together the essential features of a trading
            platform in one simple and easy-to-use ecosystem.
          </p>
        </div>

        <div className="col-6 p-5">
          <p>
            TradeSphere focuses on making complex trading workflows easier to
            understand through a clean interface and well-structured features.
          </p>

          <p>
            The platform is continuously evolving as new functionality is
            developed, including portfolio management, watchlists, orders,
            positions, and other trading-related features.
          </p>

          <p>
            TradeSphere is a development and educational project and does not
            provide real brokerage, investment, or financial services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;