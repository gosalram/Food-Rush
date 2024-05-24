import {useState} from "react";

const User = (props)=>{

    const [count1] = useState(0);
    const [count2] = useState(2);
    return(
        <div>
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            <h4>{props.contact}</h4>
            <h4>Count 1 value {count1}</h4>
            <h4>Count 1 value {count2}</h4>
        </div>
    )   
};

export default User;