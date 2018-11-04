import React, {Component} from 'react';
import './branch.css';
import pitch from './images/pitch.png';
import arrow from './images/arrow.png';


const branch1 = {
    position: 'relative',
    marginTop : '2%',
    textAlign : 'center',
    height: '20%',
    maxWidth : '40%',
    marginLeft: '30%',
    padding : '1%',
    fontFamily: 'Marvel, sans-serif',
    fontSize : '148%',
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
    fontSize  : '280%',
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

class Branches extends Component{

    constructor(props){
        super(props);
        this.state = {
            branch : []

        }
    }


    async componentDidMount() {
        try {
            fetch('http://127.0.0.1:8000/blog/test').
                then(() => {
                    return {
                        "posts": [
                            {
                                "current_user": "akash",
                                "post_name": "Dusra Post",
                                "post_content": "FIr muje hi aana padaFIr muje hi aana pada FIr muje hi aana pada FIr muje hi aana pada FIr muje hi aana pada",
                                "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba",
                                "is_forked" : "true"
                            },
                            {
                                "current_user": "trupti",
                                "post_name": "Dusra Post k",
                                "post_content": "FIr muje kyu aana pada k FIr muje kyu aana pada k FIr muje kyu aana pada k FIr muje kyu aana pada k FIr muje kyu aana pada k",
                                "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba",
                                "is_forked" : "false"
                            },
                            {
                                "current_user": "Carnic",
                                "post_name": "Dusra Post k",
                                "post_content": "FIr muje nhi aana FIr muje nhi aana FIr muje nhi aana FIr muje nhi aana FIr muje nhi aana FIr muje nhi aana FIr muje nhi aana",
                                "csrf": "hVm5mg3HhgBQ2s8dYRVkcB59bSmAsfAy8AHHwNTirJCsh8EZ6vefNQvvRvEK13Ba",
                                "is_forked" : "true"
                            }
                        ]
                    }
            }).then(data => {
                    let posts = data.posts.map(post => {
                        return (
                            <div>
                            <div className="row">
                                <div className="col-md-8" style={branch1} >
                                    <div className="row">
                                        <div className="col-md-12">{post.post_content}
                                            <div style={para}>
                                                <img src={arrow} height={18} width={18}/>
                                            </div>
                                            <img src={pitch} height={32} width={28} style={imageStyle}/>
                                            <h5 style={user}>
                                                {post.current_user}
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
            <body>
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