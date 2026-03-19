import { useContext, createContext, useState, useEffect } from "react";
import { fetchServices } from "../api/api";

interface ServicesContextType {
    services: any[];
    loading: boolean;
    error: string;
}

const ServicesContext = createContext<ServicesContextType | null>(null);

export const ServicesProvider = ({ children }: { children: React.ReactNode }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await fetchServices();
                setServices(res.data);
                setLoading(false)
            } catch (err) {
                console.log(err)
                setError("Failed to fetch services")
                setLoading(false)
            }
        })()
    }, []);

    return (
        <ServicesContext.Provider value={{ services, loading, error }}>
            {children}
        </ServicesContext.Provider>
    )
}

export const useServices = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error("useServices must be used within a ServicesProvider");
    }
    return context;
};