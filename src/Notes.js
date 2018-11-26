import React, { Component } from "react";
import moment from "moment";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      notes: [{ dateTime: "11/12/13", note: "note" }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate;

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newNote = { date: moment().format(), note: this.state.value };
    const newNotes = [...this.state.notes].push(newNote);
    console.log(newNote);
    console.log(newNotes);

    this.setState({ notes: newNotes, value: "" });
  }

  renderNotes = () => {
    console.log(this.state.notes);
    this.state.notes.map(note => {
      return (
        <ul>
          <li>date :: note</li>
          <li>
            {note.dateTime} :: {note.note}
          </li>
        </ul>
      );
    });
  };

  render() {
    return (
      <div className="notes-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            NewNote:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        <div className="notes-display-box">
          Notes:
          {this.renderNotes()}
        </div>
      </div>
    );
  }
}
