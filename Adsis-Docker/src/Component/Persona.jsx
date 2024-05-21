import React from "react";

const Persona = ({
	nama,
	role,
	foto,
	quote,
	goals,
	skill,
	ability,
	hobi,
	invers,
}) => {
	return (
		<div
			className={`flex bg-[#C490E4] w-3/4 mx-auto rounded-xl my-12 ring-4 ring-[#C490E4] ${
				invers
					? "drop-shadow-[-10px_10px_10px_rgba(196,144,228,1)] flex-row-reverse ms-52"
					: "drop-shadow-[10px_10px_10px_rgba(196,144,228,1)] ms-28"
			}`}
		>
			<img
				className={`align-middle w-[25rem] h-[37rem]  ${
					invers ? "rounded-e-xl" : "rounded-s-xl"
				}`}
				src={foto}
				alt={`${nama}'s portrait`}
			/>
			<div
				className={`grid grid-cols-2 gap-8 p-8 w-full bg-[#F9F9F9]  ${
					invers ? "rounded-s-xl" : "rounded-e-xl"
				}`}
			>
				<div className="col-span-2">
					<h1 className="font-bold text-4xl">{nama}</h1>
					<p className="font-light text-2xl">{role}</p>
				</div>
				<div className="col-span-2">
					<p className="text-3xl font-bold mb-2">Moto Hidup</p>
					<blockquote className="text-xl italic">{quote}</blockquote>
				</div>
				<div className="col-span-1">
					<div className="flex flex-col mt-4 mb-4">
						<p className="text-3xl font-bold">Skill</p>
						<ul className="mt-2">
							{skill.map((value, index) => (
								<li key={index} className="mt-1">
									{value}
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col mt-4">
						<p className="text-3xl font-bold">Hobi</p>
						<ul className="mt-2">
							{hobi.map((value, index) => (
								<li key={index} className="mt-1">
									{value}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="col-span-1">
					<div className="flex flex-col mt-4">
						<p className="text-3xl font-bold">Ability</p>
						<ul className="mt-2">
							{ability.map((value, index) => (
								<li key={index} className="mt-1">
									{value}
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col mt-4">
						<p className="text-3xl font-bold">Goal</p>
						<ul className="mt-2">
							{goals.map((value, index) => (
								<li key={index} className="mt-1">
									{value}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Persona;
