import React from 'react'
import Persona from '../Component/Persona'
import foto from "../assets/persona.png"
import ref from "../assets/foto.jpg";
import { useEffect, useState } from 'react'

const LandingPage = () => {
	const [roles,setRole] = useState([]);
  useEffect(()=>{
   const fetchData = async () => {
    const res = await fetch ('http://localhost:8000')
    const data = await res.json()
    console.log(data)
    setRole(data)
   }
   fetchData();
  },[])
	return (
		<>
		 {
                roles.map((role, i) => (
                    <h2 key={i}>{role.nama}</h2>
                ))
            }
			{/* <div className="">
				<h2 className="text-center text-3xl font-bold mt-14">Our Teams</h2>
				<Persona
					foto={ref}
					nama="Lenatheaa"
					role="Front End"
					quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg"
					ability={["Cantik", "Baik", "Pintar"]}
					goals={["Jadi Dokter"]}
					hobi={["Membaca buku", "Mendengarkan musik", "Belajar"]}
					skill={["Bermain gitar", "Bermain drum", "Bermain Klarinet"]}
				/>
				<Persona
					foto={ref}
					nama="Lenatheaa"
					role="Front End"
					quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg"
					ability={["Cantik", "Baik", "Pintar"]}
					invers={true}
					goals={["Jadi Dokter"]}
					hobi={["Membaca buku", "Mendengarkan musik", "Belajar"]}
					skill={["Bermain gitar", "Bermain drum", "Bermain Klarinet"]}
				/>
				<Persona
					foto={ref}
					nama="Lenatheaa"
					role="Front End"
					quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg"
					ability={["Cantik", "Baik", "Pintar"]}
					goals={["Jadi Dokter"]}
					hobi={["Membaca buku", "Mendengarkan musik", "Belajar"]}
					skill={["Bermain gitar", "Bermain drum", "Bermain Klarinet"]}
				/>
				<Persona
					foto={ref}
					nama="Lenatheaa"
					role="Front End"
					quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg"
					ability={["Cantik", "Baik", "Pintar"]}
					invers={true}
					goals={["Jadi Dokter"]}
					hobi={["Membaca buku", "Mendengarkan musik", "Belajar"]}
					skill={["Bermain gitar", "Bermain drum", "Bermain Klarinet"]}
				/>
				<Persona
					foto={ref}
					nama="Lenatheaa"
					role="Front End"
					quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg"
					ability={["Cantik", "Baik", "Pintar"]}
					goals={["Jadi Dokter"]}
					hobi={["Membaca buku", "Mendengarkan musik", "Belajar"]}
					skill={["Bermain gitar", "Bermain drum", "Bermain Klarinet"]}
				/>
				<Persona
					foto={ref}
					nama="Lenatheaa"
					role="Front End"
					quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg"
					ability={["Cantik", "Baik", "Pintar"]}
					invers={true}
					goals={["Jadi Dokter"]}
					hobi={["Membaca buku", "Mendengarkan musik", "Belajar"]}
					skill={["Bermain gitar", "Bermain drum", "Bermain Klarinet"]}
				/>
				<Persona
					foto={ref}
					nama="Lenatheaa"
					role="Front End"
					quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg"
					ability={["Cantik", "Baik", "Pintar"]}
					goals={["Jadi Dokter"]}
					hobi={["Membaca buku", "Mendengarkan musik", "Belajar"]}
					skill={["Bermain gitar", "Bermain drum", "Bermain Klarinet"]}
				/>
				<Persona
					foto={ref}
					nama="Lenatheaa"
					role="Front End"
					quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg"
					ability={["Cantik", "Baik", "Pintar"]}
					invers={true}
					goals={["Jadi Dokter"]}
					hobi={["Membaca buku", "Mendengarkan musik", "Belajar"]}
					skill={["Bermain gitar", "Bermain drum", "Bermain Klarinet"]}
				/>
			</div> */}
		</>
	);
};

export default LandingPage