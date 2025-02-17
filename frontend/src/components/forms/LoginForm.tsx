import { useState } from "react";
import useLogin from "../../hooks/useLogin";

type Props = {};

const LoginForm = (props: Props) => {
  const { login, loading, error, token } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      await login({email, password});
    }
  };

  return (
    <div className="flex flex-col p-20 h-full rounded-md w-full justify-center">
      <h2 className="text-2xl font-bold mb-2">Login</h2>
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md"
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
