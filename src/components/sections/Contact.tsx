import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>

        <h3 className="text-xl font-bold mb-4">
          Feel free to connect with me through the following platforms:
        </h3>

        <div className="flex space-x-6 justify-center">
          <a
            href="mailto:hershrudrawal@gmail.com"
            className="text-primary hover:text-black text-6xl"
            aria-label="Email"
            title="hershrudrawal@gmail.com"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/hersh-rudrawal-7a02912b4"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800 text-6xl"
            aria-label="LinkedIn"
            title="https://www.linkedin.com/in/hersh-rudrawal-7a02912b4"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HershR"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-black text-6xl"
            aria-label="GitHub"
            title="https://github.com/HershR"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
