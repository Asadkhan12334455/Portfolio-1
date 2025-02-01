import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      " I specialize in building modern, responsive, and high-performance websites using Next.js, Sanity CMS, and Tailwind CSS. With a focus on clean code and user-friendly interfaces, I create dynamic web solutions tailored to client needs.",
  },
  {
    title: "E-commerce Solutions",
    description:
      " I develop feature-rich e-commerce websites that provide a seamless shopping experience. From product management to secure payment integration, I ensure that online stores are optimized for performance, scalability, and user engagement.",
  },
  {
    title: "Hackathon Projects",
    description:
      " I actively participate in hackathons, developing innovative and efficient solutions that solve real-world problems. My expertise in web development allows me to create functional, fast, and scalable applications under tight deadlines.",
  },
];

const Services = () => {
  return (
    <section className="bg-black py-16" id="services">
      <h2 className="text-5xl font-bold text-center text-white mb-16">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#ba294d] text-white rounded-3xl p-12 transition-transform duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:text-[#ba294d] hover:scale-105 border border-transparent hover:border-[#ba294d]"
          >
            <h4 className="text-3xl font-semibold mb-4">{service.title}</h4>
            <p className="text-1xl font-light">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
