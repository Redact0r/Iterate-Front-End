import React, { Component } from "react";

class Rewards extends Component {
  render() {
    let { streak } = this.props;

    if (streak == 1) {
      return (
        <div className="div-rewards">
          <h3>Congrats!</h3>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
export default Rewards;
