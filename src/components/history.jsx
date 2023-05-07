import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
class History extends Component {
  state = { status: "online", datas: [{}] };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({ datas: data });
      // console.log("result: ", data);
      localStorage.setItem("datas", JSON.stringify(data));
    } catch (ex) {
      toast.danger("error", ex.error.message);
      // toast.danger((this.state.status = "Offline"));
      const collection = localStorage.getItem("data");
      const data = JSON.parse(collection);
      this.setState({ datas: data });
      console.log("collection", data);
    }
  }

  render() {
    return (
      <div className="container-fluid pt-5" id="history">
        <div className="container mt-5">
          <ToastContainer />
          <div className="row">
            <h1>This is History page.</h1>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">title</th>
                  <th scope="col">body</th>
                </tr>
              </thead>
              <tbody>
                {this.state.datas.map((data) => (
                  <tr key={data}>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
