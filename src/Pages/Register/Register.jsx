import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import styled from "styled-components";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContext/AuthContext";

const Register = () => {
  const { createWithEmail, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validatePassword = (pwd) => {
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasMinLen = pwd.length >= 6;
    return {
      hasUpper,
      hasLower,
      hasMinLen,
      valid: hasUpper && hasLower && hasMinLen,
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { hasUpper, hasLower, hasMinLen, valid } = validatePassword(password);

    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!valid) {
      const msgs = [];
      if (!hasUpper) msgs.push("an uppercase letter");
      if (!hasLower) msgs.push("a lowercase letter");
      if (!hasMinLen) msgs.push("at least 6 characters");
      toast.error(`Password must contain ${msgs.join(", ")}`);
      return;
    }

    if (typeof createWithEmail !== "function") {
      console.error(
        "createWithEmail is not available on AuthContext",
        createWithEmail
      );
      toast.error("Registration service not available");
      return;
    }

    setSubmitting(true);
    try {
      // create user
      const res = await createWithEmail(email, password);
      toast.success("Registration successful");

      // update profile if provider exposes updateUserProfile
      if (typeof updateUserProfile === "function") {
        try {
          await updateUserProfile({ displayName: name, photoURL });
        } catch (updErr) {
          console.error("update profile error:", updErr);
          toast.info("Registered but profile update failed");
        }
      }

      // redirect to login (or home) after register
      navigate("/login");
    } catch (err) {
      console.error("register error:", err);
      const code = err?.code || "";
      if (code === "auth/email-already-in-use") {
        toast.error("This email is already registered. Please login.");
      } else if (code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters.");
      } else if (code === "auth/invalid-email") {
        toast.error("Please enter a valid email address.");
      } else {
        toast.error(err?.message || "Registration failed. Try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    if (typeof signInWithGoogle !== "function") {
      toast.error("Google sign-in not available");
      return;
    }
    try {
      await signInWithGoogle();
      toast.success("Google signup successful");
      navigate("/");
    } catch (err) {
      console.error("google signup error:", err);
      toast.error(err?.message || "Google signup failed");
    }
  };

  return (
    <PageWrapper>
      <Card onSubmit={handleRegister}>
        <h2>Register to HabitTracker</h2>

        <Field>
          <input
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>
            {"Username".split("").map((c, i) => (
              <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                {c}
              </span>
            ))}
          </label>
        </Field>

        <Field>
          <input
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>
            {"Email".split("").map((c, i) => (
              <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                {c}
              </span>
            ))}
          </label>
        </Field>

        <Field>
          <input
            name="photoURL"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <label>
            {"Photo URL".split("").map((c, i) => (
              <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                {c}
              </span>
            ))}
          </label>
        </Field>

        <Field>
          <input
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>
            {"Password".split("").map((c, i) => (
              <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                {c}
              </span>
            ))}
          </label>
        </Field>

        <button className="primary" type="submit" disabled={submitting}>
          {submitting ? "Registering..." : "Register"}
        </button>

        <button type="button" className="outline" onClick={handleGoogle}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="g-icon"
          />
          Continue with Google
        </button>

        <p className="muted">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </Card>
    </PageWrapper>
  );
};

export default Register;

/* Styled components (same as before) */
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  background: rgb(224, 242, 254);
`;
const Card = styled.form`
  width: 100%;
  max-width: 420px;
  padding: 2rem;
  border-radius: 12px;
  background: rgb(0, 0, 0);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.6);
  backdrop-filter: blur(6px);
  color: #e6eef8;
  h2 {
    text-align: center;
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    color: #bfe3c0;
  }
  .g-icon {
    width: 18px;
    height: 18px;
  }
  .primary,
  .outline {
    width: 100%;
    padding: 12px 14px;
    border-radius: 999px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 0.75rem;
    border: none;
  }
  .primary {
    background: linear-gradient(90deg, #6ee7b7, #34d399);
    color: #06312a;
  }
  .outline {
    background: rgba(255, 255, 255, 0.04);
    color: #e6eef8;
    border: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .muted {
    text-align: center;
    margin-top: 0.9rem;
    color: #9fb1c8;
  }
`;
const Field = styled.div`
  position: relative;
  margin: 18px 0 28px;
  width: 100%;
  input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px rgba(255, 255, 255, 0.18);
    display: block;
    width: 100%;
    padding: 14px 0;
    font-size: 16px;
    color: #eaf6ff;
  }
  input:focus,
  input:valid {
    outline: 0;
    border-bottom-color: #7dd3fc;
  }
  label {
    position: absolute;
    top: 14px;
    left: 0;
    pointer-events: none;
  }
  label span {
    display: inline-block;
    font-size: 16px;
    min-width: 6px;
    color: rgba(255, 255, 255, 0.65);
    transition: transform 0.32s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      color 0.2s;
  }
  input:focus + label span,
  input:valid + label span {
    color: #7dd3fc;
    transform: translateY(-30px);
  }
`;
