import React, { useImperativeHandle } from "react";
import Profilecomponent from "./profile/profilecomponent";
import image from './profile/image.jpg';

function app () {
const handleName=(name) => {
 alert ('my name is '  + name) 

}

return (
<div classname='App'>

<Profilecomponent
fullname='Narjess' 
profession="Nature Lover"
bio="Me, Myself and I ! "
handleName={handleName} >
<img style= {{width:500, height:100}} src={image} alt="hello"/>
</Profilecomponent>



</div>
)
};

export default app 