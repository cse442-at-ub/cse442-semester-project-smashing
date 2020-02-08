
// handles all physics-based events of the app.

import _ from "lodash";
import Matter from "matter-js";

const distance = ([x1, y1], [x2, y2]) =>
	Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

// initializes and updates physics engine
const Physics = (state, { touches, time }) => {
	let engine = state["physics"].engine;

	Matter.Engine.update(engine, time.delta);

	return state;
};

// from handbook "rigid bodies", allows dragging of character
const MoveBox = (state, { touches }) => {
	let constraint = state["physics"].constraint;

	//-- Handle start touch
	let start = touches.find(x => x.type === "start");

	if (start) {
		let startPos = [start.event.pageX, start.event.pageY];

		let boxId = Object.keys(state).find(key => {
			let body = state[key].body;

			return (
				body &&
				distance([body.position.x, body.position.y], startPos) < 25
			);
		});

		if (boxId) {
			constraint.pointA = { x: startPos[0], y: startPos[1] };
			constraint.bodyB = state[boxId].body;
			constraint.pointB = { x: 0, y: 0 };
			constraint.angleB = state[boxId].body.angle;
		}
	}

	//-- Handle move touch
	let move = touches.find(x => x.type === "move");

	if (move) {
		constraint.pointA = { x: move.event.pageX, y: move.event.pageY };
	}

	//-- Handle end touch
	let end = touches.find(x => x.type === "end");

	if (end) {
		constraint.pointA = null;
		constraint.bodyB = null;
		constraint.pointB = null;
	}

	return state;
};

export { Physics, MoveBox };
