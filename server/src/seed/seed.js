const serviceModel = require("../models/service.model.js");
const userModel = require("../models/user.model.js");
const appointmentModel = require("../models/appointment.model.js");

const services = [
    {
        heading: "Hair Spa",
        subHeading: "Deep conditioning & scalp massage",
        description: "A restorative hair treatment that deeply nourishes and revitalizes your scalp and hair, leaving it soft, shiny, and healthy.",
        price: 1000,
        duration: 60,
    },
    {
        heading: "Facial",
        subHeading: "Rejuvenating skin treatment",
        description: "A deep cleansing and exfoliating facial that removes impurities, unclogs pores, and restores a glowing complexion.",
        price: 1500,
        duration: 90,
    },
    {
        heading: "Waxing",
        subHeading: "Smooth & hair-free skin",
        description: "Professional waxing services using high-quality products for smooth, long-lasting hair removal with minimal discomfort.",
        price: 500,
        duration: 30,
    },
    {
        heading: "Threading",
        subHeading: "Precision eyebrow shaping",
        description: "Expert threading techniques to shape your eyebrows perfectly and remove unwanted facial hair with precision.",
        price: 200,
        duration: 15,
    },
    {
        heading: "Manicure",
        subHeading: "Nail care & hand spa",
        description: "A relaxing hand treatment that includes cuticle care, nail shaping, massage, and your choice of premium nail polish.",
        price: 800,
        duration: 45,
    },
    {
        heading: "Pedicure",
        subHeading: "Foot spa & nail grooming",
        description: "A soothing foot spa experience with exfoliation, massage, and expert nail grooming for soft, beautiful feet.",
        price: 1200,
        duration: 60,
    },
    {
        heading: "Makeup",
        subHeading: "Flawless party & event look",
        description: "Professional makeup application tailored to your features, ensuring a stunning and durable look for any special occasion.",
        price: 2000,
        duration: 120,
    },
    {
        heading: "Haircut",
        subHeading: "Stylish & modern cuts",
        description: "Customized haircuts by expert stylists to give you a fresh, manageable, and trendy look that suits your face shape.",
        price: 500,
        duration: 30,
    },
    {
        heading: "Hair Color",
        subHeading: "Highlights & full coverage",
        description: "Premium hair coloring services ranging from root touch-ups to full transformations using vibrant, damage-free, and long-lasting shades.",
        price: 1500,
        duration: 120,
    },
    {
        heading: "Henna Art",
        subHeading: "Intricate Mehndi designs",
        description: "Beautiful, intricate, and natural temporary henna designs applied by skilled artists for a traditional aesthetic touch.",
        price: 300,
        duration: 30,
    },
]

const users = [
    {
        name: "John Doe",
        phone: "1234567890",
        email: "john@example.com",
        password: "password123"
    },
    {
        name: "Jane Smith",
        phone: "0987654321",
        email: "jane@example.com",
        password: "password123"
    }
];

const seedServices = async () => {
    try {
        await serviceModel.deleteMany({});
        await userModel.deleteMany({});
        await appointmentModel.deleteMany({});

        const createdServices = await serviceModel.create(services);
        console.log("testing services added");

        const createdUsers = await userModel.create(users);
        console.log("testing users added");

        const appointments = [
            {
                userId: createdUsers[0]._id,
                serviceId: createdServices[0]._id,
                date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Tomorrow
                time: "10:00 AM",
                status: "booked",
                notes: "Looking forward to it"
            },
            {
                userId: createdUsers[1]._id,
                serviceId: createdServices[1]._id,
                date: new Date(new Date().getTime() + 48 * 60 * 60 * 1000), // Day after tomorrow
                time: "02:00 PM",
                status: "completed",
                notes: "Great service"
            }
        ];

        await appointmentModel.create(appointments);
        console.log("testing appointments added");

    } catch (e) {
        console.log("failed to seed data", e);
    }
}

module.exports = { seedServices };