import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="bg-white py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 items-cente lg:grid-cols-2">
            <img
              src="../images/about-home.webp"
              alt="This is 2 people working together."
              className="rounded-xl shadow-md object-cover"
            />
            <div>
              <h2 className="title">About Our Company</h2>
              <p className="mb-6">
                Founded in 2025, we help businesses transform their ideas into
                reality through cutting-edge technology and expert consulting
                services. Our team of 50+ professionals delivers measureable
                results.
              </p>
              <ul className="flex mb-4">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </li>
                <li>
                  <p className="ml-3">10+ years combined industry experience</p>
                </li>
              </ul>
              <ul className="flex mb-4">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </li>
                <li>
                  <p className="ml-3">50+ successful projects delivered</p>
                </li>
              </ul>
              <ul className="flex mb-8">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </li>
                <li>
                  <p className="ml-3">
                    Client-focused approach with 24/7 support
                  </p>
                </li>
              </ul>
              <button className="btn btn--blue">Learn More About Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
