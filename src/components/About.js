import { Component } from 'react';

import UserClass from './UserClass';

// class About extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//   }

//   render() {
//     return (
//       <div className="about-page">
//         {/* <h1>About Class Component</h1>
//         <h2>This is About Page</h2> */}
//         <UserClass name={'First'} location={'Badvel class'} />
//         {/* <UserClass name={'Second'} location={'Badvel class'} /> */}
//         {/* <UserClass name={'Third'} location={'Badvel class'} /> */}
//       </div>
//     );
//   }
// }

// * RENDER CYCLE OF CLASS BASED COMPONENTS WHEN THE CLASS HAS TWO CHLIDREN

/* 
*  - Parent Constructor()              -- Render Phase
*  - Parent Render()

*    - First Child Constructor()
*    - First Child Render()
*                                      -- Render Phase
*    - Second Child Constructor()
*    - Second Child Render()

*     <DOM UPDATED - IN SINGLE BATCH> -> Optimizes the Performance of App  -- Commit Phase
*    - First Child ComponentDidMount()
*    - Second Child ComponentDidMount()

*  - Parent ComponentDidMount()=


export default About;
*/
const About = () =>{
  return(
    <div>
      <h1>About</h1>
      <UserClass name={"Vaibhav"} location={"Greater Noida"}/>  {/*passing the props is done here*/}
    </div>
  )
}
export default About;