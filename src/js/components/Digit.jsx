import React from "react";

const Digit = ({ num }) => {
	return (
		<div style={{
			color: "white",
			background: "#111",
			padding: "20px",
			fontSize: "30px"
		}}>
			{num}
		</div>
	);
};

export default Digit;