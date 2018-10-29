/* 将tr内容提取过来进行抽象
 <tr>
        <td>2018--01-09</td>
        <td>收入</td>
        <td>20</td>
</tr>
              
*/
import React, { Component } from "react";
class Record extends Component {
  render() {
    return (
      // <tr>
      //     <td>2018--01-09</td>
      //     <td>收入</td>
      //     <td>20</td>
      // </tr>
      //  <tr>
      //     <td>{this.props.record.date}</td>
      //     <td>{this.props.record.title}</td>
      //     <td>{this.props.record.amount}</td>
      // </tr>
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td>{this.props.amount}</td>
      </tr>
    );
  }
}

export default Record;
