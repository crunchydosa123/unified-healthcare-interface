import {useState} from "react";

const API_URL="http://localhost:3000/api/auth/login"

interface LoginForm {
    email: string;
    password: string;
  }

  const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const login = async (formData: LoginForm) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Login failed");
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            setToken(data.token);

            return data;
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
    };

    return { login, logout, loading, error, token };
};

export default useLogin;
