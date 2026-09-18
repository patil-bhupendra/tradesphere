import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The TradeSphere Ecosystem</h1>

        <p>
          Explore the core tools and features being built into TradeSphere for
          a simple and connected trading experience.
        </p>

        <div className="col-4 p-3 mt-5">
          <h3>Trading Dashboard</h3>
          <p className="text-small text-muted mt-3">
            Monitor stocks, market information, and trading activity from one
            place.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <h3>Portfolio</h3>
          <p className="text-small text-muted mt-3">
            Track holdings, positions, and overall portfolio performance.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <h3>Orders</h3>
          <p className="text-small text-muted mt-3">
            Manage trading orders and review your order history.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <h3>Watchlist</h3>
          <p className="text-small text-muted mt-3">
            Keep track of stocks you're interested in and monitor their
            movement.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <h3>Positions</h3>
          <p className="text-small text-muted mt-3">
            View and manage your active trading positions.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <h3>Account</h3>
          <p className="text-small text-muted mt-3">
            Manage your TradeSphere account and authentication securely.
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;