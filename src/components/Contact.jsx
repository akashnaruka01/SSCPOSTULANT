import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>contact us</h1>

        <form action="">
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Pleace enter your name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="temp0001@xyz.in" />
          </div>

          <div>
            <label>Message</label>
            <input type="text" required placeholder="Enter your query..." />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
