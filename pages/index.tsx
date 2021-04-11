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
      </Head>
      <Container fluid>
        <Navbar />
        <Presentation />
        <Cerimony />
        <Accomodation />
        <Party />
        <WeddingList />
      </Container>
    </>
  );
}
