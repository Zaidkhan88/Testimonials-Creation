import React from 'react'
import { useState } from 'react'

const Reviewpage = ({retrievedData,setRetrievedData,createSpace,setCreateSpace}) => {
    const [linkForQuery,setLinkForQuery] = useState('')
    const handleReviewButton=async(e)=>{
        console.log('Handling Review Button')
        e.preventDefault()
        console.log('Still Handling')
        if(linkForQuery ){
          try{
            const getResponse = await fetch(`http://localhost:3001/adminForm?link=${encodeURIComponent(linkForQuery)}`,{
              method:'GET',
              headers:{
                'Content-type':'application/json'
              },
             
            });
            if(getResponse.ok){
              console.log('wait a sec')
              const ResponseData = await getResponse.json()
              console.log(ResponseData)
              const dbData = ResponseData.Userdata
             
              setRetrievedData({
                name:dbData.name,
                customMsg:dbData.customMsg,
                quiz:dbData.quiz
              })
              console.log(retrievedData)
              // setRetrievedData(dbData)
              setCreateSpace(true)
              
            }
            console.log('tried....')
            }
          catch(err){
            console.log('Err of sending get Req',err)
          }}}
  return (
    
       <form >
                  <p>Have a link to give review? Enter the link code and Click the Button to give a review </p>
                  <input type="text"  className='mb-2' value={linkForQuery} onChange={(e)=>setLinkForQuery(e.target.value)} style={{width:'100%'}} />
                <button onClick={handleReviewButton} style={{width:'100%'}}>Client For Review</button>
        </form>
    
  )
}

export default Reviewpage
