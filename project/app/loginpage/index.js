import React from "react";
import Login from "./project";

export default function (mount) {
	return {
		heading: "Login",
				onPress: _ => mount(<Login />)	
	}
}

 