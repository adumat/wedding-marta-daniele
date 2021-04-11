import { Col, Row } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";

export function Accomodation() {
  const { height } = useWindowDimensions();
  return (
    <Row id="accomodation" style={{ backgroundColor: 'green' }}>
      <Col style={{ minHeight: height }}></Col>
    </Row>
  );
}
