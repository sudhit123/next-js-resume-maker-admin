import React from 'react'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const personaldetails = ({onButtonClick}) => {
    const [record,setRecord]=useState([])
  const [img,setImg ]=useState()
  const [phno,setPhno] =useState()
  const [dob,setDob]=useState()
  const [gender,setGender]=useState()
  const [address,setAddress]=useState()
  const [pincode,setPincode]=useState()

  const nextbtn=()=>{
    const cpyrecord=[...record];
    cpyrecord.push({
      Img:img,
      PhoneNo:phno,
      DateofBirth:dob,
      Gerder:gender,
      Address:address,
      Pincode:pincode
      })
    onButtonClick("pagethree")
        console.log(cpyrecord)
  }
  return (
    <div>
                <div className={styles.form_header}>
                    <h2>Personal Details</h2>
                </div>
         <div className={styles.form_datail_main}>
                <div className={styles.form_detail}>
                <div className={styles.input_section}>
                        <input type='file' onChange={(event)=>{setImg(event.target.value)}}/>
                </div>
                <div className={styles.input_section}>
                        <input type='text' placeholder='Phone No.' onChange={(event)=>{setPhno(event.target.value)}} />
                </div>
                <div className={styles.input_section}>
                        <div className={styles.date_section}>
                            <lable>Date of Birth  :</lable>
                            <div className={styles.date}>
                            <input type="date" onChange={(event)=>{setDob(event.target.value)}}/>
                            </div>
                        </div>
                    </div>   
                <div className={styles.input_section}>
                    <div className={styles.gender_section}>
                        <lable>Gender :</lable>
                        <div className={styles.input_radio_section} onChange={(event)=>{setGender(event.target.value)}}>
                          <span><input type="radio" name="gender" value="Male"/>Male</span>
                          <span><input type="radio" name="gender" value="Female"/>Female</span>
                        </div>
                    </div>
                </div>
                <div className={styles.textarea_section}>
                <textarea  rows="4" placeholder='Address' onChange={(event)=>{setAddress(event.target.value)}}></textarea>
                </div>             
                <div className={styles.input_section}>
                        <input type='text' placeholder='Pin code' onChange={(event)=>{setPincode(event.target.value)}} />
                </div> 
                <div className={styles.next_btn}>     
                            <button 
                              onClick={nextbtn}
                           >Save</button>
                </div>   
                </div>
                

            </div>
    </div>
  )
}

export default personaldetails