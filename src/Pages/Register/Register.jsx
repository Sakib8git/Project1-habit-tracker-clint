import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"; // ✅ react-router-dom ব্যবহার করো
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";
import "../../App.css";
import Button from "../../Custom Button/Button";

const Register = () => {
  const { createWithEmail, signInWithGoogle, updateUserProfile, logOut } =
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
      Swal.fire("Error", "Name is required", "error");
      return;
    }

    if (!valid) {
      const msgs = [];
      if (!hasUpper) msgs.push("an uppercase letter");
      if (!hasLower) msgs.push("a lowercase letter");
      if (!hasMinLen) msgs.push("at least 6 characters");
      Swal.fire("Error", `Password must contain ${msgs.join(", ")}`, "error");
      return;
    }

    if (typeof createWithEmail !== "function") {
      console.error(
        "createWithEmail is not available on AuthContext",
        createWithEmail
      );
      Swal.fire("Error", "Registration service not available", "error");
      return;
    }

    setSubmitting(true);
    try {
      const res = await createWithEmail(email, password);

      Swal.fire({
        icon: "success",
        title: "✅ Registration successful! Please login to continue.",
        showConfirmButton: false,
        timer: 2000,
      });

      if (typeof updateUserProfile === "function") {
        try {
          await updateUserProfile({ displayName: name, photoURL });
        } catch (updErr) {
          console.error("update profile error:", updErr);
          Swal.fire("Info", "Registered but profile update failed", "info");
        }
      }

      if (typeof logOut === "function") {
        await logOut();
      }

      navigate("/login");
    } catch (err) {
      console.error("register error:", err);
      const code = err?.code || "";
      if (code === "auth/email-already-in-use") {
        Swal.fire("Error", "This email is already registered. Please login.", "error");
      } else if (code === "auth/weak-password") {
        Swal.fire("Error", "Password should be at least 6 characters.", "error");
      } else if (code === "auth/invalid-email") {
        Swal.fire("Error", "Please enter a valid email address.", "error");
      } else {
        Swal.fire("Error", err?.message || "Registration failed. Try again.", "error");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    if (typeof signInWithGoogle !== "function") {
      Swal.fire("Error", "Google sign-in not available", "error");
      return;
    }
    try {
      await signInWithGoogle();
      Swal.fire({
        icon: "success",
        title: "Google signup successful",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    } catch (err) {
      console.error("google signup error:", err);
      Swal.fire("Error", err?.message || "Google signup failed", "error");
    }
  };

  return (
    <div className="page-wrapper ">
      <form className="register-card" onSubmit={handleRegister}>
        <h1 className="text-3xl font-bold text-center text-base-800  mb-6">
          Register to <span className="text-green-600">HabitTracker</span>
        </h1>

        <div className="field border border-gray-300  px-3  rounded-2xl">
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
        </div>

        <div className="field border border-gray-300 px-3 rounded-2xl">
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
        </div>

        <div className="field border border-gray-300 px-3 rounded-2xl">
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
        </div>

        <div className="field border border-gray-300 px-3 rounded-2xl">
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
        </div>

        <Button type="submit" disabled={submitting}>
          {submitting ? "Registering..." : "Register"}
        </Button>

        <button type="button" className="outline" onClick={handleGoogle}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="g-icon"
          />
          Continue with Google
        </button>

        <p className="muted">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/login">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;