import { Col, Container, Row } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";

export function Presentation() {
  const { height } = useWindowDimensions();
  return (
    <div id="home" className="d-flex justify-content-center align-items-center" style={{ minHeight: height }}>
      <Row className="text-center">
        <Col>
          <Container>
            <Row className="p-3">
              <Col>
                <span className="display-1 p-2">Marta</span>
                <span className="display-2 p-2">&amp;</span>
                <span className="display-1 p-2">Daniele</span>
              </Col>
            </Row>
            <Row className="display-3 p-3">
              <Col>
                  Annunciano il loro matrimonio
              </Col>
            </Row>
            <Row className="display-4 p-3">
              <Col>
                  Venerdì 3 Settembre 2021, alle ore 15.30
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
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
