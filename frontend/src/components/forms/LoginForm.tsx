import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

type Props = {};

const LoginForm = (props: Props) => {
  const navigate = useNavigate();
  const { login, loading, error, token } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      const data = await login({ email, password });
      if (data) navigate("/doc/dashboard");
    }
  };

  return (
    <div className="text-white flex flex-col p-10 h-full rounded-md text-center w-full justify-center">
      {/* Logo */}
      <img src="/images/logo.png" alt="Logo" className="w-18 h-18 mx-auto mb-4" />

      <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
      <p className="mb-4">Enter your credentials to login</p>

      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Username"
          className="p-2 my-2 w-3/4 border-b border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-3/4 border-b border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-3/4 my-5 rounded-full p-2 bg-[#98e5dd] text-black"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {token && <p className="text-green-500 mt-2">Logged in successfully!</p>}
    </div>
  );
};

export default LoginForm;
