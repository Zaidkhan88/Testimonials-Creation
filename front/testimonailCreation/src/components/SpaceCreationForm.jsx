import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPlus } from '@fortawesome/free-solid-svg-icons';
const SpaceCreationForm = ({formData,setFormData,questions,setQuestions,addQuestion,setAddQuestion}) =>

  
   {

    const handleSubmit=async (e)=>{
      e.preventDefault()
      // setCreateSpace(true)
    
    
      console.log('Submiting',formData);
    
      try{
        
        console.log('trying')
        const response = await fetch('http://localhost:3001/adminForm',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
    
          },
         
        
        });
        if(response.ok){
          const data = await response.json();
          alert('Form Submitted')
          setFormData({
            name:'',
            customMsg:'',
            quiz:[],
            
    
    
          });
    
          console.log('Response data',data)
          setGeneratedLink(data.link)
          if(generatedLink){
            console.log('hhh',generatedLink)
          }
          
        }
        else{
          alert('Failed to Submit the Form')
          
            const errorText = await response.text(); // Get error response
            console.error('Failed to submit the form:', errorText);
            // alert('Failed to Submit the Form');
        }
      }
      catch(err){
        console.log('catching')
      console.log('Err',err)
      }}
  return (

       <form className="d-flex flex-column border border-secondary px-5 py-3 mx-5 my-5 " style={{width:'60%'}}>
                <label htmlFor="adname" >Space name</label>
                <input type="text" name="adname" value={formData.name} style={{width:'100%',height:'auto'}} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
                {/* <label htmlFor="channelName">Channel Name</label>
                <input type="text" name="ChannelName" style={{width:'50%'}}/> */}
                <label htmlFor="custommsg" value={formData.customMsg}>Your Custom Message</label>
                <textarea name="custommsg"  rows={4} style={{width:'100%'}} onChange={(e)=>setFormData({...formData,customMsg:e.target.value})}></textarea>
                <ul className='d-flex flex-column justify-content-between question-item'  >
                  {questions.map((question,index)=>(
                    <div key={index} className='d-flex flex-row justify-content-between'>
                      <li className='border border-secondary my-2 pr-3' onChange={(e)=>setFormData({...formData,question:e.target.value})} >{question}</li>
                    <FontAwesomeIcon className='my-2'
                onClick={()=>deleteItem(index)}
                icon={faTrash} style={{ cursor: 'pointer' }}
                />
                    </div>
                  ))}
                </ul>
                {addQuestion&&(
                  <input className='border border-secondary mx-4 my-0 pr-3' value={newQuestion} placeholder='Enter your question' onChange={(e)=>setNewQuestion(e.target.value)} onKeyDown={handleKeyPress} />
                )
                }
        
                <div className='d-flex flex-row-gap border border-secondary my-4 ' style={{width:'40%'}} >
                  
                {/* <span className='border border-secondary rounded-circle' style={{width:'15px', height:'25px'}}>+</span>
                */}
                <FontAwesomeIcon className='my-2 mx-2'
                icon={faPlus} style={{ cursor: 'pointer' }} onClick={()=>setAddQuestion(true)} />
                <span className='my-1' style={{width:'90%'}} onClick={()=>setAddQuestion(true)}>Add Question</span>
                </div>
                <button className='p-2' onClick={handleSubmit} type="submit">Create a new Space</button>
        
                </form>
    
  )
}

export default SpaceCreationForm
