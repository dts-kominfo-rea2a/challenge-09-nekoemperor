// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (contact) => {
  return (
    <div className="row" key={contact.data.name}>
      <div className="box-contact">
        <img className="img" src={contact.data.photo} />
        <div className="box-description">
          <h3 className="name">{contact.data.name}</h3>
          <h3 className="phone">{contact.data.phone}</h3>
          <h3 className="email">{contact.data.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
