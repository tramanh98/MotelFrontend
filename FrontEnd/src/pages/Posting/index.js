import React, { Component } from 'react'
import {UpdateBoard} from './update_post'
import {PostMotel}  from './new_post'
import Aux from '../../others/HOC/auxiliary'
import NavBar from '../../PublicComponent/NavBar'; 
import { Spin } from 'antd';
import { PostBoard, GetPost, UploadImg, UpdatePost, DeleteMotelImg } from '../../api/api'
import { AuthContext } from '../../others/contexts/auth.context';
import If from '../../others/helper/if'


const createNewPost = (props) =>{
    return (
        <Aux>
            <PostMotel  {...props} />
        </Aux>
    )
}

const updatePost = (props) =>{
    return(
        <Aux>
            <UpdateBoard {...props} />
        </Aux>
    )
}
export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
                form: new FormData(),
                loading: false ,
                rend: false,
                rendNewPost: false,
                propsPost:{
                    id: 0,
                    title: "",
                    typeMotel: "",
                    arc: "",
                    price: "",
                    district: "",
                    ward: "",
                    address: "",
                    content: null,
                    phone_number: "",
                    numOfImg: 0,
                    imgs: [],
            }
        }
    };

    componentDidMount() {
        if(this.props.match.params.idPost){
            this.setState({
                loading: true
            })
            this.getPost()
        }  
        else {
            this.setState({
                rendNewPost: true
            })
        } 
    }

    static contextType = AuthContext;
    setForm = (id, img) => {
        const { form } = this.state;
        const cloneForm = form;
        cloneForm.append('motel', id)
        cloneForm.append('image', img[0][0])
        this.setState({ form: cloneForm })
        console.log("Đây là file trong hàm setForm " + this.state.form.get("image"));
    }

    /** khi ấn button Đăng tin sẽ chạy vô hàm này */
    onPost = async(values, fileImg) =>{
        const { user } = this.context;
        console.log(fileImg);
        const data = {
            title: values.title,
            content: values.content,
            typeMotel: values.typeMotel,
            address: values.address,
            ward: String(values.ward),
            district: String(values.district),
            local_map: values.localMap,
            phone_number: values.phone_number,
            arc: values.arc,
            price: parseInt(values.price),
        }
        const response = await PostBoard(data, `${user.typeToken} ${user.token}`);
        const { id } = response.data
        for (var i = 0; i < fileImg.length; i++) {
            console.log(id)
            console.log("Đây là file trong hàm for " + fileImg[i])
            this.setForm(id, fileImg[i]);
            const response = await UploadImg(this.state.form, `${user.typeToken} ${user.token}`);
            console.log(response.data);
        }
        this.setState({
            loading: false
        })
        this.props.history.push('/profile/index')
    }
    
    onUpdatePost = async (values, idpost, listDelete, fileImg) =>{
        const { user } = this.context;
        const data = {
            title: values.title,
            content: values.content,
            typeMotel: values.typeMotel,
            address: values.address,
            ward: String(values.ward),
            district: String(values.district),
            local_map: values.localMap,
            phone_number: values.phone_number,
            arc: values.arc,
            price: parseInt(values.price),
        }
        const response = await UpdatePost(data, `${user.typeToken} ${user.token}`, idpost);
        const { id } = response.data
        console.log("data after updated "+response.data)
        for (var i = 0; i < listDelete.length; i++) {
            console.log(id)
            console.log("Đây là file trong hàm for " + listDelete[i])
            const response = await DeleteMotelImg(`${user.typeToken} ${user.token}`,listDelete[i], id);
            console.log(response.data);
        }

        for (var i = 0; i < fileImg.length; i++) {
            console.log(id)
            console.log("Đây là file trong hàm for " + fileImg[i])
            this.setForm(id, fileImg[i]);
            const response = await UploadImg(this.state.form, `${user.typeToken} ${user.token}`);
            console.log(response.data);
        }
        this.setState({
            loading: false
        })
        this.props.history.push('/profile/index')

    }

    // lấy bài viết để update
    getPost = async () =>{
        const response = await GetPost(this.props.match.params.idPost)
        const { data } = response;
        console.log(data)
        this.setState({
            loading: false,
            rend: true,
            propsPost:{
                id: data.id,
                title: data.title,
                content: data.content,
                typeMotel: data.typeMotel,
                arc: data.arc,
                price: data.price,
                district: data.district,
                ward: data.ward,
                address: data.address,
                phone_number: data.phone_number,
                localMap: data.local_map ,
                numOfImg: data.images.length,
                imgs: data.images,
            }
        })
    }


    handleNewPost = (value, FileImg) => {
        console.log("This is the final results: " + value.title)
        console.log(FileImg)
        this.setState({
                loading: true 
            }
        )
        this.onPost(value, FileImg)
    }
    handleUpdate = (value, id, listDelete, fileImg) => {
        console.log("This is the final results: " + value.title + "        " + id)
        this.setState({
                loading: true 
            }
        )
        this.onUpdatePost(value, id, listDelete, fileImg)
    }

    render() {
        const { location, history } = this.props;
        const { match } = this.props;
        return (
            <Aux>
                <NavBar location = {location} history = {history}  home={false} />
                <Spin tip="Loading..." spinning={this.state.loading}>
                    <If condition={this.state.rendNewPost} component={createNewPost}
                    props={{ getValue: this.handleNewPost }} />

                    <If condition={this.state.rend} component={updatePost}
                    props={{
                        params: this.props.match.params.idPost,
                        dataPost : {...this.state.propsPost} , 
                        getValue : this.handleUpdate
                    }}/>
                </Spin>
            </Aux>
                    
            
        );

    }
}