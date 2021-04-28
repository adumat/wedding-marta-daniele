import { Row, Col, Image } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";

export default function WeddingList() {
  const { height } = useWindowDimensions();
  return (
    <Row id="wedding-list" style={{ minHeight: `${height}px` }} className="p-5">
      <Col
        xs={{ span: 12, order: 'first' }}
        lg={{ span: 12, order: 'first' }}
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: `400px` }}
      >
        <p className="display-6">Non abbiamo una lista nozze ma tanti sogni nel cassetto:</p>
        <p className="display-6">IT74X0306905066100000004662</p>
        <div className="d-flex flex-row align-items-center justify-content-between p-5 w-100">
          <Image src="house-with-heart.svg" className="m-3" style={{ height: '150px' }}/>
          <Image src="world-plane.png" className="m-3" style={{ height: '150px' }}/>
        </div>
      </Col>
    </Row>
  );
}
