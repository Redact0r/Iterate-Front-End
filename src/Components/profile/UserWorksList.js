import React, { Component } from "react";
import IterateApi from "../fetch/IterateApi";
import UserWorks from "./UserWorks";

class UserWorksList extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    IterateApi.get().then((data) => {
      this.setState({
        works: data,
      });
    });
  }

  handleDelete(e) {
    let id = e.target.id.slice(8, e.target.id.length);
    IterateApi.delete(id);
  }

  handleEdit(e) {
    let id = e.target.id.slice(9, e.target.id.length);
    console.log(id);
  }

  render() {
    return (
      <div className="div-myworks">
        <h3>My Works</h3>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Word Count</th>
            </tr>
          </thead>
          <tbody className="tbl-body">
            {this.state.works.map((work) => (
              <UserWorks
                key={work.id}
                id={work.id}
                title={work.title}
                content={work.content}
                wordCount={work.wordCount}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserWorksList;
