import React from 'react'
import styles from '@/styles/Home.module.css'
import {useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react'

const Skills = ({onButtonClick}) => {
  const [record,setRecord]=useState([])
  const [isbtn,setIsbtn]=useState(false)
  const [id,setId]=useState(-1)
  const [skill,setSkill]=useState()
  const [skilllevel,setSkillevel]=useState()
  const token=localStorage.getItem("token")

  const getSkillData = async ()=>{
    try {
      const {data} = await axios.get("https://portfolio-api-new.onrender.com/api/v1/resume/skills",
      {
        headers:{ Authorization :token },
      }
      );
      // console.log(data.data)
      setRecord(data.data)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getSkillData()
  },[])
  
  const nextbtn=()=>{ 
    onButtonClick("pagesix")
  }
  const addbtn=  ()=>{
    try {
      setIsbtn(true)
      if(id.length  >=0){
        // console.log(id)
        const res =  axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/skills/" +id,
        {name:skill,rate:skilllevel},
        {
          headers:{Authorization:token}
        });
        getSkillData()
      }
      else{
        // console.log(id)
        const res =  axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/skills",{name:skill,rate:skilllevel},
        {
          headers:{Authorization : token},
        })
        getSkillData();
      }
      setIsbtn(false)
    } catch (error) {
      console.log(error)
    }  
  }
  const editdata=(id)=>{    
    const found=record.find(obj=>{
      return obj.id===id; 
    })
   setSkill(found.name)    
   setSkillevel(found.rate)
   setId(found.id)
  
  }
  const deletedata= async (id) =>{
    try {
      const res = await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/skills/remove/" + id,{},
      {
        headers:{ Authorization : token },
      })
      getSkillData();
    } catch (error) {
     console.log(error)
    }
  }
  return (
    <div>
          <div className={styles.form_header}>
                    <h2>Skills</h2>
                </div>
         <div className={styles.form_datail_main}>
                <div className={styles.form_detail}>
                    <div className={styles.input_section}>
                    <input type='text' placeholder='Skills' value={skill} onChange={(event)=>{setSkill(event.target.value)}}  />
                    </div>
                    <div className={styles.input_dropdown}>
                  <select name="Experience" className={styles.bg_color}  value={skilllevel} onChange={(event)=>{setSkillevel(event.target.value)}} >
                    <option  value="">Skills Level --</option>
                    <option   value="1">1</option>
                    <option   value="2">2</option>
                    <option   value="3">3</option>
                    <option   value="4">4</option>
                    <option   value="5">5</option>
                    <option   value="6">6</option>
                    <option   value="7">7</option>
                    <option   value="8">8</option>
                    <option   value="9">9</option>
                    <option   value="10">10</option>
                  </select>
                </div>    
                  <div className={styles.next_btn}> 
                     <div className={styles.add_next_btn}>
                       <button  disabled={isbtn} onClick={addbtn}>Add</button>
                       <button onClick={nextbtn}>Save</button>
                     </div>    
                   </div>   
                </div>
            </div>

            <div className={styles.display_table} >
            <table width="100%" >
              <tr>
                <th>Skill</th>
                <th>Skills Lavel </th>
                <th colSpan={2}>Action</th>
              </tr>
              {
                record.map((display)=>{
                  return(
                    <tr>
                      <td>{display.name}</td>
                      <td>{display.rate}</td>
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

export default Skills
