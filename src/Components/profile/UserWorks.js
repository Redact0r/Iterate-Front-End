import React from "react";

const UserWorks = (props) => {
  return (
    <tr key={props.id}>
      <td>{props.title}</td>
      <td>{props.content}</td>
      <td>{props.wordCount}</td>
      <input
        type="button"
        id={`edit-btn-${props.id}`}
        className="btn edit-btn"
        value="Edit"
        onClick={props.handleEdit}
      />
      <input
        type="button"
        id={`btn-del-${props.id}`}
        className="btn edit-btn"
        value="Delete"
        onClick={props.handleDelete}
      />
    </tr>
  );
};

export default UserWorks;
