import React, { useState } from "react";
import "./CourseCard.css";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

let test2 = "hello"
// const setDetails = (test) => {
//   return console.log(test);
// }

function CourseCard({ image, title, test }) {
  const [card, setcard] = useState("C");
  
  return (
    <div style={cardStyle} className="CourseCard">
      <img className="CourseCard-img" src={image} alt="image here" />
      <h3 className="CourseCard-title">{title}</h3>
      <Link to="coursedescription" >
        <Button buttonStyle="btn--primary" buttonColor="primary" >
          <span onClick={() => {
            test2 = test;
          }}> Enroll Now</span>
        </Button>
      </Link>
       
    </div>
  );
}

const cardStyle = {
    width: 250,
    height: 320,
    margin: 10,
    padding: 10
}
export { CourseCard, test2 };



// class CourseCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       card: "C"
//     }
//     this.getCardDetails = this.getCardDetails.bind(this);
//   }
//    getCardDetails = () => {
//      let test2 = this.props.test;
     
//     //  this.setState({ card: test2 });
//     //  console.log(this.state.card, "##");
//   }
   
//    render() {
//     return (
//       <div style={cardStyle} className="CourseCard">
//         <img className="CourseCard-img" src={this.props.image} alt="image here" />
//         <h3 className="CourseCard-title">{this.props.title}</h3>
//         <Link to="coursedescription" >
//           <Button buttonStyle="btn--primary" buttonColor="primary" >
//             <span onClick={this.getCardDetails}> Enroll Now</span>
//           </Button>
//         </Link>
       
//       </div>
//     );
//   }
// }

