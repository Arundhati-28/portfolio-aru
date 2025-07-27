import React from 'react';
import c from '../assets/c.png';
import java from '../assets/java.png';
import astro from '../assets/mysql.png';
import me from '../assets/aru.jpeg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import tw from '../assets/supabase.jpg';
import next from '../assets/next.svg';
import deluge from '../assets/delugelogo.jpeg';
import firebase from '../assets/python.svg.png';
import { MdDownload } from 'react-icons/md';
function About() {
	return (
		<>
			<div name='about' className="w-full h-full  bg-bgprim selection:bg-primary selection:text-bgprim">
				<div className="h-fit xl:h-screen w-full bg-bgprim flex flex-col justify-center items-start p-4 gap-6 pt-20 ">
					<div className="text-primary/40 text-3xl">Who am I?</div>
					<div className="bg-[#0e0e1c] w-full text-primary xl:drop-shadow-2xl  p-10 flex justify-center xl:justify-between flex-wrap h-fit">
						<div>
							<img
								src={me}
								alt=""
								className="rounded-full w-64 h-64 object-cover"
							/>
						</div>
						<div className="w-3/4 text-poppins text-xl flex flex-col gap-4 ">
							<div>
								Greetings! I am Arundhati Singh, currently a 3rd year student at VIT
								Chennai pursuing Computer Science & Engineering. I am an
								aspiring front-end developer.
							</div>
							<div>
								{' '}
								With a strong academic background and a proven track record of developing 
								innovative software solutions, my technical skills include proficiency in 
								Python, Java, and web technologies, complemented by hands-on experience in design and content
								creation.
							</div>
							<div>
								I thrive in collaborative environments and am passionate about
leveraging technology for social good, as evidenced by my work on impactful
projects
							</div>
						</div>
					</div>
					<div className="bg-[#0e0e1c] w-full  text-bgprim xl:drop-shadow-2xl p-2 h-fit xl:h-36  text-poppins text-xl font-semibold">
						<div className="font-bold text-primary">
							Languages & Frameworks I use
						</div>
						<div className=" flex flex-wrap justify-evenly  pt-4">
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={js} alt="" className="h-12 w-10" />
								</div>
								<div>JavaScript</div>
							</div>
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={html} alt="" className="h-12 w-10" />
								</div>
								<div>HTML</div>
							</div>
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={css} alt="" className="h-12 w-10" />
								</div>
								<div>CSS</div>
							</div>
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={deluge} alt="" className="bg-white p-1 h-12 w-10" />
								</div>
								<div>Deluge</div>
							</div>
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={react} alt="" className="h-12 w-10" />
								</div>
								<div>React</div>
							</div>
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={tw} alt="" className="h-12 w-10" />
								</div>
								<div>Supabase</div>
							</div>
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={astro} alt="" className="h-12 w-10" />
								</div>
								<div>SQL</div>
							</div>
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={firebase} alt="" className="h-12 w-10" />
								</div>
								<div>Python</div>
							</div>
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={c} alt="" className="h-12 w-10" />
								</div>
								<div>C++</div>
							</div>
							<div className=" text-primary flex flex-col items-center">
								<div className="">
									<img src={java} alt="" className="h-12 w-10 bg-white" />
								</div>
								<div>Java</div>
							</div>
						</div>
					</div>
					{/* <div className="flex flex-col justify-center items-center w-full pt-6">
						<button className="border-2 border-primary text-primary flex items-center  my-8 px-4 py-3 mx-auto hover:bg-black">
							Download Resume
							<span className="mt-1">
								<MdDownload />
							</span>
						</button>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default About;
