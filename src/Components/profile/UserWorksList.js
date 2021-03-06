import React, { Component } from "react";
import UserWorks from "./UserWorks";
import UserContext from "../../Context/UserContext";

class UserWorksList extends Component {
  static contextType = UserContext;

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
            {this.context.works.length > 0 ? (
              this.context.works.map((work) => (
                <UserWorks
                  key={work.id}
                  id={work.id}
                  title={work.title}
                  content={work.content}
                  wordCount={work.wordcount}
                  handleDelete={this.context.handleDelete}
                  handleEdit={this.context.handleEdit}
                />
              ))
            ) : (
              <>"Awaiting user data..."</>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserWorksList;
