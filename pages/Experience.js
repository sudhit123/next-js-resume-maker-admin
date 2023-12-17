import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import {useState} from 'react'
import axios from 'axios'


const Experience = ({onButtonClick}) => {
  const [record,setRecord]=useState([])
  const moment = require('moment');
  
  const [compnay,setCompnay]=useState()
  const [jobTitle,setJobtitle]=useState()
  const [startDate,setStartdate]=useState()
  const [endDate,setEnddate]=useState()
  const [desc,setDesc]=useState()
  const [id,setId]=useState(-1);
  const token=localStorage.getItem("token")

    const getExperienceData= async()=>{
        try {
                const {data} = await axios.get(" https://portfolio-api-new.onrender.com/api/v1/resume/workexperience",{
                    headers:{Authorization:token},
                })
                setRecord(data.data)
            } catch (error) {
            
        }
    }

    useEffect(()=>{
        getExperienceData() 
    },[])
  const nextbtn=()=>{
    onButtonClick("pagefive")
  }

  const addbtn=async ()=>{
    try {
        if(id.length >=0){
           const res= await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/workexperience/" + id,{
            companyName:compnay,
            title:jobTitle,
            startDate:startDate,
            endDate:endDate,
            description:desc
           },{
                headers:{Authorization:token}
           })
           getExperienceData()

        }   
        else{
            const res=await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/workexperience",{companyName:compnay,
            title:jobTitle,
            startDate:startDate,
            endDate:endDate,
            description:desc},
            {
                headers:{Authorization:token}
            }
            );
            getExperienceData()
        }
    } catch (error) {
        console.log(error)
    }
   
  }
  const editdata=(id)=>{
    const found=record.find(obj=>{
        return obj.id ===id;
    })
    setCompnay(found.companyName)
    setJobtitle(found.title)
    setDesc(found.description)
    setId(id)
    //date convert yyyy-mm-dd
    const inputstartDate =found.startDate;
    const formatstDate = moment(inputstartDate).format('YYYY-MM-DD');
    setStartdate(formatstDate)
    const inputendartDate =found.endDate;
    const formatendDate = moment(inputendartDate).format('YYYY-MM-DD');
    setEnddate(formatendDate)
   
}
const deletedatas=async (id)=>{
  try {
     const res=await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/workexperience/remove/" + id,{},
     {
        headers:{Authorization:token}
     })
     getExperienceData()
  } catch (error) {
    console.log(error)
  }
}

return (
    <div>   
            <div className={styles.form_header}>
                    <h2>Experience</h2>
                </div>
         <div className={styles.form_datail_main}>
                <div className={styles.form_detail}>
                    <div className={styles.input_section}>
                    <input type='text' placeholder='Compnay Name' value={compnay} onChange={(event)=>{setCompnay(event.target.value)}} />

                    </div>
                    <div className={styles.input_section}>
                            <input type='text' placeholder='Job Title' value={jobTitle} onChange={(event)=>{setJobtitle(event.target.value)}}  />
                    </div>
                    <div className={styles.input_section}>
                        <div className={styles.date_section}>
                            <lable>Start Date :</lable>
                            <div className={styles.date}>
                            <input type="date" value={startDate} onChange={(event)=>{setStartdate(event.target.value) }}/>
                            </div>
                        </div>
                    </div>     
                    <div className={styles.input_section}>
                        <div className={styles.date_section}>
                            <lable>End  Date  :</lable>
                            <div className={styles.date}>
                            <input type="date" value={endDate} onChange={(event)=>{setEnddate(event.target.value)}}/>
                            </div>
                        </div>
                    </div>      
                    <div className={styles.textarea_section}>
                         <textarea  rows="4" placeholder='Description'value={desc} onChange={(event)=>{setDesc(event.target.value)}}/>
                    </div>
                    <div className={styles.next_btn}> 
                        <div className={styles.add_next_btn}>
                            <button  onClick={addbtn}>Add</button>
                            <button onClick={nextbtn}>Save</button>
                        </div>    

                    </div>   
                </div>
            </div>
            <div className={styles.display_table}>
                    <table border="1" width="100%">
                        <tr>
                        <th>CompnayName</th>
                        <th>Job Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Description</th>
                        <th colSpan={2}>Action</th>
                        </tr>
                        {
                            record.map((display,i)=>{
                                return(
                                    <tr>
                                        <td>{display.companyName}</td>
                                        <td>{display.title}</td>
                                        <td>{display.startDate}</td>
                                        <td>{display.endDate}</td>
                                        <td>{display.description}</td>
                                        <td className={styles.btn}><button onClick={()=>{editdata(display.id)}} className={styles.btn_color}>Edit</button></td>
                                        <td><button onClick={()=>{deletedatas(display.id)}}className={styles.btn_color}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
            </div>
    </div>
  )
}

export default Experience