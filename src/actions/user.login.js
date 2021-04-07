import axios from "axios"

export const userLogin=(userData)=>async(dispatch,state)=>{
        const response=await axios.post("http://localhost:9011/user/login",userData)
        console.log("in action ",response.data.result,response.data.token)
        if(response.data.result){
        localStorage.setItem("token",JSON.stringify(response.data.token))
        }
        dispatch({type:"USERLOGIN",result:response.data.result})
       
}