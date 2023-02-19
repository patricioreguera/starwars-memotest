import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Modal = ({ show, setShow }) => {
	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header
				closeButton
				className="d-flex  align-items-center"
			></Modal.Header>

			<Modal.Body className="modal-detail ">
				<div>
					<h1>GANASTE</h1>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={() => setShow(false)}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Modal;
