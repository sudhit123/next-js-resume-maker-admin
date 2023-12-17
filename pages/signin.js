import React from 'react'
import { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Sidebar from './sidebar'
import axios from 'axios';
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const Signin = () => {
        const router=useRouter()
        const [modalShow, setModalShow] = React.useState(true);
        const [signinemail,setSigninemail]=useState()
        const [signinpsw,setSigninPsw]=useState()
        
        useEffect(()=>{
            const token=localStorage.getItem("token")
            if(token){
              router.push("/")
           }
        },[])
        const signininsert=()=>{
          axios.post(' https://portfolio-api-new.onrender.com/api/v1/user/login',{
            
            email:signinemail,
            password:signinpsw,
          })
            .then(function (response) {
              // handle success
              console.log(response.data.token);
              localStorage.setItem('token', response.data.token)
              // return router.push("/")
              
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
          
      }
        return (
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
                        <h2>Sign in</h2>
                        </div>
                        <div className={styles.form_datail_main}>                          
                              <div className={styles.userAuth_form_detail}>
                                  <div className={styles.input_section}>   
                                  <input type='text' placeholder='E-mail' onChange={(event)=>{setSigninemail(event.target.value)}}/>
                                  </div>  
                                  <div className={styles.input_section}>
                                  <input type='text' placeholder='Password' onChange={(event)=>{setSigninPsw(event.target.value)}}/>
                                  </div> 
                                  <div className={styles.userAuth_submit_btn}>
                                      <div className='login-form-btn'>
                                      <a href="#" onClick={signininsert} >Sign in</a>
                                      </div>
                                      <div className='new-register-section'>
                                      <span>New Registration ? <a href="" className={styles.color}>Sign up </a></span>
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
          
        );
      }
export default Signin