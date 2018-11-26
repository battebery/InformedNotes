import React, { Component, Fragment } from "react";
import {
  Form,
  Text,
  Checkbox,
  Select,
  Option,
  RadioGroup,
  Radio
} from "informed";

export default class InformedNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["firstnote", "firstnote", "firstnote", "firstnote"]
    };
  }

  handleSubmit(formState) {
    console.log(formState.informedNote);
    const newNote = formState.informedNote;
    console.log(newNote);
    let newNotes = [...this.state.notes];
    console.log(newNotes);
    newNotes.push(newNote);
    console.log(newNotes);
    this.setState({ notes: newNotes });
  }
  renderNotes = () => {
    const notes = this.state.notes.map(note => {
      return <p>{note}</p>;
    });
    return notes;
  };

  render() {
    const FormContent = ({ formState }) => (
      <div className="form">
        <div>
          <Text field="informedNote" id="informedNote" />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </div>
    );
    return (
      <div>
        <div>
          <p>Notes: </p>
          <div>hello</div>
          {this.renderNotes()}
        </div>
        <Form
          id="informedNotes"
          // onChange={formState => console.log(formState)}
          onSubmit={formState => this.handleSubmit(formState)}
          component={FormContent}
        />
      </div>
    );
  }
}
