import React, { Component } from 'react';
import './styles.scss';

class Popup extends Component {
  render() {
    const { closePopup } = this.props;
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>Popup!</h1>
          <button type="button" onClick={closePopup}>
            close me
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
