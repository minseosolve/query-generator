import React, { Component } from "react";
import UserForms from "./components/UserForms";
import QueryDisplay from "./components/QueryDisplay";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        table_name: "",
        start_time: "",
        end_time: "",
        select_fields: [],
        where_clause: [],
        current_select_fields: "",
        current_where_clause: ""
      }
    };
    this.handleSingleInputEdit = this.handleSingleInputEdit.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleSingleInputEdit(label, value) {
    this.setState(prevState => {
      prevState.formData[label] = value;
      return prevState;
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    this.setState(prevState => {
      const newSelectedField = prevState.formData.current_select_fields;
      prevState.formData.select_fields.push(newSelectedField);
      return prevState;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          Query Generator
        </header>
        <section className="container-fluid App__container">
          <div className="row">
            <div className="col-sm-6">
              <UserForms
                onSelectFieldsAdd={this.handleSelectFieldsAdd}
                onSingleInputEdit={this.handleSingleInputEdit}
                formData={this.state.formData}
                onFormSubmit={this.handleFormSubmit}
              />
            </div>
            <div className="col-sm-6">
              <QueryDisplay query={this.state.query} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
