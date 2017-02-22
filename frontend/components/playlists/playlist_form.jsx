import React from 'react';

class PlaylistForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange (e) {
    this.setState({ name: e.currentTarget.value, owner_id: this.props.owner_id });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.action(this.state);
    this.clearForm();
    this.props.hideForm();
  }

  clearForm () {
    this.setState({ name: "" })
  }

  render () {
    const formText = (this.props.formType === "new") ? "Create Playlist" : "Rename Playlist";
    const name = (this.props.hidden) ? "hidden" : "visible";
    const icon = (this.props.formType === "new") ? (<i className="fa fa-plus fa-5x"></i>) : (<i class="fa fa-pencil fa-5x"></i>);
    debugger
    return (
      <form id="playlist-form" className={ name } onSubmit={ this.handleSubmit.bind(this) } >
        { icon }
        <input
          type="text"
          value={ this.state.name }
          placeholder="New Playlist"
          onChange={ this.handleChange.bind(this) }
        />
        <input type="submit" className="medium green" value="Create Playlist"/>
      </form>
    );
  }
}

export default PlaylistForm;
