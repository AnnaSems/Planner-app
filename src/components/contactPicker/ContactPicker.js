import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option key={'default'} value={""} selected="selected">No contact selected</option>
      {
        contacts.map((contact) => {
          return (
            <option value={contact} key={contact}>{contact}</option>
          )
        }
        )
      }
    </select>
  );
}
