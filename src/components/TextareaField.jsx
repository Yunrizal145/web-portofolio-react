import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TextareaField = ({ label, placeholder }) => {
	const [textareaValue, setTextareaValue] = useState("");

	const handleTextareaChange = (event) => {
		setTextareaValue(event.target.value);
	};

	return (
		<div className="input-container">
			<textarea
				id="textareaField"
				className={`input-field textarea ${
					textareaValue ? "filled" : ""
				}`}
				value={textareaValue}
				onChange={handleTextareaChange}
				placeholder={placeholder}
			/>
			<label htmlFor="textareaField" className="input-label">
				{label}
			</label>
		</div>
	);
};

export default TextareaField;
