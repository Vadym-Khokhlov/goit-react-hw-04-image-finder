import React, { Component } from 'react';
import Modal from '../Modal';
import '../styles.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    return (
      <li key={this.props.id} className="ImageGalleryItem">
        <img
          src={this.props.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.props.largeImageURL} alt="" />
          </Modal>
        )}
      </li>
    );
  }
}
