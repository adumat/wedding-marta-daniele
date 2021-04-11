import { Row, Col } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";

export default function Party() {
  const { height } = useWindowDimensions();
  return (
    <Row id="party" style={{ backgroundColor: 'yellow' }}>
      <Col style={{ minHeight: height }}></Col>
    </Row>
  );
}
