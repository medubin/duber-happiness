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

    closeModal() {
        this.props.closeModal(); 
    }


    render() {
        if (!this.props.displayModal) {
            return null
        }

        return (
            <div className="modal-background" onClick={this.closeModal}>
                {/* <div className="modal-close" onClick={this.closeModal}>X</div> */}
                <div className='modal-content'>
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