import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'


const Professional = ({onButtonClick}) => {

  const [record,setRecord]=useState([])

  const [profession,setProfession]=useState()
  const [qualification,setQualification]=useState()
  const [collagename,setCollagename]=useState()
  const [language,setLanguage]=useState()
  const [experience,setExperience]=useState()

  const nextbtn=()=>{
    const cpyrecord=[...record];
    cpyrecord.push({
      Professional:profession,
      Qualification:qualification,
      CollageName:collagename,
      LanguageYouSpeak:language,
      Experience:experience
    })
    setRecord(cpyrecord)
    onButtonClick("pagetwo")
    console.log(cpyrecord)
  }
  
  return (
    <div> 
               <div className={styles.form_header}>
                    <h2>Professional Details</h2>
                </div>
            <div className={styles.form_datail_main}>
           
                <div className={styles.form_detail}>
                <div className={styles.input_section}>
                    <input type='text' placeholder='Profession' onChange={(event)=>{setProfession(event.target.value)}}/>
                </div>
                <div className={styles.input_dropdown}>
                  <select name="Qualification" className={styles.bg_color} onChange={(event)=>{setQualification(event.target.value)}}>
                    <option  value="">Select Qualification -</option>
                    <option   value="SSC">SSC</option>
                    <option   value="HSC">HSC</option>
                    <option   value="Bachelor's degree ">Bachelor's degree </option>
                    <option   value="Master's degree ">Master's degree </option>
                  </select>
                </div>  
                <div className={styles.input_section}>
                    <input type='text' placeholder='Collage Name' onInput={(event) => { 
                    event.target.value = event.target.value.replace(/[^A-Za-z]/g, '');
                  setCollagename(event.target.value);}}/>
                </div>
                <div className={styles.textarea_section}>
                <textarea rows="4" placeholder='Language you speak' onChange={(event)=>{setLanguage(event.target.value)}}></textarea>
                </div>             
                <div className={styles.input_dropdown}>
                  <select name="Experience" className={styles.bg_color} onChange={(event)=>{setExperience(event.target.value)}}>
                    <option  value="">Total Years of experience-</option>
                    <option   value="0 Year">0 Year</option>
                    <option   value="0.5 Year">0.5 Year</option>
                    <option   value="1 Year">1 Year </option>
                    <option   value="1.5 Year">1.5 Year</option>
                    <option   value="2 Year">2 Year</option>
                  </select>
                </div>     
                <div className={styles.next_btn}>     
                      <button onClick={nextbtn} >Save</button> 
                </div>
                </div>

            </div>
    </div>
  )
}

export default Professional