import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

const sidebar = () => {
  const router = useRouter();

  return (
    
    <div>
              <div className={styles.dashboard_section}>
                <div className={styles.dashboard}>
                <Navbar bg="light" expand="lg" className={styles.nav}>
                  <Navbar.Brand href="#home">
                  <Image
                  className={styles.logo}
                    src='/logo.png'
                    width={200}
                    height={30}>
                    </Image>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className={styles.center}  >
                      <Nav className={styles.navbar_link}>
                        <Nav.Link as={Link} className={router.pathname=="/" ? 'active':""}href="/">Dashboard</Nav.Link>
                        <Nav.Link as={Link} className={router.pathname=="/theme" ? 'active' : "" }  href="/theme">Select Live Theme</Nav.Link>
                        <Nav.Link as={Link} className={router.pathname=="/template" ? "active " :  "" } href="/template">CV Templates</Nav.Link>
                        <Nav.Link as={Link} className={router.pathname=="/updateprofile" ? "active" : "" } href="/updateprofile">Update Profile</Nav.Link>
                        <Nav.Link as={Link} className={router.pathname=="/setting" ? "active" : "" } href="/setting">Settings</Nav.Link>
                        <div className={styles.signup_signii_btn}>
                        <Nav.Link as={Link}  href="/signin" className={styles.signin_btn}>Sign in</Nav.Link>
                        <Nav.Link as={Link}  href="/signup"className={styles.signup_btn} >Sign up</Nav.Link>
                        </div>
                       
                      </Nav>
                  </Navbar.Collapse>

                </Navbar>   
                </div> 
              </div>
    </div>
  )
}

export default sidebar