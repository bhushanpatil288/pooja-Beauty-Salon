import Layout from "./Layout"

const About = () => {
    return (
        <Layout>
            <div className="container mx-auto px-20">
                <h2 className="text-2xl font-bold text-primary mt-20 mb-3">About Us</h2>
                <p className="text-primary">
                    Welcome to our beauty parlour, where care and quality come first. Run by an experienced and dedicated professional, we provide a range of services including skincare, haircare, and grooming tailored to your needs. We focus on using good products and practical techniques to give you clean, reliable results. Whether it’s regular maintenance or a special occasion, our goal is to help you look neat, confident, and well-groomed every time you visit.
                </p>
                <p className="text-end text-primary">- Vandana Patil</p>
            </div>
        </Layout>
    )
}

export default About