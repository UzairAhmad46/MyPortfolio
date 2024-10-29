import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <h1>CONTACT US</h1>

        <form>
          <input type="text" placeholder="FUll Name" required />
          <input type="email" placeholder="Enter your email" required />
          <textarea placeholder="Write Here........." name="massage"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
