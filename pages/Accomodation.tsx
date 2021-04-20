import { Carousel, Col, Row } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";
import CroppedImage from "./CroppedImage";
import Map from "./map";

export default function Accomodation() {
  const { height, width } = useWindowDimensions();
  return (
    <Row id="accomodation" style={{ minHeight: `${height}px` }} className="p-5">
      <Col
        xs={{ span: 12, order: 'last' }}
        lg={{ span: 6, order: 'first' }}
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
              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.630755381164!2d12.4696635!3d41.8894657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x366752f3f04c4022!2sBasilica%20of%20Our%20Lady%20in%20Trastevere!5e0!3m2!1sen!2sit!4v1618175655026!5m2!1sen!2sit"
              height={height}
              width={width}
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col
        xs={{ span: 12, order: 'first' }}
        lg={{ span: 6, order: 'last' }}
        className="d-flex align-items-center"
        style={{ minHeight: `400px` }}
      >
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>
              Per voi amici e parenti che venite da lontano abbiamo individuato le seguenti strutture per garantirvi un pernottamento nelle vicinanze della Chiesa.
            </p>
            <p>
              Sperando di aver fatto cosa gradita, vi ringraziamo per aver scelto di accompagnarci in questa giornata speciale nonostante la non semplice organizzazione.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer p-3 m-3">
            La suddivisione degli ospiti verrà comunicata prossimamente
          </figcaption>
        </figure>
      </Col>
    </Row>
  );
}
