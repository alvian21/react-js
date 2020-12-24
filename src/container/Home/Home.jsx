import React, { Component, Fragment } from 'react';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import PostDetail from '../pages/BlogPost/PostDetail/PostDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends Component {

    state = {
        showComponent: true
    }

    componentDidMount() {
        //   setTimeout(()=>{
        //     this.setState({
        //         showComponent:false
        //     })
        //   },5000)
    }

    render() {
        return (
            <Router>
                {/* <div>
                    <p>Youtube Component</p>
                    <hr />
                    <YouTubeComp time="7.12" title="Youtube 1" />
                    <YouTubeComp time="8.02" title="Youtube 2" />
                    <YouTubeComp time="5.04" title="Youtube 3" />
                    <YouTubeComp time="4.12" title="Youtube 4" />
                    <YouTubeComp />

                    <p>Counter</p>
                    <hr />
                    <Product />

                    <p>LifeCycle Component</p>
                    <hr />
                    {
                        this.state.showComponent ?
                            <LifeCycleComp /> : null
                    }

                    <p>Blog Post</p>
                    <hr />
                    <BlogPost />

                </div> */}
                <Fragment>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Blog Post</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/product" className="nav-link">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/lifecycle" className="nav-link">Lifecycle</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/youtube" className="nav-link">Youtube</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/detail-post/:id" component={PostDetail} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube" component={YoutubeCompPage} />
                </Fragment>
            </Router>
        )
    }
}
export default Home; 