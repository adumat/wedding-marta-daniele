import Head from 'next/head';
import { Container, Image } from 'react-bootstrap';
import useSiteScopeContext from '../services/useSiteScopeContext';
import useWindowDimensions from '../services/useWindowDimensions';
import Accomodation from './Accomodation';
import Cake from './Cake';
import Cerimony from './Cerimony';
import Navbar from './navbar';
import Party from './Party';
import Presentation from './Presentation';
import WeddingList from './WeddingList';

export default function Home() {
  const siteScope = useSiteScopeContext();
  const { width, height } = useWindowDimensions();
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
        <Image
          src={"trasparente_solo_nomi.png"}
          style={{
            height: `${height / width > 1 ? width - 150 : height - 100}px`,
            // height: `${height}px`,
            width: `${width}px`,
            objectPosition: '100% 0%',
            bottom: `0px`,
            left: '0px',
            objectFit: 'cover',
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
                <Accomodation />
              </>
            : <Cake />}
          <WeddingList />
        </Container>
      </div>
    </>
  );
}
