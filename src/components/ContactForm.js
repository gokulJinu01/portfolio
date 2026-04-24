import React, { useRef, useState } from "react";
import "../styles/ContactForm.css";
import SecHead from "./SecHead";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [state, setState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (k) => (e) => setState((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = "service_aswwbfn";
    const templateId = "template_gwe0iwh";
    const publicKey = "nA45RNzSyaNMH7WjZ";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus("sent");
        setTimeout(() => {
          setStatus("idle");
          setState({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  const btnLabel =
    status === "sending" ? "SENDING…" :
    status === "sent" ? "SENT ✓" :
    status === "error" ? "RETRY →" :
    "SEND MESSAGE →";

  return (
    <section id="contact" className="sec3d contact3d">
      <SecHead num="04" title="CONTACT" kicker="Let's talk" />

      <div className="contact3d-grid">
        <div className="contact3d-info">
          <div className="contact3d-huge">
            Got something to<br /> build? <span className="ct-face">^-_-^</span>
          </div>
          <ul className="contact3d-list">
            <li>
              <span className="mono">EMAIL /</span>{" "}
              <a href="mailto:gokuljinu12@gmail.com">gokuljinu12@gmail.com</a>
            </li>
            <li>
              <span className="mono">CITY /</span> Toronto, Canada
            </li>
            <li>
              <span className="mono">GITHUB /</span>{" "}
              <a href="https://github.com/gokulJinu01" target="_blank" rel="noreferrer">@gokulJinu01</a>
            </li>
            <li>
              <span className="mono">LINKEDIN /</span>{" "}
              <a href="https://www.linkedin.com/in/gokul-jinu-627695223/" target="_blank" rel="noreferrer">gokul-jinu</a>
            </li>
          </ul>
        </div>

        <form className="contact3d-form" ref={formRef} onSubmit={submit}>
          <label className="ct-field">
            <span className="mono">YOUR NAME</span>
            <input
              name="name"
              value={state.name}
              onChange={onChange("name")}
              required
              placeholder="e.g. Ada Lovelace"
            />
          </label>
          <label className="ct-field">
            <span className="mono">EMAIL</span>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={onChange("email")}
              required
              placeholder="you@domain.com"
            />
          </label>
          <label className="ct-field">
            <span className="mono">SUBJECT</span>
            <input
              name="subject"
              value={state.subject}
              onChange={onChange("subject")}
              placeholder="What's this about?"
            />
          </label>
          <label className="ct-field">
            <span className="mono">MESSAGE</span>
            <textarea
              rows={5}
              name="message"
              value={state.message}
              onChange={onChange("message")}
              required
              placeholder="Tell me about the project…"
            />
          </label>

          <button className="btn3d btn3d-primary btn3d-lg" type="submit" disabled={status === "sending"}>
            <span className="btn3d-face">{btnLabel}</span>
            <span className="btn3d-side" />
          </button>

          {status === "error" && (
            <p className="ct-error mono">
              Send failed. Try again or email me directly at gokuljinu12@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
