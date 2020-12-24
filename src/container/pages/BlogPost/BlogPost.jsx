import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        },
        isUpdate: false
    }

    fetchPost() {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    postForm = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            this.fetchPost();
            this.clearForm();
        })
    }

    clearForm = () => {
        this.setState({
            formBlogPost: {
                userId: 1,
                id: 1,
                title: '',
                body: ''
            },
            isUpdate: false
        })
    }

    putForm = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then((res) => {
                this.fetchPost();
                this.clearForm();
            })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                this.fetchPost();
            })
    }

    handleForm = (data) => {
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timestamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[data.target.name] = data.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })

    }

    handleDetail = (id)=>{
        this.props.history.push(`/detail-post/${id}`)
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putForm();
        } else {
            this.postForm();
        }

    }

    componentDidMount() {
        this.fetchPost();
    }
    render() {
        return (
            <Fragment>
                <p>Blog Post</p>
                <div className="row">
                    <div className="col-md-4 card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" value={this.state.formBlogPost.title} name="title" className="form-control" onChange={this.handleForm} id="title" placeholder="Enter Title" />
                                </div>
                                <div className="form-group">
                                    <label for="desc">Description</label>
                                    <textarea className="form-control" value={this.state.formBlogPost.body} name="body" id="desc" onChange={this.handleForm} rows="3"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">

                    {
                        this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                        })
                    }

                </div>
            </Fragment>
        )
    }
}

export default BlogPost;