import { Row, Col } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";
import Map from "./map";

export default function Party() {
  const { height, width } = useWindowDimensions();
  return (
    <Row id="party">
      <Col className="text-center position-relative" style={{ minHeight: height }}>
        <p className="display-5">Villa Piccolomini</p>
        <div className="position-absolute bottom-0 start-50 translate-middle-x p-5">
          <p className="blockquote-footer">
            Ampio parcheggio all’interno della struttura
          </p>
        </div>
      </Col>
      <Col style={{ minHeight: height }}>
        <Map
          url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.696536706822!2d12.4475092!3d41.889112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2ff88891fbccbaa!2sVilla%20Piccolomini!5e0!3m2!1sen!2sit!4v1618520887635!5m2!1sen!2sit"
          height={height}
          width={width}
        />
      </Col>
    </Row>
  );
}
