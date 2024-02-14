import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import { doctorData } from "../helper/data";
import AddModal from "./AddModal";

const Doctors = () => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true);
    setDrName(name);
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>

      <Row>
        {doctorData.map(({ id, img, dep, name }) => (
          <Col key={id}>
            <img
              src={img}
              alt={name}
              className="img-thumbnail doctor-img  "
              onClick={() => handleShow(name)}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal show={show} handleClose={handleClose} drName={drName} />
    </Container>
  );
};

export default Doctors;
