import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/signup.png"
            alt="TradeSphere login"
            style={{ width: "80%" }}
          />

          <h2 className="mt-4">Welcome Back</h2>

          <p className="text-muted">
            Login to continue your TradeSphere journey.
          </p>
        </div>

        <div className="col-6 p-5">
          <h1 className="fs-2">Login to TradeSphere</h1>

          <p className="text-muted mt-3">
            Enter your credentials to access your account.
          </p>

          <form className="mt-4">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 p-2 mt-3">
              Login
            </button>
          </form>

          <p className="text-muted mt-4 text-center">
            Don't have an account?{" "}
            <a href="/signup" style={{ textDecoration: "none" }}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
