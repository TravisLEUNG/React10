import React from "react";
import { RiMailLine, RiLinkedinLine } from "react-icons/ri";

export default function ButtonGroup() {
	const email = "travisleung@rocketmail.com";
	const linkedIn = "www.linkedin.com/in/TravisLEUNG";

	return (
		<div className='button-group'>
			<button
				type='button'
				onClick={(e) => {
					e.preventDefault();
					window.location.href = `mailto:${email}`;
				}}
			>
				{/* <RiMailLine size={16}/> */}
				<h5>Email</h5>
			</button>
			<button
				type='button'
				onClick={(e) => {
					e.preventDefault();
					window.location.href = `https://${linkedIn}`;
				}}
			>
				{/* <RiLinkedinLine size={16}/> */}
				<h5>LinkedIn</h5>
			</button>
		</div>
	);
}
