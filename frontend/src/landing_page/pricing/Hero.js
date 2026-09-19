import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Simple & Transparent Pricing</h1>

        <h3 className="text-muted mt-3 fs-5">
          Straightforward pricing designed for a simple trading experience
        </h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Equity delivery"
          />

          <h1 className="fs-3">Equity Delivery</h1>

          <p className="text-muted">
            ₹0 brokerage on equity delivery trades in this TradeSphere
            demonstration project.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday trading"
          />

          <h1 className="fs-3">Intraday Trading</h1>

          <p className="text-muted">
            Flat ₹20 per executed order in the TradeSphere demo environment.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/pricingMF.svg"
            alt="Mutual funds"
          />

          <h1 className="fs-3">Mutual Funds</h1>

          <p className="text-muted">
            Explore mutual-fund pricing concepts with no real commissions or
            transactions in this demonstration project.
          </p>
        </div>
      </div>

      <p className="text-center text-muted mb-5" style={{ fontSize: "14px" }}>
        *Pricing shown above is for demonstration purposes only and does not
        represent actual brokerage or financial services provided by
        TradeSphere.
      </p>
    </div>
  );
}

export default Hero;