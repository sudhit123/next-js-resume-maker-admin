import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Sidebar from './sidebar'
import Form from './form';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className={styles.main}>
        <Container fluid>
          <Row>
            <Col lg={3} className={styles.padding}>
            <Sidebar/>
            </Col>
             <Col lg={9}  className={styles.padding}>
                <Form/>
             </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
