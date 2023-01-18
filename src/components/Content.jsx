import React from "react";

export default function Content() {
	return (
		<div className='content'>
			<div>
				<h3>About</h3>
				<p>
					Hey there, I'm Travis. I got into development during college
					when I realized I loved making things look cool. I taught
					myself HTML, CSS, JS, and React and now mostly work on
					building web apps and API services. My main goal is to make
					sure everything works great and looks good while being easy
					to use. I'm always looking for new ways to improve my skills
					and stay up-to-date with the latest technologies in the
					industry. I find it extremely rewarding to see a project
					come to life from idea to implementation and it's always a
					great feeling when users find it useful. I’m excited about
					new challenges and opportunities to grow as a developer and
					love to take on new projects and tackle different types of
					development problems.
				</p>
			</div>
			<div>
				<h3>Interests</h3>
				<p>
					<span className='bold'>Hiking</span>.{" "}
					<span className='bold'>Wakeboarding</span>.{" "}
					<span className='bold'>Snowboarding</span>.{" "}
					<span className='bold'>Music</span>.{" "}
					<span className='bold'>Gym</span>.{" "}
					<span className='bold'>Travel</span>.{" "}
					<span className='bold'>Food</span>.
				</p>
			</div>
		</div>
	);
}
