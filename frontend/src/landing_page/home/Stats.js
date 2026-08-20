import React from "react";
function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            TradeSphere is designed to give investors a simple and reliable
            platform to invest and trade across multiple financial products.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The TradeSphere universe</h2>
          <p className="text-muted">
            More than just a trading platform, TradeSphere brings essential
            investing and trading features together in one simple ecosystem.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With smart trading tools and risk-aware features, TradeSphere helps
            you make informed investment decisions.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="TradeSphere investment ecosystem"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a style={{ textDecoration: "none" }}>
              Try TradeSphere demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
