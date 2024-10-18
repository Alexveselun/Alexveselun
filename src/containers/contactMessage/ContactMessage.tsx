import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import { contactMessage } from "../../portfolio.js";
import Input from "../../components/forms/input/Input"; // Ensure Input can handle <textarea>
import emailjs from "@emailjs/browser";
import ContactImg from "./ContactImg.js";
import "./ContactMessage.css";
import MotionWrapper from "components/layouts/animations/MotionWrapper";

interface FormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface Theme {
  text: string;
  secondaryText: string;
}

interface ContactMessageProps {
  theme: Theme;
}

const ContactMessage: React.FC<ContactMessageProps> = ({ theme }) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({});
  const [error, setError] = useState<string>("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.disabled = disabled;
    }
  }, [disabled]);

  const toggleAlert = () => alertRef.current?.classList.toggle("show");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setDisabled(true);
    try {
      const response = await emailjs.send(
        contactMessage.serviceID,
        contactMessage.templateID,
        formData as Record<string, unknown>,
        contactMessage.emailjsUserID
      );

      if (response.text === "OK") {
        toggleAlert();
        formRef.current?.reset();
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setError("Failed to send message. Please try again later.");
    } finally {
      setDisabled(false);
      setTimeout(() => {
        toggleAlert();
      }, 5000);
    }
  };

  if (!contactMessage.display || contactMessage.emailjsUserID === "none" || contactMessage.serviceID === "none") {
    return null;
  }

  return (
    <div className="container">
      <MotionWrapper>
        <div className="heading-div">
      <div className="section">
      <div className="form">
        <div className="column">
          <div className="heading-text-div">
            <h1 className="heading-text">Contact Message</h1>
          </div>
        </div>
        <div className="column main-form">
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="form">
              <Input
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                onChange={handleChange}
                required
              />
              <Input
                name="message"
                type="text"
                placeholder="Message"
                style={{ height: "150px", width: "90%", padding: "10px" }}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="fade alert alert-danger">{error}</div>}
          
          <div className="fade alert alert-success" ref={alertRef}>
            <div className="alert-heading">
              Please, write me the message. For now this form is disabled.
            </div>
          </div>
          <button ref={buttonRef} type="submit" className="btn btn-primary">
              {disabled ? "Sending..." : "Send Message"}
            </button>
          </form>

          </div>
        </div>
      </div>
      <div className="cont-image">
        <ContactImg theme={theme} />
      </div>
      </div>
      </MotionWrapper>
  </div>
  );
};

export default ContactMessage;
