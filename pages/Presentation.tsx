import { Col, Row } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";

export default function Presentation() {
  const { height, width } = useWindowDimensions();
  return (
    <Row id="home" className="text-center" style={{ height: `${height}px` }}>
      <Col>
        <p style={{ top: `${height / width > 1 ? '40' : '25'}%` }} className={`lead lh-lg fs-3 position-relative start-50 translate-middle`}>
          Siamo felici di annunciare il nostro matrimonio che si terrà Venerdì 3 Settembre 2021 presso la Basilica di Santa Maria in Trastevere alle ore 15.30
        </p>
      </Col>
    </Row>
  );
}

/*
  <ParallaxBanner style={{ height }} layers={[
        {
          amount: 0.2,
          image: "/matrimonio-tramonto.jpg"
        }
      ]}>
        <Parallax className={style.nameMarta} y={[-20, 20]} x={[-40, 40]}>
          Marta
        </Parallax>
        <Parallax className={style.nameAndAmp} y={[-20, 20]} x={[-20, 20]}>
          {encodeURI("&")}
        </Parallax>
        <Parallax className={style.nameDaniele} y={[-20, 20]} x={[40, -40]}>
          Daniele
        </Parallax>
        <div className="animate__animated animate__bounce animate__repeat-2">
          <div className={style.presentationEntry}>Annunciano il loro matrimonio</div>
          <div className={style.presentationDate}>Venerdì 3 Settembre 2021, alle ore 15.30</div>
        </div>
      </ParallaxBanner>
*/
