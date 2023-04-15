import React, { Component } from "react";
class AddList extends Component {
  state = { id: "", text: "", date: "", done: "", tablebody: this.props.list };
  handleSubmit = (e) => {
    e.preventDefault();
    let { text, tablebody } = this.state;
    tablebody.push(text);
    this.setState({ tablebody });

    console.log("list created.", tablebody);
  };
  handleInput = (e) => {
    e.preventDefault();
    let tablebody = [...this.state.text];
    tablebody.text = e.target.value;
    this.setState({ tablebody });
  };
  render() {
    return (
      <section className="container-fluid pt-5">
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
                          onChange={this.handleInput}
                          value={this.state.text}
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
      </section>
    );
  }
}

export default AddList;
