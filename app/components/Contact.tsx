"use client";

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-[20px] font-[550] text-white mb-3 tracking-[-0.01em]">
        Get in Touch
      </h2>
      <p className="text-[13.5px] leading-[1.8] text-gray-300">
        I&apos;m currently available for new opportunities. Reach out at{" "}
        <a
          href="mailto:akshatsing11@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:underline"
        >
          akshatsing11@gmail.com
        </a>{" "}
        and I&apos;ll get back soon.
      </p>
    </section>
  );
};

export default Contact;
