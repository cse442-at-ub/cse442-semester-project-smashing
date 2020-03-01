import React from "react";
import Register from "./project";

export default function (mount) {
	return {
		heading: "Create Account",
				onPress: _ => mount(<Register />)	
	}
}

 