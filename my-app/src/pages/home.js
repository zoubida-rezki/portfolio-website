
import React, {Component }from 'react';
 import { Link } from 'react-router-dom';
 import BannerImage from "../assets/ma9am_alshahid.jpg";
 import "../styles/Home.css";

// prob just gonna make this the about me screen 
class Home extends Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
  }

    callAPI(){
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res}))
          .catch( err => err);
    }

    componentDidMount(){
      this.callAPI();
    }
render(){
  return (
    <div className='home' style ={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer' >
        {/* <h1> pizza pizza </h1> */}
        {/* <p>write down something chessey </p> */}

        <Link to = "/menu">
        {/* <button>order now</button> */}
        </Link>

      </div>
      <p>bjvsbas;{this.state.apiResponse}</p>

    </div>
  )}
}

export default Home





// import React from 'react';
//  import { Link } from 'react-router-dom';
//  import BannerImage from "../assets/ma9am_alshahid.jpg";
//  import "../styles/Home.css";

// // prob just gonna make this the about me screen 
// function  Home() {
//   constructor(props);{
//     super(props);
//     this.state = {apiResponse: ""};
//   }

//     callAPI();{
//       fetch("http://localhost:9000/testAPI")
//           .then(res => res.text())
//           .then(res => this.setState({ apiResponse: res}))
//           .catch( err => err);
//     }

//     componentDidMount();{
//       this.callAPI();
//     }

//   return (
//     <div className='home' style ={{backgroundImage: `url(${BannerImage})`}}>
// <p className="App-intro">;{this.state.apiResponse}</p>
//       <div className='headerContainer' >
//         {/* <h1> pizza pizza </h1> */}
//         {/* <p>write down something chessey </p> */}

//         <Link to = "/menu">
//         {/* <button>order now</button> */}
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Home