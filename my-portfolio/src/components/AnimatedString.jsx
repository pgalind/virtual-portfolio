import React, { useEffect, useState } from "react";

function useTypewriter(target, speed, trigger) {
	const [text, setText] = useState("");

	useEffect(() => {
		if (!target) {
			setText("");
			return;
		}

		let index = 0;
		let current = "";

		const interval = setInterval(() => {
			current += target[index];
			setText(current);
			index++;

			if (index >= target.length) {
				clearInterval(interval);
			}
		}, speed);

		return () => clearInterval(interval); // clean up on unmount or target change
	}, [target, speed, trigger]);

	return text;
}

// trigger (optional) must be a boolean such as `isOpen` context variable from Sidebar
const AnimatedString = ({ input, speed = 100, trigger }) => {
	const animateString = useTypewriter(input, speed, trigger);
	const [typingFinished, setTypingFinished] = useState(false);

	useEffect(() => {
		if (!input) {
			setTypingFinished(false);
			return;
		}

		setTypingFinished(false);
		const timeoutId = setTimeout(() => {
			setTypingFinished(true);
		}, input.length * 2 * speed);

		return () => clearTimeout(timeoutId);
	}, [input, speed, trigger]);

	return (
		<>
			<span>{animateString}</span>
			{!typingFinished && <span className='blinking-cursor font-light'>|</span>}
		</>
	);
};

export default AnimatedString;
