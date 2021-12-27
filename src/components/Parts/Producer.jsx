import { Form, Modal } from "react-bootstrap";

const Producer = (props) => {
  const valueHandler = (e) => {
    props.setInputValue({ [e.target.name]: e.target.value });
    props.showProducer();
  };
  return (
    <Modal show={props.showProducer} onHide={props.showProducer}>
      <Modal.Header closeButton>Gamintojai</Modal.Header>
      <Form>
        {props.producersList.map((p) => (
          <Form.Check
            key={p.id}
            type="checkbox"
            label={p.producer}
            value={p.producer}
            onChange={valueHandler}
            name={"producer_name"}
          />
        ))}
      </Form>
    </Modal>
  );
};

export default Producer;
