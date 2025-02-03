import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      console.log("Login successfully");
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
      {/* Glassmorphic Container */}
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>

        {/* Form */}
        <form className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-white mb-2">Email</label>
            <div className="flex items-center border border-white/30 rounded-lg px-3 py-2 bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 text-white opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="grow bg-transparent outline-none placeholder-gray-300 text-white pl-3"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-white mb-2">Password</label>
            <div className="flex items-center border border-white/30 rounded-lg px-3 py-2 bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 text-white opacity-70"
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
                className="grow bg-transparent outline-none placeholder-gray-300 text-white pl-3"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Submit Button & Register Link */}
          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition"
            >
              Login
            </button>
            <Link
              to="/register"
              className="text-white underline text-sm hover:text-gray-300 transition"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
