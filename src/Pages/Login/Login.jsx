import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router";

const Login = () => {
  const { signInWithEmail, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google login successful");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-box">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="forgot-pass">
              <Link to="/reset">Forgot your password?</Link>
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            <button
              type="button"
              className="btn google"
              onClick={handleGoogleLogin}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="icon"
              />
              Continue with Google
            </button>
            <div className="signup-link">
              <Link to="/register">Sign Up</Link>
            </div>
          </form>
        </div>

        {/* Glowing ring animation */}
        {[...Array(50)].map((_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>
    </StyledWrapper>
  );
};

export default Login;

const StyledWrapper = styled.div`
  background: #1f293a;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
}

.container span {
  position: absolute;
  left: 0;
  width: 36px;
  height: 6px;
  background: #2c4766;
  border-radius: 80px;
  transform-origin: 250px;
  transform: rotate(calc(var(--i) * (360deg / 50)));
  animation: blink 3s linear infinite;
  animation-delay: calc(var(--i) * (3s / 50));
}

  @keyframes blink {
    0% {
      background: #0ef;
    }
    25% {
      background: #2c4766;
    }
  }

  .login-box {
    position: absolute;
    width: 80%;
    max-width: 300px;
    z-index: 1;
    padding: 20px;
    border-radius: 20px;
    background: #1f293a;
  }

  h2 {
    font-size: 1.8em;
    color: #0ef;
    text-align: center;
    margin-bottom: 10px;
  }

  form {
    width: 100%;
    padding: 0 10px;
  }

  .input-box {
    position: relative;
    margin: 15px 0;
  }

  input {
    width: 100%;
    height: 45px;
    background: transparent;
    border: 2px solid #2c4766;
    outline: none;
    border-radius: 40px;
    font-size: 1em;
    color: #fff;
    padding: 0 15px;
    transition: 0.5s ease;
  }

  input:focus {
    border-color: #0ef;
  }

  input[value]:not([value=""]) ~ label,
  input:focus ~ label {
    top: -10px;
    font-size: 0.8em;
    background: #1f293a;
    padding: 0 6px;
    color: #0ef;
  }

  label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    font-size: 1em;
    pointer-events: none;
    transition: 0.5s ease;
    color: #fff;
  }

  .forgot-pass {
    margin: -10px 0 10px;
    text-align: center;
  }

  .forgot-pass a {
    font-size: 0.85em;
    color: #fff;
    text-decoration: none;
  }

  .btn {
    width: 100%;
    height: 45px;
    background: #0ef;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 1em;
    color: #1f293a;
    font-weight: 600;
    margin-top: 10px;
  }

  .btn.google {
    background: #fff;
    color: #1f293a;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .icon {
    width: 18px;
    height: 18px;
  }

  .signup-link {
    margin: 10px 0;
    text-align: center;
  }

  .signup-link a {
    font-size: 1em;
    color: #0ef;
    text-decoration: none;
    font-weight: 600;
  }
`;
