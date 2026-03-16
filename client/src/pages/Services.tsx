import Layout from "./Layout"
import ServicesCard from "../components/CustomComponenents/services/ServicesCard"
import { useState, useEffect } from "react"
import axios from "axios";

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const baseurl = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await axios.get(`${baseurl}/services`)
                setServices(res.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setError("Failed to fetch services")
                setLoading(false)
            }
        })()
    }, []);
    return (
        <Layout>
            <section className="container mx-auto services-section py-20 px-5">
                <h2 className="text-center mb-10 font-semibold text-2xl">Available services</h2>
                {error && <p className="text-center my-10 text-center text-red-600 font-bold">{error}</p>}
                <div className="services-container grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
                    {loading ?
                        <p className="text-center my-10 text-center">Loading...</p>
                        :
                        services.length !== 0 ?
                            services.map((service: any) => (
                                <ServicesCard key={service.heading} service={service} />
                            ))
                            :
                            <p className="text-center my-10">No service available</p>
                    }
                </div>
            </section>
        </Layout>
    )
}

export default Services