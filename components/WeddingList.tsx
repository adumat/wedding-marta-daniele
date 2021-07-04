import { Row, Col, Image } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";

export default function WeddingList() {
  const { height } = useWindowDimensions();
  return (
    <Row id="wedding-list" style={{ minHeight: `${height}px` }} className="">
      <Col
        xs={{ span: 12, order: 'first' }}
        lg={{ span: 12, order: 'first' }}
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: `400px` }}
      >
        <div className="p-5 text-center">
          <p className="fs-2">Non abbiamo una lista nozze ma tanti sogni nel cassetto:</p>
          <p className="fs-3 text-break">IT74X0306905066100000004662</p>
        </div>
        <div className="d-flex flex-wrap flex-row align-items-center justify-content-around align-content-around w-100">
          <Image src="house-with-heart.svg" style={{ height: '150px' }}/>
          <Image src="love_beach_sunset.jpeg" className="shadow rounded" style={{ height: '150px' }}/>
          <Image src="world-plane.png" style={{ height: '150px' }}/>
        </div>
      </Col>
    </Row>
  );
}
