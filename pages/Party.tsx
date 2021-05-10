import { useState } from "react";
import { scroller } from 'react-scroll';
import { Row, Col, Carousel } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";
import CroppedImage from "./CroppedImage";
import Map from "./map";

export default function Party() {
  const { height, width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const goToMap = () => {
    setActiveIndex(4);
    scroller.scrollTo('party-images', {
      offset: -50
    });
  };
  const handleSelect = (selectedIndex: number, e: any) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <Row id="party" style={{ minHeight: `${height}px` }} className="">
      <Col
        xs={{ span: 12, order: 'first' }}
        lg={{ span: 6, order: 'first' }}
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: `400px` }}
      >
        <figure>
          <blockquote className="blockquote text-center">
            <p>A seguito della cerimonia, saremo felici di festeggiare insieme presso</p>
            <p className="fw-bolder fs-3">Villa Piccolomini</p>
            <p><a style={{ cursor: 'pointer' }} className="link-secondary text-decoration-none" onClick={goToMap}>Via Aurelia Antica, 164, 00165 Roma RM</a></p>
            <p>Villa Piccolomini dista solo pochi chilometri da Trastevere e il tragitto offre diversi scorci panoramici di Roma che vi consigliamo di non trascurare. La Fontana dell’Acqua Paola, Piazza Garibaldi e Via Piccolomini, famosa per l’effetto ottico della Cupola di San Pietro.</p>
          </blockquote>
        </figure>
      </Col>
      <Col
        id="party-images"
        xs={{ span: 12, order: 'last' }}
        lg={{ span: 6, order: 'last' }}
        className="align-self-center justify-content-center"
      >
        <Carousel
          controls={true}
          indicators={true}
          activeIndex={activeIndex}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <CroppedImage
              url="party_1.jpg"
              height={height}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CroppedImage
              url="party_2.jpg"
              height={height}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CroppedImage
              url="party_3.jpg"
              height={height}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CroppedImage
              url="party_4.jpg"
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
