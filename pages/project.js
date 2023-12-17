import React from 'react'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useEffect } from 'react'

const project = ({onButtonClick}) => {
  const [record,setRecord]=useState([])  
  const [id,setId]=useState(-1)
  const [img,setImg]=useState()
  const [title,setTitle]=useState()
  const [desc,setDesc]=useState()
  const [url,setUrl]=useState()  
  const token = localStorage.getItem("token")
  const nextbtn=()=>{
        alert("Your Record Submited.....")         
  }
  const getProjectdata= async()=>{
        try {
               const {data}=await axios.get("https://portfolio-api-new.onrender.com/api/v1/resume/projects",
               {
                headers:{Authorization:token}
               }) ;
                setRecord(data.data);
        } catch (error) {
                console.log(error)          
      }
  }
  useEffect(()=>{
        getProjectdata()
  },[])

  const addbtn= async ()=>{
        try {
           if(id.length >=0){
                   const res =await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/projects/" + id,
                   {
                         images:img,
                          title:title,
                          description:desc,
                          url:url,  
                   },
                   {
                        headers:{Authorization:token}
                   }) 
                 }
                 else{
                        const res= await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/projects",
                        {
                          images:img,
                          title:title,
                          description:desc,
                          url:url,                   
                        },{
                                headers:{Authorization:token}
                        });
                        getProjectdata()
                 }     
        } catch (error) {
                
        }
       
  }

  const editdata=(id)=>{
        const found=record.find(obj=>{
                return obj.id===id
        })
        setImg(found.images)
        setTitle(found.title)
        setDesc(found.description)
        setUrl(found.url)
        setId(id)
}
const deletedata= async (id)=>{
        try {
                const res=await axios.post("https://portfolio-api-new.onrender.com/api/v1/resume/projects/remove/"+ id,{},
                {
                        headers:{Authorization:token},
                });
                getProjectdata()
        } catch (error) {
                console.log(error)
        }
}
  return (
    <div> 
                <div className={styles.form_header}>
                    <h2>Project</h2>
                </div>
        <div className={styles.form_datail_main}>
                <div className={styles.form_detail}>
                <div className={styles.input_section}>
                        <input type='file' value={img} onChange={(event)=>{setImg(event.target.value)}} />
                </div>
                <div className={styles.input_section}>
                        <input type='text' placeholder='Title' value={title} onChange={(event)=>{setTitle(event.target.value)}} />
                </div>
               
                <div className={styles.textarea_section}>
                <textarea  rows="4" placeholder='Description' value={desc} onChange={(event)=>{setDesc(event.target.value)}}/>
                </div>             
                <div className={styles.input_section}>
                        <input type='text' placeholder='URL' value={url} onChange={(event)=>{setUrl(event.target.value)}}  />
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
                                <th>Iamge</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>URL</th>
                                <th colSpan={2}>Action</th>
                        </tr>
                        {
                               record.map((display)=>{
                                  return(
                                    <tr>
                                        <td><Image src={display.images} width={50} height={60}/></td>      
                                        {/* <td>{display.images}</td> */}
                                        <td>{display.title}</td>
                                        <td>{display.description}</td>
                                        <td>{display.url}</td>
                                        <td ><buttton className={styles.btn_color} onClick={()=>{editdata(display.id)}}>Edit</buttton></td>
                                        <td><buttton className={styles.btn_color} onClick={()=>{deletedata(display.id)}}>Delete</buttton></td>
                                </tr>
                                )
                               }) 
                        }
                </table>

            </div>
    </div>
  )
}

export default project