import React, {Component} from 'react';
import './branch.css';
import pitch from './images/pitch.png';
import arrow from './images/arrow.png';


const branch1 = {
    position: 'relative',
    marginTop : '2%',
    textAlign : 'center',
    height: '30%',
    maxWidth : '40%',
    marginLeft: '30%',
    padding : '1%',
    fontFamily: 'Marvel, sans-serif',
    fontSize : '48%',
    color : '#565454',
    backgroundColor : 'rgb(211, 208, 208, 0.6)',
    boxShadow :'3px, 3px'
}

const para = {
    textAlign : 'right',
    marginTop : '5%'

}

const title = {
    textAlign : 'center',
    fontFamily : '"Marvel", sans-serif',
    fontSize  : '80%',
    marginTop: '1%',
    color : '#DED6D6'
}

const imageStyle = {
    alignItems: 'center',
    marginTop : '-10%'
}

const user = {
    marginLeft: '-90%',
    marginTop: '-10%',
    color : 'rgb(66, 64, 64)'
}

const button = {
    fontSize : '33%',
    position : 'absolute',
    marginTop : '15%',
    marginLeft : '90%'
}


class Branches extends Component{

    constructor(props){
        super(props);
        this.state = {
            branch : []

        }
    }


    async componentDidMount() {
        try {
            fetch('http://ec2-18-220-22-245.us-east-2.compute.amazonaws.com:8080/blog/all_post/').
                then( result => {
                    return {"posts" : [{"author": "test", "post_name": "First Post", "content": "FIr muje hi aana pada Ir muje hi aana pada Ir muje hi aana pada", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"},
                            {"author": "test2", "post_name": "Second Post", "content": "FIr muje hi aana pada k Ir muje hi aana pada Ir muje hi aana pada", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"},
                            {"author": "test3", "post_name": "Third Post", "content": "Close to the goal Ir muje hi aana pada Ir muje hi aana pada", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"},
                            {"author": "test4", "post_name": "Fourth Post", "content": "FIr muje hi aana pada k Ir muje hi aana pada Ir muje hi aana pada", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"},
                            {"author": "test5", "post_name": "Fifth Post", "content": "FIr muje hi aana pada k Ir muje hi aana pada Ir muje hi aana pada Ir muje hi aana pada Ir muje hi aana pada", "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba"}]};
            }).then(data => {
                    let posts = data.posts.map(post => {
                        return (
                            <div>
                            <div className="row">
                                <div className="col-md-8" style={branch1} >
                                    <div className="row">
                                        <div className="col-md-12">{post.content}
                                            <div style={para}>
                                                <img src={arrow} height={18} width={18}/>
                                            </div>
                                            <a onClick={this.props.onBranchSelect} style = {button} > > </a>
                                            <h5 style={user}>
                                                {post.author}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })
                this.setState({branch: posts});
            })
        }catch (e) {
            console.log(e);
        }
    }

    render(){
        return(
            <body id = "bodyStyle" >
            <h1 style={title}>WHAT DO YOU WANNA WRITE ABOUT ? </h1>
                {this.state.branch}
            </body>
        );
    }


//     render(){
//         return(
//             <body >
//             <h1 style={title}>WHAT DO YOU WANNA WRITE ABOUT ? </h1>
//             <div className="row">
//                 <div className="col-md-8" style={branch1} >
//                     <div className="row">
//                         <div className="col-md-12">how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post.
//                             <div style={para}> -> </div>
//                             <img src={pitch} height={36} width={32} style={imageStyle}/>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-8" style={branch1} >
//                     <div className="row">
//                         <div className="col-md-12">how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. </div>
//                         <div style={para}> -> </div>
//                         <img src={pitch} height={36} width={32} style={imageStyle}/>
//                     </div>
//                 </div>
//                 <div className="col-md-8" style={branch1} >
//                     <div className="row">
//                         <div className="col-md-12">how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. </div>
//                         <div style={para}> -> </div>
//                         <img src={pitch} height={36} width={32} style={imageStyle}/>
//                     </div>
//                 </div>
//                 <div className="col-md-8" style={branch1} >
//                     <div className="row">
//                         <div className="col-md-12">how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. how do you want the first post. </div>
//                         <div style={para}> -> </div>
//                         <img src={pitch} height={36} width={32} style={imageStyle}/>
//                     </div>
//                 </div>
//             </div>
//             </body>
//         );
//     }
}




export default Branches;