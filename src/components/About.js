import React,{useState} from 'react'
import { withRouter } from 'react-router-dom';

export default function About(props) {
    
// const [myStyle,newStyle]=useState({
// backgroundColor:"white",
// color:"black"

// });
// const[btnText,newBtn]=useState("Enable Dark mode");
// const changeMode=()=>{
//     if(myStyle.backgroundColor=="white")
//     {

//     newStyle({
//     backgroundColor:"black",
//     color:"white",
//     border:"1px solid white"
//     });

//     newBtn("Enable Light Mode");

//     }

//     else{
//         newStyle(
//         {
//         backgroundColor:"white",
//         color:"black"
//         }
//      );

//      newBtn("Enable Dark Mode");

//     }

    

//}

  let myStyle={color:props.mode=="light"?"black":"white",
                backgroundColor:props.mode=="light"?"white":"grey",
                border:'2px solid',
                borderColor:props.mode=='light'?'black':'white'

               }

    return (
        <div className="container" >
            <h2 style={{color:props.mode=='light'?'black':'white'}}>About Us</h2>
           <div className="accordion" id="accordionExample">
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={myStyle}>
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutils gives you a way to analyze your text quickly and efficiently.
      </div>
    </div>
  </div>
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={myStyle}>
       <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This is the second item's accordion body.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 class="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={myStyle}>
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This is the third item's accordion body.
      </div>
    </div>
  </div>
</div>

{/* <button className="btn btn-primary my-3" onClick={changeMode}>{btnText}</button> */}
        </div>
    )
}
