import React from "react";

class UserClass extends React.Component{
    
    constructor(props) {
        super(props);
        // console.log(props);
        // console.log("Child Constructer")
        this.state = {
            userInfo:{
                name: "dummy",
                location:"default",
                twitter_username: "default",
            },
        };
    }
    
    async componentDidMount(){
        // console.log("componentDidMount")
        //API CALL
        const data = await fetch("https://api.github.com/users/gosalram");
        const json = await data.json();
        // console.log("API Data updated");
        // after getting api call ,calling setState to updating state variable

        this.setState({
            userInfo: json,
        });
        // console.log(json);
    }
    componentDidUpdate(){
        // console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        // console.log("componentWillUnmount");
    }
    
    render(){
        const {name,location,twitter_username} =this.state.userInfo;
            //    console.log("child render")
        return(         
            <div className="user-card">        
                <h2>{"Name: "+name}</h2>
                <h3>{"Location: "+location}</h3>
                <h3>{"X profile :"+twitter_username}</h3>
            </div>
        );
    }
}

export default UserClass;