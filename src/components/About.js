import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructer")
  }

  // TO make API Calls
  componentDidMount() {
    // console.log("Parent componentDidMount")
  }
  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is my demo food ordering App</h2>
        <UserClass />
        {/* name ={"First child"} location = {"NGL"} twitter_username = {"Twitter handle: gosal_ram8"}/> */}
      </div>
    );
  }
}

export default About;
