import React from "react";
import Digit from "./Digit";

const Home = ({ seconds }) => {

	const unidad = seconds % 10;
	const decena = Math.floor(seconds / 10) % 10;
	const centena = Math.floor(seconds / 100) % 10;
	const mil = Math.floor(seconds / 1000) % 10;
	const diezMil = Math.floor(seconds / 10000) % 10;
	const cienMil = Math.floor(seconds / 100000) % 10;

	return (
		<div style={{ display: "flex", justifyContent: "center", gap: "10px", background: "black", padding: "20px" }}>
			<Digit num={cienMil} />
			<Digit num={diezMil} />
			<Digit num={mil} />
			<Digit num={centena} />
			<Digit num={decena} />
			<Digit num={unidad} />
		</div>
	);
};

export default Home;