import submitContactForm from "../action/submitContactForm";

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Form</h1>

      <form action={submitContactForm}>

        <div>
          <label>Name:</label>
==
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <br />

        <div>
          <label>Message:</label>

          <textarea
            name="message"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}