import React, { useEffect, useState } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'

const Testimonial = ({formData,disableVideoRecording}) => {
  const [startRecord,setStartRecord] = useState(false)
  const {status,startRecording,stopRecording,mediaBlobUrl,clearBlobUrl} = useReactMediaRecorder({video:true});
  useEffect(()=>{
    return ()=>{
        if(clearBlobUrl){
          clearBlobUrl();
        }
    }
  },[clearBlobUrl])
  
  
  const handleStartRecording=()=>{
    startRecording();
    setStartRecord(true);
  }
  const handleStopRecording=()=>{
    stopRecording();
    setStartRecord(false);
  }
  // const RecordView=()=>{
    
  // }
  return (
    <>
    
      <div className='d-flex  border border-secondary flex-column' style={{width:'40%'}}>
      <h2 className='m-4 p-2 justify-content-center '>Headers goes here</h2>
      
      <p className='justify-content-center ' style={{marginTop:'-8%',marginLeft:'10%',width:'80%', wordWrap: 'break-word', whiteSpace: 'normal' }}>{formData.customMsg}</p>
      <p>{formData.quiz.map(question=><li>{question}</li>)}</p>
      <button className='p-2' style={{width:'90%',marginLeft:'4%' }} type="submit" onClick={handleStartRecording}  disabled={disableVideoRecording} >Record a video</button> 
        {startRecord && (
          <button className='mt-2 p-2' style={{width:'90%',marginLeft:'4%' }} onClick={handleStopRecording} >Stop Recording</button>
        )}
        {mediaBlobUrl && (
            <div>
              {/* <video src={mediaBlobUrl}></video> */}
              <a href={mediaBlobUrl} download="recorded-video.webm">
              <button className='p-2' style={{ width: '90%', marginLeft: '4%' }} >Download Video</button>
            </a>
            </div>
        )}



      <button className='p-2 mt-3 ' style={{width:'90%',marginLeft:'4%' }} type="submit" disabled={true}>Text Messages</button>      
    
    </div> 
    </>
  )
}

export default Testimonial
