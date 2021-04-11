import { Col, Row, Container } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";
import React from "react";

const Map = React.memo(function MapIframe({ height }: { height: number }) {
  return (<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.630755381164!2d12.4696635!3d41.8894657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x366752f3f04c4022!2sBasilica%20of%20Our%20Lady%20in%20Trastevere!5e0!3m2!1sen!2sit!4v1618175655026!5m2!1sen!2sit" width="600" height={ height } style={{ border: 0 }} allowFullScreen={false} loading="lazy"></iframe>);
});

export function Cerimony() {
  const { height } = useWindowDimensions();
  return (
    <Row id="cerimony">
      {/* <Col>
        <Image
          src="slider-img2.png"
          rounded
        />
      </Col> */}
      <Col style={{ minHeight: height }}>
        <Map height={height} />
      </Col>
      <Col className="text-center position-relative" style={{ minHeight: height }}>
        <Container>
          <Row className="p-5">
            <Col>
              <span className="display-5">Basilica di Santa Maria in Trastevere</span>
            </Col>
          </Row>
          <Row>
            <Col className="display-6">Ore 15.30</Col>
          </Row>
          <Row className="position-absolute bottom-0 end-0 p-5">
            <Col>
              <span className="blockquote-footer">L’orario della celebrazione non potrà subire alcun ritardo per mantenere le tempistiche richieste dalla Chiesa per la sanificazione</span>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}

/*
  <div id="cerimony" style={{ backgroundColor: 'blue', height }}>
      <div className={style.cerimonyChurchImage}>
        <ParallaxBanner style={{ height }} layers={[
          {
            amount: 3,
            image: "/chiesa.jpg"
          }
        ]}>
        </ParallaxBanner>
        <Fade top>
          <div style={{ fontSize: '10em' }}>
            Basilica di Santa Maria in Trastevere
          </div>
        </Fade>
      </div>
    </div>
*/
