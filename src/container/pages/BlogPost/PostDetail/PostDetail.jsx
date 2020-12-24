import React, { Component } from 'react';
import axios from 'axios';

class PostDetail extends Component {

    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3004/posts/${id}`)
            .then(res => {
                this.setState({
                    post: {
                        title: res.data.title,
                        body: res.data.body
                    }
                })
            })

    }

    render() {
        return (
            <div>
                <div>{this.state.post.title}</div>
                <div>{this.state.post.body}</div>
            </div>
        )
    }
}

export default PostDetail;