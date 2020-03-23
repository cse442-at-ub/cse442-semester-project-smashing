import React from "react";
import Login from "./project";

export default function (mount, callback) {
	return {
		heading: "Login",
				onPress: _ => mount(<Login parentCallback={callback} />)	
	}
}

 