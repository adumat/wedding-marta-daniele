import { FormEventHandler, useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import csv from 'csv-parse/lib/es5';
import Lottie from 'react-lottie';
import giftAnimation from '../assets/gift_animation.json';
import notFoundAnimation from '../assets/not_found.json';

enum AssignamentModalState {
  INPUT = 'show_input',
  BOX = 'show_box',
  HOUSE = 'show_house',
  NOTFOUND = 'show_notfound',
}

const HREF_APP_VIA_MAMELI = 'https://goo.gl/maps/d7cFgjxPaAKUM2fK6';
const HREF_DREAM_HOME = 'https://goo.gl/maps/EeKAGGwHgz3Lu8JS6';
const HREF_HOTEL_SFRANCESCO = 'https://goo.gl/maps/RhPLFAxDb6BGvgir7';
const HREF_LE_CLARISSE = 'https://g.page/relaisleclarissetrastevere?share';
const HREF_PALAZZO_VELLI_SUITES = 'https://g.page/palazzo-velli-suites?share';
const HREF_TINY_HOME = 'https://goo.gl/maps/PvwGucYs4EzT8Tw28';

interface CSVInputRow {
  Ospite: string;
  Alloggio: 'Le Clarisse'
  | 'Tiny Home'
  | 'Palazzo Velli Suites'
  | 'Appartamento Via Mameli'
  | 'Hotel San Francesco'
  | 'Dream Home';
  Camera: string;
  "Check in": string;
  "Check out": string;
  Indirizzo: string;
  Notti: string;
  Tipologia: string;
}

// const AlternativeA = () => {
//   return <Container>
//     <Row>
//       <Col>Casa A</Col>
//     </Row>
//   </Container>;
// };

// const AlternativeB = () => {
//   return <div>B</div>;
// };

// const AlternativeC = () => {
//   return <div>C</div>;
// };

const GiftOpenAnimation = ({ result, handleClickHouse }: { result: CSVInputRow; handleClickHouse: () => void; }) => {
  const [started, setStartedAnimation] = useState<boolean>(false);
  const [showLink, setShowLink] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>('animate__zoomIn');
  useEffect(() => {
    if (!started) {
      setShowLink(false);
    }
  }, [started]);
  useEffect(() => {
    if (showLink) {
      setTimeout(() => setAnimation('animate__tada'), 1000);
    }
  }, [showLink]);
  const cbClick = () => {
    if (showLink) {
      handleClickHouse();
    } else {
      setStartedAnimation(true);
    }
  };
  return (
    <div onClick={cbClick} className="position-relative" style={{ cursor: 'pointer' }}>
      <Lottie options={{
        loop: false,
        autoplay: false,
        animationData: giftAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
      isClickToPauseDisabled={true}
      isStopped={!started}
      eventListeners={[{ eventName: "complete", callback: () => setShowLink(true) }]}
      height={400}
      width={400}/>
      <div className={`position-absolute top-50 start-50 translate-middle`}>
        <div className={`text-center animate__animated ${animation} ${showLink ? '' : 'd-none'}`} style={{ fontSize: '4rem' }}>
          {result.Alloggio}
        </div>
      </div>
    </div>
  );
};

const InputBox = ({ setResult, setModalState }: { setResult: (result: CSVInputRow | null) => void; setModalState: (state: AssignamentModalState) => void }) => {
  const name = useRef<HTMLInputElement>(null);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const res = await fetch(window.location.origin + '/accomodation.csv');
    const text = await res.text();
    if (name.current === null) {
      setResult(null);
      setModalState(AssignamentModalState.NOTFOUND);
      return;
    }
    const nameNormalized = name.current.value.trim().toLowerCase();
    csv(text, {
      columns: true,
      delimiter: ';'
    }, (err, out: CSVInputRow[]) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(out);
      const res = out.filter(({ Ospite }) => {
        return Ospite.trim().toLowerCase().indexOf(nameNormalized) !== -1;
      });
      if (res.length === 0) {
        setResult(null);
        setModalState(AssignamentModalState.NOTFOUND);
      } else {
        setResult(res[0]);
        setModalState(AssignamentModalState.BOX);
      }
    });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Informazioni alloggio</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              Inserisci il nome e cognome e scopri quale alloggio abbiamo pensato per te!
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Form.Group controlId="name">
                <Form.Label>Nome e Cognome</Form.Label>
                <Form.Control required ref={name} type="text" />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Ok
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

const ShowBox = ({ result, setModalState }: { result: CSVInputRow | null; setModalState: (state: AssignamentModalState) => void }) => {
  const handleClose = () => {
    setModalState(AssignamentModalState.HOUSE);
  };
  if (result === null) {
    return null;
  }
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Informazioni alloggio</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <GiftOpenAnimation result={result} handleClickHouse={() => setModalState(AssignamentModalState.HOUSE)} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Ok
        </Button>
      </Modal.Footer>
    </>
  );
};

const ShowHouse = ({ result, setShowAssignamentModal }: { result: CSVInputRow | null; setShowAssignamentModal: (b: boolean) => void }) => {
  const handleClick = () => {
    setShowAssignamentModal(false);
  };
  if (result === null) {
    return null;
  }
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Informazioni alloggio</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container className="text-center">
          <Row>
            <Col style={{ fontSize: '4rem' }}>{result.Alloggio}</Col>
          </Row>
          <Row>
            <Col>
              <a href={result.Alloggio === "Appartamento Via Mameli" ? HREF_APP_VIA_MAMELI : result.Alloggio === "Dream Home" ? HREF_DREAM_HOME : result.Alloggio === "Hotel San Francesco" ? HREF_HOTEL_SFRANCESCO : result.Alloggio === "Le Clarisse" ? HREF_LE_CLARISSE : result.Alloggio === "Palazzo Velli Suites" ? HREF_PALAZZO_VELLI_SUITES : HREF_TINY_HOME}>
                {result.Indirizzo}
              </a>
            </Col>
          </Row>
          <Row>
            <Col>{result["Check in"]} - {result["Check out"]}</Col>
          </Row>
          <Row>
            <Col>{result.Tipologia}</Col>
          </Row>
          {/* {result === 'a' ? <AlternativeA /> : result === 'b' ? <AlternativeB /> : <AlternativeC />} */}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClick}>
          Ok
        </Button>
      </Modal.Footer>
    </>
  );
};

