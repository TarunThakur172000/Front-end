// Filename: ./components/ToggleSwitch.js

import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label }) => {
return (
	<div className="container">
	{label}{" "}
	<div className="toggle-switch">
		<input type="checkbox" checked className="checkbox"
			name={label} id={label} />
		<label className="label" htmlFor={label}>
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>
	</div>
);
};

export default ToggleSwitch;
