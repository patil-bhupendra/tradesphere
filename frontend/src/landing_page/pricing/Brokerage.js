import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Pricing Details</h3>
          </a>

          <ul
            style={{
              textAlign: "left",
              lineHeight: "2.5",
              fontSize: "12px",
            }}
            className="text-muted"
          >
            <li>Equity delivery: ₹0 brokerage in the demo environment.</li>
            <li>Intraday trading: Flat ₹20 per executed order.</li>
            <li>F&O trading: Flat ₹20 per executed order.</li>
            <li>No real transactions or brokerage charges are processed.</li>
            <li>
              Pricing displayed on this page is intended for demonstration
              purposes only.
            </li>
          </ul>
        </div>

        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">View Pricing</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;