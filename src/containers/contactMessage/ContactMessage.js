import React, { useState, useEffect, useRef } from "react";
import { contactMessage } from "../../portfolio.js";
import Input from "../../components/forms/input/Input.js";
import emailjs from "@emailjs/browser";
import ContactImg from "./ContactImg";
import "./ContactMessage.css";

const ContactMessage = ({ theme }) => { // Destructure theme directly from props
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(""); // State for error messages
  const buttonRef = useRef();
  const alertRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    buttonRef.current.disabled = disabled; // Simplified condition
  }, [disabled]);

  const toggleAlert = () => alertRef.current.classList.toggle("show");

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value directly
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Use functional state update
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error on submit
    if (formData.name && formData.email && formData.subject && formData.message) {
      setDisabled(true);
      try {
        const response = await emailjs.send(
          contactMessage.serviceID,
          contactMessage.templateID,
          formData,
          contactMessage.emailjsUserID
        );
        if (response.text === "OK") {
          toggleAlert();
          formRef.current.reset(); // Reset form only on success
        }
      } catch (error) {
        console.log(error);
        setError("Failed to send message. Please try again later."); // Set error message
      } finally {
        setDisabled(false);
        setTimeout(() => {
          toggleAlert();
        }, 5000);
      }
    } else {
      setError("All fields are required."); // Set error if fields are missing
    }
  };

  if (
    !contactMessage.display ||
    contactMessage.emailjsUserID === "none" ||
    contactMessage.serviceID === "none"
  ) {
    return null;
  }

  return (
      <div className="container">
        <div className="cont-image">
          <ContactImg theme={theme} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-1">
              <h1>
                <i
                  className="far fa-dot-circle fs-3"
                  style={{ color: theme.imageHighlight }}
                ></i>{" "}
                <span style={{ color: theme.text }}>Contact Message</span>
              </h1>
            </div>
            <div className="col-md-12 mb-3 px-5 pt-4">
              <form
                onSubmit={handleSubmit}
                className="form-inline justify-content-center"
                ref={formRef}
                id="cont-form"
              >
                <div className="row mb-1">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    height="60px"
                    onChange={handleChange}
                    required // Add required attribute for accessibility
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    height="60px"
                    onChange={handleChange}
                    required // Add required attribute for accessibility
                  />
                  <Input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    height="60px"
                    onChange={handleChange}
                    required // Add required attribute for accessibility
                  />
                  <Input
                    name="message"
                    type="text"
                    placeholder="Message"
                    height="100px"
                    onChange={handleChange}
                    required // Add required attribute for accessibility
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>} {/* Display error messages */}
                <button
                  ref={buttonRef}
                  type="submit"
                  className="btn btn-primary"
                >
                  {disabled ? "Sending..." : "Send Message"} {/* Loading state */}
                </button>
              </form>
              <div className="fade alert alert-success" ref={alertRef}>
                <div className="alert-heading">
                  Your message has been sent successfully!
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ContactMessage;
