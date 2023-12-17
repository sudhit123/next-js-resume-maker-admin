import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Sidebar from './sidebar'
import styles from '@/styles/Home.module.css'

const Updateprofile = () => {
  return (
    <div>
        <main className={styles.main}>
             <Container fluid>
              <Row>
            <Col lg={3} className={styles.padding}>
              <Sidebar/>
            </Col>
             <Col lg={9}  className={styles.padding}>
              <div className={styles.center_section}>
                    
              </div>
             </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default Updateprofile