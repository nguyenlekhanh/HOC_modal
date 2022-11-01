import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BaseModalItem } from "./BaseModalItem.js";

import { withHigherOrderModal } from "./withHigherOrderModal.js";

const BaseModal = ({ item, closeModal, show }) => {
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title {item.id}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body {item.name}.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

const WrappedComponet = (props) => {
  return (
    <div>
      {props.data.map((item) => (
        <BaseModalItem key={item.id} item={item} {...props} />
      ))}
    </div>
  );
};
export default withHigherOrderModal(BaseModal)(WrappedComponet);
