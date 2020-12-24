import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = (props) => {
    return (
        <div className="col-md-4">
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="https://placeimg.com/200/150/tech" />
            <div className="card-body">
                <p className="card-title" onClick={()=>props.goDetail(props.data.id)} style={{cursor:'pointer'}} >{props.data.title}</p>
                <p className="card-text">{props.data.body}</p>
                <button onClick={() => props.update(props.data)} className="btn btn-secondary">Update</button>
                <button onClick={() => props.remove(props.data.id)} className="btn btn-primary">Remove</button>
            </div>
        </div>  
        </div>
    )
}

export default Post;