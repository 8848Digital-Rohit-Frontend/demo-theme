import { Button, Form, Modal } from 'react-bootstrap';
import useReplaceOrder from '../../hooks/OrderListHooks/useReplaceOrder';

function ReplacementModal({ showReplacementModal, handleCloseReplacementModal, orderId, productId }: any) {
  const { formValues, handleChange, handleSubmit, handleImageChange, emptyFields }: any = useReplaceOrder();

  return (
    <Modal show={showReplacementModal} onHide={handleCloseReplacementModal}>
      <Modal.Header closeButton>
        <Modal.Title>Replacement Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="reason">
            <Form.Label>
              Reason for replacement<span className="mandatoryField">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              as={'textarea'}
              isInvalid={emptyFields?.reason === ''}
              placeholder="Reason for replacement"
              name="reason"
              onChange={handleChange}
              value={formValues?.reason}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="qty">
            <Form.Label>
              Quantity<span className="mandatoryField">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              isInvalid={emptyFields?.qty === ''}
              placeholder="Enter the quantity"
              name="qty"
              value={formValues?.qty}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Add Images</Form.Label>
            <Form.Control type="file" multiple onChange={handleImageChange} />
          </Form.Group>
        </Form>
        <Button onClick={() => handleSubmit(orderId, productId)}>Submit</Button>
      </Modal.Body>
    </Modal>
  );
}

export default ReplacementModal;
