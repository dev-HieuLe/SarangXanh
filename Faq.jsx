import React, { useState } from "react";
import Navbar from "./Navbar"; // Your existing navbar
import Footer from "./Footer"; // Your existing footer
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQPage.css"; // CSS file we'll define next

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Lorem",
      answer:
        "lorem"
    },
    {
      question: "lorem",
      answer:
        "lorem"
    },
    {
      question: "lorem",
      answer:
        "lorem"
    },
    {
      question: "lorem",
      answer:
        "lorem"
    }
  ];

  return (
    <div className="faq-page">
      <Navbar/>

      <header className="faq-header">
        <div className="faq-header-text">
          <h1>FAQs</h1>
          <p>
            have queson? quesnO/
          </p>
        </div>
        <img
          src="/faq-illustration.png"
          alt="FAQ illustration"
          className="faq-image"
        />
      </header>

      <main className="faq-main">
        <aside className="faq-sidebar">
          <p>About us</p>
          <p>Guest</p>
          <p>place holder</p>
          <p>placeholder</p>
          <p>placeholder</p>
          <p>placeholder</p>
        </aside>

        <section className="faq-content">
          <h2>About us</h2>
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleIndex(index)}
              >
                {item.question}
                {openIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>
              {openIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default FAQPage;