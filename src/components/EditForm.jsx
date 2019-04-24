import React, { Component } from "react";

export default class EditForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="col-3">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title..."
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Genre..."
            />
          </div>
          <div className="form-group">
            <div className="form-row">
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Rate..."
                  min="0"
                />
              </div>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Stock..."
                  min="0"
                />
              </div>
            </div>
          </div>
          <div className="btn-group d-flex">
            <button className="btn btn-outline-secondary">Cancel</button>
            <button className="btn btn-outline-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
