import { useContext, createContext, useState, useEffect, type ReactNode } from "react"
import { fetchUser } from "../api/api";

interface AuthContextType {
    user: any | null;
    token: string | null;
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<any | null>>;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetchUser();
                setUser(res.data.user || res.data); // handles variations depending on API wrapper
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        getUser();
    }, [])

    return (
        <AuthContext.Provider value={{ user, token, loading, setUser, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}