const NotFound = ({ setShowAssignamentModal }: { setShowAssignamentModal: (b: boolean) => void }) => {
  const handleClick = () => {
    setShowAssignamentModal(false);
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Informazioni alloggio</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      <Container>
        <Row className="text-center">
          <Col>
            <Lottie options={{
              loop: true,
              autoplay: true,
              animationData: notFoundAnimation,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
              isClickToPauseDisabled={true}
              isStopped={false}
              height={400}
              width={400}
              style={{ cursor: 'default' }}
              />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>Ops! sembra tu non sia in elenco</Col>
        </Row>
      </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClick}>
          Ok
        </Button>
      </Modal.Footer>
    </>
  );
};

export default function AssignamentModal({ showAssignamentModal, setShowAssignamentModal }: { showAssignamentModal: boolean; setShowAssignamentModal: (b: boolean) => void }) {
  const [result, setResult] = useState<CSVInputRow | null>(null);
  const [modalState, setModalState] = useState<AssignamentModalState>();
  const handleClose = () => {
    setShowAssignamentModal(false);
    setTimeout(() => setResult(null), 1000);
  };
  useEffect(() => {
    if (!showAssignamentModal) {
      setTimeout(() => {
        setResult(null);
        setModalState(AssignamentModalState.INPUT);
      }, 1000);
    }
  }, [showAssignamentModal]);
  return (
    <>
      <Modal
        show={showAssignamentModal}
        onHide={handleClose}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {modalState === AssignamentModalState.BOX
          ? <ShowBox setModalState={setModalState} result={result} />
          : modalState === AssignamentModalState.HOUSE
            ? <ShowHouse result={result} setShowAssignamentModal={setShowAssignamentModal} />
            : modalState === AssignamentModalState.INPUT
              ? <InputBox setModalState={setModalState} setResult={setResult} />
              : <NotFound setShowAssignamentModal={setShowAssignamentModal} />}
      </Modal>
    </>
  );
}
