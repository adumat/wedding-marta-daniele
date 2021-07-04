import Head from 'next/head';
import { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import useSiteScopeContext from '../services/useSiteScopeContext';
import useWindowDimensions from '../services/useWindowDimensions';
import Accomodation from '../components/Accomodation';
import AssignamentModal from '../components/AssignamentModal';
import Cake from '../components/Cake';
import Cerimony from '../components/Cerimony';
import Navbar from '../components/navbar';
import Party from '../components/Party';
import Presentation from '../components/Presentation';
import WeddingList from '../components/WeddingList';

export default function Home() {
  const siteScope = useSiteScopeContext();
  const { width } = useWindowDimensions();
  const [showAssignamentModal, setShowAssignamentModal] = useState(false);
  return (
    <>
      <Head>
        <title>Wedding Marta &amp; Daniele</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{
        // height: '100%',
        position: 'relative'
      }}>
        <Navbar />
        <AssignamentModal showAssignamentModal={showAssignamentModal} setShowAssignamentModal={setShowAssignamentModal} />
        <Image
          // src={"trasparente_solo_nomi.png"}
          src={"imm_sito.png"}
          style={{
            // height: `${height / width > 1 ? width - 200 : height - 200}px`,
            // height: `${height}px`,
            width: `${width}px`,
            objectPosition: '55% 0%',
            bottom: `0px`,
            left: '0px',
            objectFit: 'contain',
            position: "fixed",
            backgroundAttachment: 'fixed',
            zIndex: -1
          }}
        />
        <Container
          fluid="md">
          <Presentation />
          <Cerimony />
          {siteScope === 'ricevimento'
            ? <>
                <Party />
                <Accomodation setShowAssignamentModal={setShowAssignamentModal} />
              </>
            : <Cake />}
          <WeddingList />
        </Container>
      </div>
    </>
  );
}
