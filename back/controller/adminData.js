const {AdminData} = require('../model/admindata');
const generateLink=()=>{
    let linkk = ''
    let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','@','#','$']
    for(let i=0;i<20;i++){
      let randomNum = Math.floor(Math.random()*37)
      linkk += arr[randomNum]
      
    }
    // console.log(linkk)
    return linkk
  }
const postAdminData = async(req,res)=>{
    const {name,customMsg,quiz} = req.body;
    
    try{
      let linkkk = generateLink()
        const newAdminData = new AdminData({name,customMsg,quiz,linkkk});
        await newAdminData.save();

        
        res.send({"link":linkkk})
    }
    catch(err){
        console.log('Err',err)
    }


}
const getFormData=async(req,res)=>{
  console.log('hi1')
  const link = req.query.link;
  console.log('hi2')
  console.log(link)
  try{
  
  const query = {'linkkk':link}
  console.log(query)
  
  const userData = await AdminData.findOne(query)

  console.log("Userdatsa",userData)
  // res.json("yess":"Gottten")
  res.status(200).json({"Userdata":userData})
  }catch(err){
    res.send('Try Harder')
  }
  
}
module.exports = {postAdminData,getFormData}