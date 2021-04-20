import { Row, Col, Carousel } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";
import CroppedImage from "./CroppedImage";
import Map from "./map";

export default function Party() {
  const { height, width } = useWindowDimensions();
  return (
    <Row id="party" style={{ minHeight: `${height}px` }} className="p-5">
      <Col
        xs={{ span: 12, order: 'first' }}
        lg={{ span: 6, order: 'first' }}
        className="d-flex align-items-center"
        style={{ minHeight: `400px` }}
      >
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>Villa Piccolomini</p>
          </blockquote>
          <figcaption className="blockquote-footer p-3 m-3">
            Ampio parcheggio all’interno della struttura
          </figcaption>
        </figure>
      </Col>
      <Col
        xs={{ span: 12, order: 'last' }}
        lg={{ span: 6, order: 'last' }}
        className="align-self-center"
      >
        <Carousel
          controls={true}
          indicators={true}
        >
          <Carousel.Item>
            <CroppedImage
              url="church_1.jpg"
              height={height}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CroppedImage
              url="church_2.jpg"
              height={height}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CroppedImage
              url="church_3.jpg"
              height={height}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CroppedImage
              url="church_4.png"
              height={height}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Map
              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.696536706822!2d12.4475092!3d41.889112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2ff88891fbccbaa!2sVilla%20Piccolomini!5e0!3m2!1sen!2sit!4v1618520887635!5m2!1sen!2sit"
              height={height}
              width={width}
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}
