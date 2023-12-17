import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'


const Educational = ({onButtonClick}) => {

        const [record,setRecord]=useState([])

        const [courese,setCourese]=useState()
        const [school,setSchool]=useState()
        const [grade,setGrade]=useState()
        const [year,setYear]=useState()
        
        const nextbtn=()=>{
                const cpyrecord=[...record]
                cpyrecord.push({
                        Courese:courese,
                        School:school,
                        Grade:grade,
                        Year:year
                })
        onButtonClick("pagefour")
        console.log(cpyrecord)

        }
  return (
        <div>
                <div className={styles.form_header}>
                    <h2>Educational</h2>
                </div>
        <div className={styles.form_datail_main}>
                <div className={styles.form_detail}>
                    <div className={styles.input_section}>
                    <input type='text' placeholder='Courese / Degree' onChange={(event)=>{setCourese(event.target.value)}} />

                    </div>
                    <div className={styles.input_section}>
                            <input type='text' placeholder='School / University' onChange={(event)=>{setSchool(event.target.value)}} />
                    </div>
                    <div className={styles.input_section}>
                            <input type='text' placeholder='Grade / Score' onChange={(event)=>{setGrade(event.target.value)}}/>
                    </div>          
                    <div className={styles.input_section}>
                            <input type='text' placeholder='Year' onChange={(event)=>{setYear(event.target.value)}}  />
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

export default Educational