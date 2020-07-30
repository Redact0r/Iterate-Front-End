import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

class UserWorks extends Component {
  static contextType = UserContext;
  render() {
    return (
      <tr key={this.props.id}>
        <td>{this.props.title}</td>
        <td>{this.props.content}</td>
        <td>{this.props.wordCount}</td>
        <td>
          <Link to="/write">
            <input
              type="button"
              id={`edit-btn-${this.props.id}`}
              className="btn edit-btn"
              value="Edit"
              onClick={(e) => {
                let title = this.props.title;
                let content = this.props.content;
                let wordcount = this.props.wordCount;
                return this.context.handleEdit(e, title, content, wordcount);
              }}
            />
          </Link>
        </td>
        <td>
          <input
            type="button"
            id={`btn-del-${this.props.id}`}
            className="btn edit-btn"
            value="Delete"
            onClick={(e) =>
              window.confirm("Delete this item?")
                ? this.context.handleDelete(e)
                : (e) => {
                    e.preventDefault();
                  }
            }
          />
        </td>
      </tr>
    );
  }
}

export default UserWorks;
