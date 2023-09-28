import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputLabel = ({ label, placeholder }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div className="input-container">
			<input
				type="text"
				id="inputField"
				className={` input-field ${inputValue ? "filled" : ""}`}
				value={inputValue}
				onChange={handleInputChange}
				placeholder={placeholder}
			/>
			<label htmlFor="inputField" className="input-label">
				{label}
			</label>
		</div>
	);
};

export default InputLabel;
