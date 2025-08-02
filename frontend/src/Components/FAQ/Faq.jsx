import React from "react";

const Faq = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white m-50">
      <div className="w-[600px] space-y-4">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center space-y-4">
          <span className="flex items-center gap-2 rounded-full border border-[#00B8A9] px-5 py-1 text-sm font-medium text-[#00B8A9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#00B8A9"
              strokeWidth="2"
            >
              <path d="M12 17h.01M12 11v2m0 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
            </svg>
            Frequently Asked Questions
          </span>
          <h1 className="mx-auto text-center text-4xl font-bold text-[#0F3554]">
            FAQ
          </h1>
          <div className="h-1 w-10 bg-[#00B8A9] rounded-full"></div>
        </div>

        {/* FAQ Items */}
        {[
          {
            question: "What is SarangXanh?",
            answer:
              "SarangXanh is a project dedicated to reducing microplastic pollution by promoting eco-friendly products and raising awareness about ocean conservation.",
          },
          {
            question: "What is SarangXanh?",
            answer:
              "SarangXanh is a project dedicated to reducing microplastic pollution by promoting eco-friendly products and raising awareness about ocean conservation.",
          },
          {
            question: "What is SarangXanh?",
            answer:
              "SarangXanh is a project dedicated to reducing microplastic pollution by promoting eco-friendly products and raising awareness about ocean conservation.",
          },
          {
            question: "What is SarangXanh?",
            answer:
              "SarangXanh is a project dedicated to reducing microplastic pollution by promoting eco-friendly products and raising awareness about ocean conservation.",
          },
          {
            question: "How can I keep my passwords secure?",
            answer:
              "Use strong, unique passwords for each account. A password manager can help store them safely. Enable two-factor authentication for extra protection.",
          },
          {
            question: "What should I do if I suspect a security breach?",
            answer:
              "Disconnect affected devices from the network immediately. Change your passwords and notify your IT or security team. Monitor accounts and activity for unusual behavior.",
          },
          {
            question: "Why is regular software updating important",
            answer:
              "Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-md border border-[#B3F0EC] bg-white text-[#0F3554]"
          >
            <button className="peer flex w-full justify-between p-5">
              <h2 className="font-semibold">{item.question}</h2>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#00B8A9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <p className="max-h-0 translate-y-4 transform px-4 text-[#0F3554] opacity-0 transition-all duration-400 ease-in-out peer-focus:max-h-[90px] peer-focus:translate-y-0 peer-focus:pb-4 peer-focus:opacity-100">
              {item.answer}
            </p>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm font-light text-[#0F3554]">
            Still have questions? Email us at{" "}
            <span className="text-[#00B8A9]">sarangxanh@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
