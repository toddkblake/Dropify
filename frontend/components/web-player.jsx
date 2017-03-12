import React from 'react';
import NavBar from './navbar/navbar_container';
import NowPlaying from './now_playing/now_playing_container';
import { connect } from 'react-redux';
import { clearModal } from '../actions/modal_actions';
import { clearSearchResults } from '../actions/search_actions';

class WebPlayer extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoggedIn) {
      this.props.router.push("/")
    }
  }

  render() {
    function handleModal() {
      if (this.props.modalOpen) {
        this.props.clearModal();
        this.props.clearSearchResults();
      }
    }

    const { children } = this.props;

    return (
      <div className="web-player" onClick={ handleModal.bind(this) }>
        <NavBar />
        <div id="main-content-container" className="now-playing-inactive">
          { children }
        </div>
        <NowPlaying />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
  isLoggedIn: !!state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearModal: () => dispatch(clearModal()),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(WebPlayer);
