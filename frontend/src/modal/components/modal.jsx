import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions'
import '../scss/modal.css'


const mapStateToProps = ({modal}) => ({
    modalContent: modal.modalContent,
    displayModal: modal.displayModal
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => (dispatch(closeModal))
});


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal(e) {
        this.props.closeModal(); 
    }


    render() {
        if (!this.props.displayModal) {
            return null
        }

        return (
            <div className="modal-background" onClick={(e) => this.closeModal(e)}>
                {/* <div className="modal-close" onClick={this.closeModal}>X</div> */}
                <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                    {this.props.modalContent}   
                </div>
            </div>
        )

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Modal);