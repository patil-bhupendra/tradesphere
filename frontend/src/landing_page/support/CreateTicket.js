import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-user" aria-hidden="true"></i>&nbsp; Account &
            Login
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Creating an Account
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Login Issues
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Password Reset
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Profile & Account Settings
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Security
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-bar-chart" aria-hidden="true"></i>&nbsp; Orders
            & Trading
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Placing an Order
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Order Types
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Order Status
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Positions & Holdings
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQs
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-line-chart" aria-hidden="true"></i>&nbsp;
            Portfolio
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Viewing Holdings
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Portfolio Performance
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Watchlist
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transaction History
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Portfolio FAQs
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-credit-card" aria-hidden="true"></i>&nbsp; Funds
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Adding Funds
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdrawing Funds
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Fund Balance
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transaction History
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-cog" aria-hidden="true"></i>&nbsp; Technical
            Support
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Website Issues
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Application Issues
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            API & Connectivity
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Performance Issues
          </a>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-question-circle" aria-hidden="true"></i>&nbsp;
            General Queries
          </h4>

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Pricing & Charges
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Platform Features
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Feedback
          </a>
          <br />

          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Other Queries
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;