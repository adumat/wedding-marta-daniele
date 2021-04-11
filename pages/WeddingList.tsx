import { Row, Col } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";

export default function WeddingList() {
  const { height } = useWindowDimensions();
  return (
    <Row id="wedding-list" style={{ backgroundColor: 'brown' }}>
      <Col style={{ minHeight: height }}></Col>
    </Row>
  );
}
