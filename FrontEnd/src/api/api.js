import httpClient from './http-client';
import { message, notification } from 'antd';
    

const SearchMotel = async (dst, ward, type, area, prc)=>{
    const res = await httpClient.get(`api/motels/?district=${dst}&ward=${ward}&typeMotel=${type}&arc=${area}&price=${prc}`);
    return res;
}

const latestPost = async (page)=>{

    try{
        if(page == 1){
            const res = await httpClient.get('api/motels/latest');
            return res;
        }
        else {
            const res = await httpClient.get(`api/motels/latest?page=${page}`);
            return res;
        }
    }
    catch {
        message.error('Failed');
    }
    
    
}

const GetPost = async (id) =>{
    const response = await httpClient.get(`api/motels/get/${id}`)
    return response
}
/*-----------------------------------Post Borad -----------------------------------*/

const PostBoard = async (body, token)=>{
   const res = await httpClient.post('api/motels/create/',body,{
        headers: {
            'Authorization': token,
        }
    });
    return res;
}

const UploadImg = async (body, token)=>{
    const res = await httpClient.post('api/motels/img/upload/',body,{
         headers: {
             'Authorization': token,
             'Content-Type': 'multipart/form-data'
         }
     });
     return res;
 }


const UpdatePost = async (body, token, id) =>{
    const response = await httpClient.put(`api/motels/put/${id}/`,body
    ,{
        headers: {
            'Authorization': token,
        }
    }
    );
    return response
}
const DeleteMotelImg = async (token, id, idPost) =>{
    const response = await httpClient.delete(`api/motels/img/delete/${idPost}/${id}/`,
    {
        headers: {
            'Authorization': token,
        }
    }
    );
    return response
}

const DeletePost = async (token, id)=>{
    const res = await httpClient.delete(`api/motels/delete/${id}/`,{
         headers: {
             'Authorization': token,
         }
     });
     return res;
 }


//-----------------------Authencation-------------------------//
const restoreInforUser = (iduser, fname, lname, email, type_tk, image, username, token, onLogin ) =>{
    
    const dt = {  
                    iduser: iduser, 
                    fname: fname, 
                    lname: lname,
                    email: email,
                    typeToken: type_tk,
                    image: image,
                    username: username, 
                    token: token 
                }
    onLogin({ user: dt });
}

const notifi_error = (error) =>{
    console.log("onFinish -> error", error.response)
    notification["error"]({
      title:"Error",
      message: JSON.stringify(error.response.data),
      placement : 'bottomRight',
    })
}

const Login_Fb = async (token, inforfb, onLogin) =>{
    try {
        const response2 = await httpClient.post(`auth/social/convert-token/`, {
            grant_type: "convert_token",
            client_id:"2595169840730749",
            client_secret: "93fcc97b1a720b98a6df0462d6ac0ad5",
            backend: "facebook",
            token: token
        });
        const { data } = response2;
        console.log("login successful " + inforfb);
        restoreInforUser('','','','',data.token_type, inforfb.image, inforfb.username, data.access_token, onLogin )
        message.success('Đăng nhập thành công') 
        return 'success'  
    } catch (error) {
        notifi_error(error)
        return 'error' 
    }
}

const Login_GG = async (token, infor_gg, onLogin) =>{
    try {
        const response2 = await httpClient.post(`auth/social/convert-token/`, {
            grant_type: "convert_token",
            client_id:"311307780250-ns2lg1103qoblsnbmklpr3f8c6d1v53e.apps.googleusercontent.com",
            client_secret: "_2iQp_APiWURPtKfiibkcvCY",
            backend: "google-oauth2",
            token: token
        });
        const { data } = response2;
        console.log(response2);
        // console.log("login successful ");
        restoreInforUser('','','','', data.token_type, infor_gg.image, infor_gg.username, data.access_token, onLogin )
        return "success"
    } catch (error) {
        notifi_error(error)
        return 'error'
    }
}

const Login_sv = async (username, password, onLogin) =>{
    try{
        const response = await httpClient.post(`auth/login/`, {
            username: username,
            email: username,
            password: password
        });
        
        const { data } = response;
        restoreInforUser(   
                    data.user.pk, data.user.first_name, data.user.last_name, data.user.email, 'Token', 
                    data.user.image, 
                    data.user.username, 
                    data.key, onLogin) 
        return 'success'
    } catch(error) {
        notifi_error(error)
        return error
    }
}

const Register_sv = async (values, onLogin) =>{
    try {
        const response = await httpClient.post(`auth/registration/`, {
            username: String(values.username),
            firstName: String(values.fname),
            lastName:  String(values.lname) ,
            email: String(values.email),
            password1: String(values.password1),
            password2: String(values.password2),
        });
        console.log(response)
        if(response.status === 201){
            notification["success"]({
            title:"success",
            message:"Register Successfully"
            })
            const {data} = response 
            restoreInforUser( data.user.pk, data.user.first_name, data.user.last_name, data.user.email, 'Token', 
                                data.user.image, 
                                data.user.username, 
                                data.key, onLogin ) 
            return 'success'
        }   
    } catch (error) {
        notifi_error(error)
        return 'error'
    }
}

const logout = async () =>{
    const response = await httpClient.post(`auth/logout/`);
    return response
} 

//------------------------------Profile User ------------------------------------//


const getProfile = async (token) =>{
    const response = await httpClient.get(`myprofile`,  {
        headers: {
            Authorization: token
        }
    })
    
    return response     
    
}

const editProf = async (values, user, token, onLogin) =>{
    const response = await httpClient.put(`myprofile/`,
    {
        userprofile: {
            first_name: values.fname,
            last_name: values.lname,
            phone: values.phone, 
            email: ""  
        }
    },
    {   headers: {
                Authorization: token
        }
    })
    console.log(response);
    const { data } = response 
    restoreInforUser(   data.data.id, data.data.first_name, data.data.last_name, data.data.email, user.typeToken, 
                        user.image, 
                        user.username, 
                        user.token, onLogin )

    return response
}

const changePassword = async (values, token) => {
    try {
        const response = await httpClient.post(`auth/password/change/`, {
            old_password: values.oldpw,
            new_password1: values.pw1,
            new_password2: values.pw2
        },
        {
            headers: {
                Authorization: token
            }
        });
        return response

    } catch(error) {
        console.log(error);
        return error
    }
}; 
  


const GetAllMyPost = async (token)=>{
    const res = await httpClient.get('api/user/motel',{
         headers: {
             Authorization : token,
         }
     });
    return res;
}
 
export { GetAllMyPost, DeletePost, SearchMotel, PostBoard, UploadImg, latestPost, GetPost, UpdatePost, DeleteMotelImg};
export { Login_Fb, Login_GG, Login_sv, Register_sv, logout }
export { getProfile, changePassword, editProf }