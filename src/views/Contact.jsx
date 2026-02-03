import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-fit xl:h-screen w-full bg-bgprim flex justify-center items-center p-4 selection:bg-primary selection:text-bgprim"
    >
      <div className="flex flex-col items-center text-center max-w-[600px]">
        
        <h2 className="text-primary/40 text-3xl pb-6">
          Connect with me on LinkedIn
        </h2>

        <p className="text-primary mb-8">
          I’m always open to collaborations, internships, and interesting conversations.
        </p>

        <a
          href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-primary text-primary px-6 py-3 hover:bg-black transition duration-300"
        >
          Visit my LinkedIn
        </a>

      </div>
    </div>
  );
};

export default Contact;
