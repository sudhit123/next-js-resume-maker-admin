import React from 'react'
import styles from '@/styles/Home.module.css'
import { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Sidebar from './sidebar'
import axios from 'axios';
const Signup = () => {
  const [modalShowsignup, setModalShowsignup] = React.useState(false);

    const [signupemail,setSignupemail]=useState()
  const [signupfname,setSignupfname]=useState()
  const [signuplname,setSignuplname]=useState()
  const [signuppsw,setSignuppsw]=useState()
  const [signupcpsw,setSignupcpsw]=useState()
    const signupinsert=()=>{

        axios.post(' https://portfolio-api-new.onrender.com/api/v1/user/signup',{
          email:signupemail,
          firstName:signupfname,
          lastName:signuplname,
          password:signuppsw,
          confirmPassword:signupcpsw,
        })
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })   
    }
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
                  <div className={styles.user_Auth_form_main}>
                        <div className={styles.form_header}>
                        <h2>Sign Up</h2>
                        </div>
                        <div className={styles.form_datail_main}>                          
                              <div className={styles.form_detail}>
                                  <div className={styles.input_section}>   
                                  <input type='text' placeholder='E-mail' onChange={(event)=>{setSignupemail(event.target.value)}} />
                                  </div>  
                                  <div className={styles.input_section}>
                                  <input type='text' placeholder='Firstname'onChange={(event)=>{setSignupfname(event.target.value)}} />
                                  </div> 
                                  <div className={styles.input_section}>
                                  <input type='text' placeholder='Lastname' onChange={(event)=>{setSignuplname(event.target.value)}}  />
                                  </div> 
                                  <div className={styles.input_section}>
                                  <input type='text' placeholder='Password' onChange={(event)=>{setSignuppsw(event.target.value)}} />
                                  </div> 
                                  <div className={styles.input_section}>
                                  <input type='text' placeholder='Confirm Password' onChange={(event)=>{setSignupcpsw(event.target.value)}} />
                                  </div> 
                                  <div className={styles.userAuth_submit_btn}>
                                      <div className='login-form-btn'>
                                      <a href="#" onClick={signupinsert} >Sign Up</a>
                                      </div>
                                      <div className='new-register-section'>
          <span>already login? <a href="">Sign in </a></span>
        </div>
                                  </div>                               
                              </div>
                         </div>
                  </div>
              </div>
             </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default Signup