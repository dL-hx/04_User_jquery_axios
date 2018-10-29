import React, { Component } from "react";
import Record from "./Record";
// 1.使用axios库
import axios from "axios";

class Records extends Component {
  constructor() {
    super();
    /* 将数据放到构造函数中 */
    this.state = {
      error: null,
      isLoaded: false,
      records: []
      // records: [
      //   { "id": 1, "date": "2018-01-09", "title": "收入", "amount": 20 },
      //   { "id": 2, "date": "2018-01-03", "title": "录视频收入", "amount": 199 },
      //   { "id": 3, "date": "2018-01-03", "title": "录视频收入", "amount": 199 },
      // ]
    };
  }

  //生命周期
  //作用: 组件加载完成 后发起一个请求,得到一些数据
  componentDidMount() {
    axios
      .get("https://5bd5b2e79325280013d28897.mockapi.io/api/v1/records")
      .then(response =>
        this.setState({
          records: response.data,
          isLoaded: true
        })
      )
      .catch(error =>
        this.setState({
          isLoaded: true,
          error
        })
      );
  }
  render() {
    //将值取出来
    const { error, isLoaded, records } = this.state;
    /*     //相当于这样写法
        const error = this.state.error;
        const isLoaded = this.state.isLoaded;
        const records = this.state.records; */

    //如果error 存在return   div    Error  显示error 的值
    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>Records</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* 
                {...record} 扩展写法相当于
                {id:record.id}  {date:record.date} {title:record.title}     ....
                */}
              {/* {this.state.records.map((record) => <Record key={record.id} record={record} />)} */}
              {records.map(record => <Record key={record.id} {...record} />)}
              {/* <Record  /> */}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
export default Records;
