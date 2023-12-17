import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import axios from 'axios'

const Achievements = ({onButtonClick}) => {
  const [record,setRecord]=useState([])
  const [id,setId]=useState(-1)
  const [title,setTitle]=useState()
  const [desc,setDesc]=useState()
  const token=localStorage.getItem("token")

  const nextbtn=()=>{
    onButtonClick("pagesaven")
  }
  const getAchievementsdata= async()=>{
    try {
      const {data}=await axios.get("https://portfolio-api-new.onrender.com/api/v1/resume/awardsandcertification",{
        headers:{Authorization:token}
      })
      setRecord(data.data)
    } catch (error) {
      
    }
  };
  useEffect(()=>{
    getAchievementsdata()
  },[])

  const addbtn= async()=>{
    try {

      if(id.length >=0){
        
        const res= await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/awardsandcertification/" + id,{ title:title,provider:desc},
        {
          headers:{Authorization:token}

        })
        getAchievementsdata()
      }
      else{ 
            const  res=await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/awardsandcertification",
            {
              title:title,provider:desc
            },
            {
              headers:{Authorization:token}
            });
            getAchievementsdata()
      }
    } catch (error) {
        console.log(error)
    }
    
    }
const editdata=(id)=>{
  const found =record.find(obj=>{
    return obj.id===id; 
  })
  setTitle(found.title)
  setDesc(found.provider)
  setId(id)
}
const deletedata= async (id)=>{
 try {
  const res=await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/awardsandcertification/remove/"+ id,{},
  {
    headers:{Authorization:token},
  });
  getAchievementsdata()
 } catch (error) {
  console.log(error)
 }
}
  return (
    <div>
            <div className={styles.form_header}>
                    <h2>Achievements</h2>
                </div>
         <div className={styles.form_datail_main}>
                <div className={styles.form_detail}>
                    <div className={styles.input_section}>
                    <input type='text' placeholder='Title' value={title} onChange={(event)=>{setTitle(event.target.value)}}  />
                    </div>  
                    <div className={styles.textarea_section}>
                         <textarea  rows="4" placeholder='Description'  value={desc} onChange={(event)=>{setDesc(event.target.value)}}/>
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
            <table width="100%">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th colSpan={2}>Action</th>
                </tr>
                {
                  record.map((display)=>{
                    return(
                      <tr>
                        <td>{display.title}</td>
                        <td>{display.provider}</td>
                        <td className={styles.btn}><buttton className={styles.btn_color} onClick={()=>{editdata(display.id)}}>Edit</buttton></td>
                      <td className={styles.btn}><buttton className={styles.btn_color} onClick={()=>{deletedata(display.id)}}>Delete</buttton></td>
                      </tr>
                    )
                  })
                }
            </table>

          </div>
    </div>
  )
}

export default Achievements