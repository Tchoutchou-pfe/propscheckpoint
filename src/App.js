import React, { useImperativeHandle } from "react";
import Profilecomponent from "./profile/profilecomponent";
import image from './profile/image.jpg';

function app () {
const handleName=(fullname) => {
 alert (fullname) 
};

return (
<div classname='App'>

<Profilecomponent
fullname='Narjess' 
profession="Nature Lover"
bio="Me, Myself and I ! " >
<img style= {{width:500, height:100}} src={image} alt="hello"/>
</Profilecomponent>

</div>
)
};

export default app 