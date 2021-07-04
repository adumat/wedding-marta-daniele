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

const AlternativeA = () => {
  return <Container>
    <Row>
      <Col>Casa A</Col>
    </Row>
  </Container>;
};

const AlternativeB = () => {
  return <div>B</div>;
};

const AlternativeC = () => {
  return <div>C</div>;
};

const GiftOpenAnimation = ({ result, handleClickHouse }: { result: string; handleClickHouse: () => void; }) => {
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
  return (
    <div onClick={() => setStartedAnimation(!started)} className="position-relative" style={{ cursor: 'pointer' }}>
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
        <div className={`animate__animated ${animation} ${showLink ? '' : 'd-none'}`} style={{ fontSize: '6rem' }} onClick={handleClickHouse}>
          {result === 'a' ? 'Casa A' : result === 'b' ? 'Casa B' : 'Casa C'}
        </div>
      </div>
    </div>
  );
};

const InputBox = ({ setResult, setModalState }: { setResult: (result: string | null) => void; setModalState: (state: AssignamentModalState) => void }) => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const res = await fetch(window.location.origin + '/accomodation.csv');
    const text = await res.text();
    if (firstName.current === null || lastName.current === null) {
      setResult(null);
      setModalState(AssignamentModalState.NOTFOUND);
      return;
    }
    const first = firstName.current.value.trim().toLowerCase();
    const last = lastName.current.value.trim().toLowerCase();
    csv(text, {
      columns: true
    }, (err, out: {nome: string; cognome: string; location: string}[]) => {
      if (err) {
        console.error(err);
        return;
      }
      const res = out.filter(({ nome, cognome }) => {
        return nome.trim().toLowerCase() === first && cognome.trim().toLowerCase() === last;
      });
      if (res.length === 0) {
        setResult(null);
        setModalState(AssignamentModalState.NOTFOUND);
      } else {
        setResult(res[0].location);
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
              <Form.Group controlId="firstName">
                <Form.Label>Nome</Form.Label>
                <Form.Control required ref={firstName} type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Form.Group controlId="lastName">
                <Form.Label>Cognome</Form.Label>
                <Form.Control required ref={lastName} type="text" />
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

const ShowBox = ({ result, setModalState }: { result: string; setModalState: (state: AssignamentModalState) => void }) => {
  const handleClose = () => {
    setModalState(AssignamentModalState.HOUSE);
  };
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

const ShowHouse = ({ result, setShowAssignamentModal }: { result: string | null; setShowAssignamentModal: (b: boolean) => void }) => {
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
        {result === 'a' ? <AlternativeA /> : result === 'b' ? <AlternativeB /> : <AlternativeC />}
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
  const [result, setResult] = useState<string | null>(null);
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
          ? <ShowBox setModalState={setModalState} result={result || ''} />
          : modalState === AssignamentModalState.HOUSE
            ? <ShowHouse result={result} setShowAssignamentModal={setShowAssignamentModal} />
            : modalState === AssignamentModalState.INPUT
              ? <InputBox setModalState={setModalState} setResult={setResult} />
              : <NotFound setShowAssignamentModal={setShowAssignamentModal} />}
      </Modal>
    </>
  );
}
