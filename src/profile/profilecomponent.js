import { checkPropTypes } from "prop-types";
import React from "react";
import image from "./image.jpg";
import PropTypes from 'prop-types';
import {Button,Alert} from 'react-bootstrap';



function Profilecomponent ({fullname, profession, bio, children, handleName}) {

return (
<div>

<h1 style= {{color:"purple", fontSize:100}}> {fullname} </h1>
<Button  variant="primary" onClick ={handleName(fullname)}>Alert</Button> 
<h2 style= {{color:"pink", fontSize:80}}>{profession}</h2>   
<h3 style={{color:"blue", fontSize:50,boxShadow:"0 5px 8px #000",textAlign:"center"}}><i> {bio} </i></h3> 
{children}

</div>
)
};
Profilecomponent.protoTypes ={
    fullname: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    children: PropTypes.object,

};

export default Profilecomponent