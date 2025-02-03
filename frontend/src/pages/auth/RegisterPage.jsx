import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, email, password);
      console.log("Registered successfully");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(`Error during registration: ${error}`);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("/bg.gif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen flex justify-center items-center px-4"
    >
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Register
        </h1>

        <form className="space-y-5">
          {/* Username Field */}
          <label className="flex items-center bg-transparent border border-white/40 rounded-lg p-3 text-white gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent w-full outline-none placeholder-white/70"
              placeholder="Username"
            />
          </label>

          {/* Email Field */}
          <label className="flex items-center bg-transparent border border-white/40 rounded-lg p-3 text-white gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent w-full outline-none placeholder-white/70"
              placeholder="Email"
            />
          </label>

          {/* Password Field */}
          <label className="flex items-center bg-transparent border border-white/40 rounded-lg p-3 text-white gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent w-full outline-none placeholder-white/70"
              placeholder="Password"
            />
          </label>

          {/* Register Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Register
          </button>

          {/* Already Registered Link */}
          <div className="text-center">
            <Link to="/login" className="text-white underline">
              Already registered? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
