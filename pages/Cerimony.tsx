import { Col, Row } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";
import Map from "./map";

export default function Cerimony() {
  const { height, width } = useWindowDimensions();
  return (
    <Row id="cerimony">
      <Col style={{ minHeight: height }}>
        <Map
          url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.630755381164!2d12.4696635!3d41.8894657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x366752f3f04c4022!2sBasilica%20of%20Our%20Lady%20in%20Trastevere!5e0!3m2!1sen!2sit!4v1618175655026!5m2!1sen!2sit"
          height={height}
          width={width}
        />
      </Col>
      <Col className="text-center position-relative" style={{ minHeight: height }}>
        <p className="display-5">Basilica di Santa Maria in Trastevere</p>
        <p className="display-6">Ore 15.30</p>
        <div className="position-absolute bottom-0 start-50 translate-middle-x p-5">
          <p className="blockquote-footer">
            L’orario della celebrazione non potrà subire alcun ritardo per mantenere le tempistiche richieste dalla Chiesa per la sanificazione
          </p>
        </div>
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
