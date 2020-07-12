import httpClient from '../../api/http-client';

const uploadImg = async (body, token)=>{
   const res = await httpClient.post('api/motels/create/',body,{
        headers: {
            'Authorization': token,
            // 'Content-Type': 'multipart/form-data'
        }
    });
    return res;
}

const uploadinfo = async (body, token)=>{
    const res = await httpClient.post('uploadimg/',body,{
         headers: {
             'Authorization': token,
             // 'Content-Type': 'multipart/form-data'
         }
     });
     return res;
 }

 const latestPost = async ()=>{
    const res = await httpClient.get('api/motels/latest');
    return res;
 }

 const getPost = async (id) =>{
    const response = await httpClient.get(`api/motels/get/${id}`)
    return response
 }
export {uploadImg, uploadinfo, latestPost, getPost};