import React from "react";


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Contact name" />
      <input type="tel" value={phone} pattern="^\+?7(\d{10})$" onChange={(e) => setPhone(e.target.value)} placeholder="Phone number format +7" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="submit" />
    </form>
  );
};
