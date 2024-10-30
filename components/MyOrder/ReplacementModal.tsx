import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function ReplacementModal({ showReplacementModal, handleCloseReplacementModal }: any) {
  return (
    <Modal show={showReplacementModal} onHide={handleCloseReplacementModal}>
      <Modal.Header closeButton>
        <Modal.Title>Replacement Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="zip_code">
            <Form.Label>
              Reason for replacement<span className="mandatoryField">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              as={'textarea'}
              //   isInvalid={emptyAddressFields.includes('postal_code')}
              placeholder="Reason for replacement"
              name="postal_code"
              //   onChange={(e) => handleCreateAddressChange(e, address_type)}
            />
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
        </Form>
        <Button>Submit</Button>
        {/* <CreateAddressModalFields
          stateList={stateList}
          cityList={cityList}
          handleCreateAddressChange={handleCreateAddressChange}
          handlePostAddress={handlePostAddress}
          address_type={address_type}
          emptyAddressFields={emptyAddressFields}
        /> */}
      </Modal.Body>
    </Modal>
  );
}

export default ReplacementModal;
