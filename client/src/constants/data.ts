import { SiInstagram, SiFacebook, SiX } from "@icons-pack/react-simple-icons";
export const services: { title: string; href: string; description: string }[] = [
  {
    title: "View All",
    href: "/services",
    description:
      "View All Services",
  },
  {
    title: "Service 1",
    href: "/services/service-1",
    description:
      "This is a dummy description"
  },
  {
    title: "Service 2",
    href: "/services/service-2",
    description:
      "This is a dummy description"
  },
  {
    title: "Service 3",
    href: "/services/service-3",
    description:
      "This is a dummy description"
  }
]


export const quickLinks: { title: string, href: string }[] = [
  {
    title: "About Us",
    href: "/about"
  },
  {
    title: "Contact",
    href: "/contact"
  },
  {
    title: "FAQ",
    href: "/faq"
  },
  {
    title: "Careers",
    href: "/careers"
  }
]


export const socialLinks: { title: string, href: string, icon: React.ComponentType }[] = [
  {
    title: "Instagram",
    href: "instagram.com",
    icon: SiInstagram
  },
  {
    title: "Facebook",
    href: "facebook.com",
    icon: SiFacebook
  },
  {
    title: "Twitter",
    href: "x.com",
    icon: SiX
  }
]

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00"
]