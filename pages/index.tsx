import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Accomodation from './Accomodation';
import Cerimony from './Cerimony';
import Navbar from './navbar';
import Party from './Party';
import Presentation from './Presentation';
import WeddingList from './WeddingList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wedding Marta &amp; Daniele</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ height: '100%' }}>
        <Navbar />
        <Container fluid="md">
          <Presentation />
          <Cerimony />
          <Party />
          <Accomodation />
          <WeddingList />
        </Container>
      </div>
    </>
  );
}
