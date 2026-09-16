import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">The Developer</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Bhupendra-passport.png"
            alt="Bhupendra Patil"
            style={{ borderRadius: "100%", width: "58%" }}
          />

          <h4 className="mt-5">Bhupendra Patil</h4>
          <h6>Creator & Full Stack Developer</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            I'm Bhupendra Patil, a Full Stack MERN Developer and the developer
            behind TradeSphere, a stock trading platform project built to
            explore modern web application development.
          </p>

          <p>
            I built TradeSphere to strengthen my understanding of full-stack
            development, including React, Node.js, Express.js, REST APIs,
            authentication, and database-driven applications.
          </p>

          <p>
            The platform is being developed with a focus on creating a clean
            trading experience with features such as watchlists, holdings,
            orders, positions, and portfolio management.
          </p>

          <p>
            Connect on{" "}
            <a
              href="https://github.com/patil-bhupendra"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>{" "}
            /{" "}
            <a
              href="https://linkedin.com/in/patil-bhupendra/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;