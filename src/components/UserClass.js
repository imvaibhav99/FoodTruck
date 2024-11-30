import React from 'react';   //react.component comes from react through import

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);

//     // console.log(props);
//     this.state = {
//       // count: 0,
//       // count2: 2,
//       userInfo: {
//         name: 'Dummy',
//         location: 'Default',
//       },
//     };
//     // console.log(this.props.name + 'Child Constructor');
//   }

//   async componentDidMount() {
//     // console.log(this.props.name + 'Child Component Did Mount');
//     // * API call
//     const data = await fetch(
//       'https://api.github.com/users/Sreenivasulu-Kalluru'
//     );
//     const json = await data.json();

//     this.setState({
//       userInfo: json,
//     });

//     console.log(json);
//   }

//   componentDidUpdate() {
//     console.log('Component Did Update');
//   }

//   componentWillUnmount() {
//     console.log('Component Will Unmount');
//   }

//   render() {
//     // const { name, location } = this.props;
//     // const { count } = this.state;

//     // console.log(this.props.name + 'Child Render');

//     const { name, location, avatar_url } = this.state.userInfo;

//     return (
//       <div className="user-card">
//         <img src={avatar_url} alt={name} />
//         {/* // * accessing the state variable */}
//         {/* <h1>Count: {this.state.count}</h1> */}
//         {/* <h1>Count: {count}</h1> */}
//         {/* <button
//           onClick={() => {
//             // * NEVER UPDATE STATE VARIABLES DIRECTLY
//             // this.state.count = this.state.count + 1;

//             // * USE setState() method instead

//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           Count Increase
//         </button> */}
//         {/* <h2>Name: {this.props.name}</h2> */}
//         <h2>Name: {name}</h2>
//         {/* <h3>Location: {this.props.location}</h3> */}
//         <h3>Location: {location}</h3>
//         <h4>Contact: @vaasuk24</h4>
//       </div>
//     );
//   }
// }

// export default UserClass;

/* ****************************************************************
 *
 *
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */



class UserClass extends React.Component{
  constructor(props){   //in class based components,props are recieved over here
    super(props);    //we must also use superprops
    console.log(props);
    this.state={   //state variable in class based components
        userInfo:{
          name:"Dummy",
          location:" "

        }
    }
 }
  async componentDidMount(){
      const data = await fetch("https://api.github.com/users/imvaibhav99");
      const json=await data.json();
      //updating the state variable after api call
      this.setState({
        userInfo: json,
      });
      console.log(json)
  }
  render() {

    //const {count}=this.state;
    // const {name,location} = this. props; //destructuring ,if recieving props like this ,we call directly {name} and {location} instead of this.props.name etc. 
      const {name,location}=this.state.userInfo;

    return(
      <div className="user-card">
        {/* <h2>{this.props.name}</h2>
        <h2>{this.props.location}</h2> */}
        {/* <h1>Count:{count}</h1> */}
        {/*for increasing count i.e. to change the value of the state variables in  class based components we use already defined setState function i.e. setState(count+1) */}
        {/* <button onClick={()=>{
          this.setState({
            count:this.state.count + 1
          });
        }}>Increase</button> */}
        <h2>{name}</h2>  
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserClass;
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.state = {
//       userInfo: {
//         name: "Loading...", // Placeholder text before data is fetched
//         location: " "
//       }
//     };
//   }

//   async componentDidMount() {
//     try {
//       const data = await fetch("https://api.github.com/users/imvaibhav99");
//       const json = await data.json();
//       this.setState({
//         userInfo: json,
//       });
//       console.log(json);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       this.setState({
//         userInfo: {
//           name: "Error fetching user",
//           location: "Unknown"
//         }
//       });
//     }
//   }

//   render() {
//     const { name, location } = this.state.userInfo;

//     return (
//       <div className="user-card">
//         <h2>{name}</h2>
//         <h2>{location}</h2>
//       </div>
//     );
//   }
// }

// export default UserClass;
