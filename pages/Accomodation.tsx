import { Col, Row } from "react-bootstrap";
import useWindowDimensions from "../services/useWindowDimensions";
import Map from "./map";

export default function Accomodation() {
  const { height, width } = useWindowDimensions();
  return (
    <Row id="accomodation">
      <Col style={{ minHeight: height }}>
        <Map
          url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.630755381164!2d12.4696635!3d41.8894657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x366752f3f04c4022!2sBasilica%20of%20Our%20Lady%20in%20Trastevere!5e0!3m2!1sen!2sit!4v1618175655026!5m2!1sen!2sit"
          height={height}
          width={width}
        />
      </Col>
      <Col className="text-center position-relative" style={{ minHeight: height }}>
        <p className="display-6">Alloggio</p>
        <p className="">
          Per voi amici e parenti che venite da lontano abbiamo individuato le seguenti strutture per garantirvi un pernottamento nelle vicinanze della Chiesa.
        </p>
        <p className="">
          Come già anticipato, la notte del matrimonio è omaggiata dagli sposi mentre per i restanti giorni a vostra discrezione abbiamo ottenuto pacchetti scontati che verranno prenotati secondo le vostre esigenze.
        </p>
        <p className="">
          Sperando di aver fatto cosa gradita, vi ringraziamo per aver scelto di accompagnarci in questa giornata speciale nonostante la non semplice organizzazione.
        </p>
      </Col>
    </Row>
  );
}
