import {
  FaCartPlus,
  FaFacebook,
  FaLinkedin,
  FaTasks,
  FaTwitter,
} from "react-icons/fa";
import { FiHome, FiSettings } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import {
//   FiShoppingBag,
//   FiEdit,
//   FiPieChart,
//   FiBarChart,
//   FiCreditCard,
//   FiStar,
//   FiShoppingCart,
// } from "react-icons/fi";

import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
// import { MdOutlineSupervisorAccount } from "react-icons/md";
// import { HiOutlineRefresh } from "react-icons/hi";
// import { TiTick } from "react-icons/ti";
// import { GiLouvrePyramid } from "react-icons/gi";
// import { GrLocation } from "react-icons/gr";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/sessions",
    text: "Book Private Session",
  },

  {
    id: 3,
    url: "/about",
    text: "About",
  },
  {
    id: 4,
    url: "/services",
    text: "Our Services & Price",
  },
  {
    id: 5,
    url: "/broker",
    text: "Recommended Broker",
  },
  {
    id: 6,
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    id: 7,
    url: "/contact",
    text: "Contact Us",
  },
  {
    id: 8,
    url: "/faq",
    text: "FAQs",
  },
];

export const sliders = [
  {
    id: 1,
    image: "/img/phoenix_carousel_img.jpg",

    title: "Speed Your Trading Journey with our Unique Trading System",
    para: "Find out About our Trading Program by enquiring now",
  },
  {
    id: 2,
    image: "/img/bg_phoenix_two.jpg",

    title: "Start Your Trading Journey Here",
    para: "Passion | Patience | Persistence | Profit",
  },
];

export const services = [
  {
    id: 1,
    image: "/img/img-mentor.jpg",

    header: "Experienced Mentors",
    para: "Our team has over 3 years of combined experience within the industry",
  },
  {
    id: 2,
    image: "/img/img-book.jpg",

    header: "Online Course Delivered Worldwide",
    para: "In this online course, you will learn how to accurately analyse market structure, price action, and potential movements to profit from the markets utilising our trading strategy.",
  },
  {
    id: 3,
    image: "/img/img-cert.jpg",

    header: "Get Certified",
    para: "Upon completion of the Training, You will undergo an assessment by our top analyst and a certificate will be issued",
  },
];

export const products = [
  {
    id: 1,
    image: "/img/phoenix_bible.jpg",

    header: "Phoenix Trading Bible",
    para: "Phoenix Trading Bible is focused on Risk Management, Trade Management, One of our Stragies, and many more. This is a short manuual for you if you are looking to improve your trading skills.",
  },
  {
    id: 2,
    image: "/img/phoenix_course.jpg",

    header: "Phoenix Full Course",
    para: "In this online course, you will learn how to accurately analyse market structure, price action, and potential movements to profit from the markets utilizing our trading strategy.",
  },
  {
    id: 3,
    image: "/img/img-phone.jpg",

    header: "Phoenix Community",
    para: "A community of knowledge is key to success in the Forex market.",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
];

export const questions = [
  {
    id: 1,
    title:
      "Who is the full course for? I know nothing about Forex, Can i enroll?",
    info: "Our course is a full course is for everyone, both beginner and advanced level. The course teaches you how to trade the Forex market from beginner level to advanced level without any prior knowledge. With the course, you will learn everything you need to know about Forex and how to trade it profitably. ",
  },
  {
    id: 2,
    title:
      "How long will it take me to complete the course and become confident in taking my own trades?",
    info: "We all have different learning process. It took some of our students two weeks, some a month, some a bit over 2 months. Your learning process depends on the effort and time you put in. Our course is broken down so easily to help you learn very fast.",
  },
  {
    id: 3,
    title:
      "How much is the course and how do i pay for the course or any of your service?",
    info: "The full course is $500 and you can pay directly on the website by clicking our services and prices on the menu list using your credit card. You can also buy using bitcoin Alternatively, If you are in Africa, you can pay using local transfer Please send a DM to @phoenixcapital._ or @onyeka._  on instagram for details.",
  },
  {
    id: 4,
    title: "How long duration is the course for?",
    info: "The course is an online course with video and written content so you will be provided your login details to access the course content. You will have lifetime access to the course with regular updates.",
  },
  {
    id: 5,
    title: "Do you accept installments and do you offer discounts?",
    info: "We’re very sorry we don’t take installmental payment many don’t end up paying completely",
  },
];

export const booksession = [
  {
    id: 1,
    img: "/img/img-mentor.jpg",
    title: "Phoenix Private session",
    hour: "1 hr",
    price: "$50",
  },
  {
    id: 2,
    img: "/img/phoenix_cert2.jpeg",
    title: "Phoenix Assessment (students only)",
    hour: "1 hr",
    price: "$53",
  },
  {
    id: 1,
    img: "/img/phoenix_course.jpg",
    title: "Phoenix Private session",
    hour: "2 hr",
    price: "$110",
  },
];

export const servicesSession = [
  {
    id: 1,
    title: "Signal Group Premium",
    price: "60",
    duration: "Every month",
    description: "Support Your Analysis With Our Premium Channels",
  },
  {
    id: 2,
    title: "Signal Group Premium/Yr",
    price: "600",
    duration: "Every year",
    description: "10% OFF",
  },
  {
    id: 3,
    title: "Mentorship",
    price: "200",
    duration: "",
    description: "40% OFF",
  },
  {
    id: 4,
    title: "One on One Course",
    price: "500",
    duration: "",
    description: "With The Fx Professor",
  },
  {
    id: 5,
    title: "Trading Bible",
    price: "99",
    duration: "",
    description: "Phoenixfx Trading Bible",
  },
];

export const testimonialSession = [
  {
    id: 1,
    name: "Signal Group Premium",
    link: "https://www.youtube.com/embed/_M3KsUB8SY0?autoplay=1",
    description: "Support Your Analysis With Our Premium Channels",
  },
  {
    id: 2,
    name: "Signal Group Premium",
    link: "https://www.youtube.com/embed/wAH8CoKJG0o?autoplay=1",
    description: "Support Your Analysis With Our Premium Channels",
  },
  {
    id: 3,
    name: "Mentorship",
    link: "https://www.youtube.com/embed/kwoZcWX2Q0A?autoplay=1",
    description: "40% OFF",
  },
  {
    id: 4,
    name: "One on One Course",
    link: "https://www.youtube.com/embed/iFytRizSsmU?autoplay=1",
    description: "With The Fx Professor",
  },
];

export const userProfileData = [
  {
    icon: <MdAccountCircle />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <FaCartPlus />,
    title: "Cart",
    desc: "Orders",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FaTasks />,
    title: "Products",
    desc: "Go to your products ",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const dashboardLinks = [
  {
    title: "Dashboard",
    links: [
      {
        name: "home",
        icon: <FiHome />,
        url: "dashboard",
      },
    ],
  },

  {
    title: "Accounts",
    links: [
      {
        name: "Services",
        icon: <AiOutlineShoppingCart />,
        url: "dashboard/services",
      },
      {
        name: "Sessions",
        icon: <IoMdContacts />,
        url: "dashboard/sessions",
      },
      {
        name: "Students",
        icon: <RiContactsLine />,
        url: "dashboard/students",
      },
      {
        name: "Settings",
        icon: <FiSettings />,
        url: "dashboard/settings",
      },
    ],
  },
];
