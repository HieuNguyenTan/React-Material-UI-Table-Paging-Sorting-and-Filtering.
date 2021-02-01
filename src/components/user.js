import React from "react";

const User = ({ user: { id, name, phone } }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default User;