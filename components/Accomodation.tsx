import { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { scroller } from "react-scroll";
import useWindowDimensions from "../services/useWindowDimensions";
import CroppedImage from "./CroppedImage";
import Map from "./map";

export default function Accomodation({ setShowAssignamentModal }: {setShowAssignamentModal:(b: boolean) => void}) {
  const { height, width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const goToMap = () => {
    setActiveIndex(2);
    scroller.scrollTo('accomodation-images', {
      offset: -50
    });
  };
  const handleSelect = (selectedIndex: number, e: any) => {
    setActiveIndex(selectedIndex);
  };
  const openAssignmentModal = () => {
    setShowAssignamentModal(true);
  };
  return (
    <Row id="accomodation" style={{ minHeight: `${height}px` }} className="">
      <Col
        id="accomodation-images"
        xs={{ span: 12, order: 'last' }}
        lg={{ span: 6, order: 'first' }}
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
              url="accomodation_1.jpg"
              height={height}
            />
          </Carousel.Item>
          <Carousel.Item>
            <CroppedImage
              url="accomodation_2.jpg"
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
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: `400px` }}
      >
        <figure>
          <blockquote className="blockquote">
            <p>
              Per voi amici e parenti che venite da lontano abbiamo individuato le seguenti strutture per garantirvi un pernottamento nelle vicinanze della Chiesa.
            </p>
            <p>
              Sperando di aver fatto cosa gradita, vi ringraziamo per aver scelto di accompagnarci in questa giornata speciale nonostante la non semplice organizzazione.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer p-3 m-3">
            <a style={{ cursor: 'pointer' }} className="link-secondary text-decoration-none" onClick={openAssignmentModal}>Scopri dove sei stato assegnato 🎉🎉🎉</a>
          </figcaption>
        </figure>
      </Col>
    </Row>
  );
}
