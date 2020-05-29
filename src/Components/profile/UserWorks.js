import React from "react";
import { Link } from "react-router-dom";

const UserWorks = (props) => {
  return (
    <tr key={props.id}>
      <td>{props.title}</td>
      <td width="100">{props.content}</td>
      <td>{props.wordCount}</td>
      <Link to="/write">
        <input
          type="button"
          id={`edit-btn-${props.id}`}
          className="btn edit-btn"
          value="Edit"
          onClick={(e) => {
            let title = props.title;
            let content = props.content;
            let wordcount = props.wordCount;
            return props.handleEdit(e, title, content, wordcount);
          }}
        />
      </Link>
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
