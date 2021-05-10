import { Col, Row, Image } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";

export default function Presentation() {
  const { height, width } = useWindowDimensions();
  return (
    <div id="home" className="d-flex justify-content-center" style={{ minHeight: height }}>
      <Row className="py-5 my-5 text-center">
        <Col>
          <p className="lead">
            Siamo felici di annunciare il nostro matrimonio che si terrà Venerdì 3 Settembre 2021 presso la Basilica di Santa Maria in Trastevere alle ore 15.30
          </p>
        </Col>
      </Row>
      <Image
        src={"trasparente_solo nomi.png"}
        style={{
          height: `${height - 200}px`,
          width: `${width - 20}px`,
          objectPosition: '100% 0',
          bottom: `0px`,
          objectFit: 'cover',
          position: "absolute"
        }}
      />
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
