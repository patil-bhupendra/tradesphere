import React from "react";

function Signup() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/signup.png"
            alt="TradeSphere signup"
            style={{ width: "80%" }}
          />

          <h2 className="mt-4">Join TradeSphere</h2>

          <p className="text-muted">
            Start your journey with a modern trading and investment platform.
          </p>
        </div>

        <div className="col-6 p-5">
          <h1 className="fs-2">Create your TradeSphere account</h1>

          <p className="text-muted mt-3">
            Enter your details to create an account.
          </p>

          <form className="mt-4">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your mobile number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Create a password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 p-2 mt-3">
              Create Account
            </button>
          </form>

          <p className="text-muted mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" style={{ textDecoration: "none" }}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
