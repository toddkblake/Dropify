import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../menus/dropdown';

class PlaylistForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: null,
      name: "",
      owner_id: this.props.owner_id
    }
  }

  componentDidMount () {
    if (this.props.playlist) {
      this.setState({ id: this.props.playlist.id });
    }
  }

  handleChange (e) {
    this.setState({ name: e.currentTarget.value, owner_id: this.props.owner_id });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.action(this.state);
    this.clearForm();
    this.props.clearModal();
  }

  clearForm () {
    this.setState({ name: "" })
  }

  render () {
    const formText = (this.props.formType === "new") ? "Create Playlist" : "Rename Playlist";
    const icon = (this.props.formType === "new") ? (<i className="fa fa-plus fa-5x"></i>) : (<i className="fa fa-pencil fa-5x"></i>);
    return (
      <Dropdown isOpen={ this.props.modalOpen === "playlist-form" }>
        <form id="playlist-form" onSubmit={ this.handleSubmit.bind(this) }>
          { icon }
          <input
            type="text"
            value={ this.state.name }
            placeholder="New Playlist"
            onChange={ this.handleChange.bind(this) }
          />
        <input type="submit" className="medium green" value={ formText }/>
        </form>
      </Dropdown>
    );
  }
}

export default PlaylistForm;
