import Testimonial from './Testimonial';
import { useEffect, useState } from 'react';
import SpaceCreationForm from './SpaceCreationForm';
import Reviewpage from './Reviewpage';
const Adminform = () => {
  const [addQuestion,setAddQuestion] = useState(false)
  const [newQuestion,setNewQuestion] = useState('')
  let [questions,setQuestions] = useState([
    'How has our product or service has helped you??',
    'Whats the best thing about product or service',
    'Share your exprience??'
  ])
  
  const [createSpace,setCreateSpace] = useState(false)
  const [generatedLink,setGeneratedLink] = useState('')
  const [retrievedData,setRetrievedData] = useState({
    name:'',
    customMsg:'',
    quiz:questions,
  });
  const deleteItem=(index)=>{
  setQuestions(questions.filter((_,i)=>i!==index))
}
const [formData,setFormData] = useState({
  name:'',
  customMsg:'',
  quiz:questions,
  
});
useEffect(()=>{
  setFormData((prevFormData)=>({
    ...prevFormData,
    quiz:questions,
  }))
},[questions,retrievedData]);
const handleKeyPress = (e)=>{
  if(e.key==='Enter'){
    handleAddQuestion();
  }}
const spaceCreationFormProps={
  formData,
  setFormData,
  questions,
  setQuestions,
  addQuestion,
  setAddQuestion
}
const reviewPageProps = {
  retrievedData,
  setRetrievedData,
  createSpace,
  setCreateSpace
}

const handleAddQuestion=()=>{
 if(newQuestion){
  setQuestions([...questions,newQuestion])
  setNewQuestion('')
  setAddQuestion(false)
 }}
 
 return (
<>
  {!createSpace && (
        <div className="d-flex p-2" style={{width:'90%',marginLeft:'3%',marginTop:'5%'}}>
   
        {/* <Testimonial formData ={formData} disableVideoRecording={true}/> */}
           
               <SpaceCreationForm {...spaceCreationFormProps}/>
                <div className='d-flex flex-column border border-secondary px-5 mx-5 my-5' style={{paddingTop:"14%"}}>
                 <Reviewpage {...reviewPageProps}/>
                  
                </div>
               
           
       </div>
    )}   
    
   {createSpace && (
    <div className='p-2 ' style={{width:'80%',marginLeft:'30%',marginTop:"10%", height:'90%'}}> 

        <Testimonial formData={retrievedData} disableVideoRecording={false}  />
    </div>

   )} 
    </>
    )
}

export default Adminform
