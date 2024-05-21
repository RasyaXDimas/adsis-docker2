import React, { useEffect, useState } from "react";
import Persona from "../Component/Persona";
import foto from "../assets/satu.png";

const LandingPage = () => {
	const [personas, setPersona] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("http://localhost:8000");
				const data = await res.json();
				console.log(data);
				setPersona(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			{personas.map((persona, index) => (
				<Persona
					key={index}
					nama={persona.nama}
					goals={persona.goals}
					role={persona.role}
					hobi={persona.hobi}
					foto={`http://localhost:8000/assets/${persona.foto}`}
					quote={persona.quote}
					skill={persona.bakat}
					ability={persona.kelebihan}
					invers={index % 2 === 0}
				/>
			))}
		</>
	);
};

export default LandingPage;
