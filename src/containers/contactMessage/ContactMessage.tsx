import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import { contactMessage } from "../../portfolio.js";
import Input from "../../components/forms/input/Input"; // Ensure Input can handle <textarea>
import emailjs from "@emailjs/browser";
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
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.disabled = disabled;
    }
  }, [disabled]);

  // Очистка формы после отправки
  const clearForm = () => {
    setFormData({});
    formRef.current?.reset();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setShowSuccess(false);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required.");
      
      // Автоматически скрываем ошибку через 10 секунд
      setTimeout(() => setError(""), 10000);
      
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
        setShowSuccess(true);
        clearForm(); 
      } else {
        setError("Failed to send message. Please try again.");
        
        setTimeout(() => setError(""), 10000);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setError("Failed to send message. Please try again later.");
      
      setTimeout(() => setError(""), 10000);
      clearForm();
    } finally {
      setDisabled(false);
      
      // Скрываем сообщение об успехе через 5 секунд
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  if (!contactMessage.display || contactMessage.emailjsUserID === "none" || contactMessage.serviceID === "none") {
    return null;
  }

  return (
    <div className="container">
      <MotionWrapper>
        <div className="section-two-components">
          <div className="section">
                <div className="heading-text-div">
                  <h1 className="text-second-title">Contact Message</h1>
                </div>
              <div className="form form-main">
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
                      style={{ height: "150px"}}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {error && <div className="fade alert alert-danger">{error}</div>}

                  {showSuccess && (
                    <div className="fade alert alert-success">
                      <div className="alert-heading">
                        Message sent successfully!
                      </div>
                    </div>
                  )}

                  <button ref={buttonRef} type="submit" className="btn">
                    {disabled ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
              </div>
            </div>
      </MotionWrapper>
    </div>
  );
};

export default ContactMessage;
