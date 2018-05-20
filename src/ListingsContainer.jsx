import React from 'react';
import Listing from './Listing';
import Modal from './Modal';



export default class ListingsContainer extends React.PureComponent {
    state = {openModal: false, selectionIndex: false};

    toggleModal = (event) => {
        const selectionIndex = event.target.dataset.index;
        this.setState({ openModal: !this.state.openModal, selectionIndex });
    };

    buildListing = (spot, index) => {
        return (<Listing key={spot.title} index={index} spot={spot} toggleModal={this.toggleModal}/>)
    };

    render() {
        const {search} = this.props;
        const {openModal, selectionIndex } = this.state;
        const modalDetails = search[selectionIndex];
        return (
            <div>
                {search.map((spot, index) => this.buildListing(spot, index))}
                <Modal isOpen={openModal} details={modalDetails}/>
            </div>
        );
    }
}