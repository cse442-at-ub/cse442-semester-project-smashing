import React from "react";
import CalorieCounter from "./project";
import { Text, View } from 'react-native';
import { render } from "react-dom";

export default function (mount) {
	
	return {
		heading: "Calorie Counter",
				onPress: _ => mount(<CalorieCounter />)
	}
}

 