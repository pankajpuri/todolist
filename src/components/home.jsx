import React, { Component } from "react";
import { toast } from "react-toastify";

//import AddList from "./addlist";

class Home extends Component {
  state = {
    bodyobj: { id: "", text: "", date: "", done: "" },
    list: [],
    tableheader: [
      { id: 1, h1: "lists" },
      { id: 2, h1: "Create On" },
      { id: 3, h1: "Done" },
    ],
    tablebody: [
      {
        id: 1,
        text: "Attend metting at 2:30pm on 12 April 2023",
        date: "07 April 2023",
        done: true,
      },
      {
        id: 2,
        text: "Go to gym at 12:30pm on 16 April 2023",
        date: "13 April 2023",
        done: false,
      },
      {
        id: 3,
        text: "Send Invoice to Mike on Tuesday by 8pm",
        date: "12 April 2023",
        done: false,
      },
    ],
    db: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const bodyobj = { ...this.state.bodyobj };
    let tablebody = [...this.state.tablebody];
    tablebody.push(bodyobj);
    this.setState({ tablebody });
    toast.info("list is added to the page.");
  };
  handleInput = ({ currentTarget: input }) => {
    let bodyobj = { ...this.state.bodyobj };
    let counter = 0;
    counter = this.state.tablebody.length + 1;
    bodyobj.id = counter;
    bodyobj.date = new Date().toLocaleDateString();
    bodyobj.done = counter % 2 === 0 ? true : false;
    bodyobj[input.name] = input.value;
    this.setState({ bodyobj });
  };
  handleCheckbox = (list) => {
    // console.log("tablebody", tablebody);
    const tablebody = [...this.state.tablebody];
    const index = tablebody.indexOf(list);
    tablebody[index] = { ...list };
    tablebody[index].done = !tablebody[index].done;
    this.setState({ tablebody });
  };
  getClasses = (done) => {
    const css = "fa fa-check-square-o";
    console.log("result", css``);
  };
  render() {
    const { tablebody, tableheader } = this.state;
    return (
      <React.Fragment>
        {/* <AddList list={tablebody}/> */}
        <section className="container-fluid pt-5" id="home">
          <div className="container mt-5">
            <h1>TodoList</h1>
            <div className="row text-center">
              <button
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add
              </button>
              {/* <!-- Modal --> */}

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ top: "300px" }}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Create List
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                          <input
                            type="text"
                            name="text"
                            onChange={this.handleInput}
                            value={tablebody.text}
                            placeholder="For eg: Buget for this week is $120"
                            className="form-control"
                            id="createlist"
                            aria-describedby="emailHelp"
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <table className="table table-hover table-striped">
                <thead className="">
                  <tr>
                    {tableheader.map((header) => (
                      <th key={header.id}>{header.h1}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {tablebody.map((list) => (
                    <tr key={list.id}>
                      <td>{list.text}</td>
                      <td>{list.date}</td>
                      <td>{list.done}</td>
                      <td>
                        <i
                          onClick={() => this.handleCheckbox(list)}
                          className={
                            list.done === true
                              ? "fa fa-check-square-o"
                              : "fa fa-square-o"
                          }
                          aria-hidden="true"
                          role="button"
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* <div className="conatiner-fluid pt-5">
          <div className="container mt-5">
            <div className="row">
              <TodoListDb />
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Home;
