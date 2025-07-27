import React from 'react';
import lb from '../assets/chef.jpg';
import main from '../assets/food.jpg';
import by from '../assets/loc.jpg';
function Work() {
	return (
		<div name="work" class="flex min-h-screen items-center justify-center bg-bgprim">
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
				<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:bg-bgprim/30">
					<div class="h-96 w-72">
						<img
							class="h-full w-full object-cover transition-transform duration-500   group-hover:scale-125"
							src={main}
							alt=""
						/>
					</div>
					<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
					<div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
						<h1 class="font-dmserif text-3xl font-bold text-white">FoodForAll</h1>
						<p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							a platform connecting
surplus food providers with NGOs/individuals to
reduce food wastage
						</p>
						<a href="https://food-for-all-ten.vercel.app/home.html" target="_blank" rel="noopener noreferrer">
  <button class="rounded-full bg-primary/30 py-2 px-3.5 font-com text-sm capitalize text-white shadow">
    Check Github
  </button>
</a>
					</div>
				</div>
				<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:bg-bgprim/30">
					<div class="h-96 w-72">
						<img
							class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
							src={by}
							alt=""
						/>
					</div>
					<div class="z-10 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
					<div class="z-10 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
						<h1 class="font-dmserif text-3xl font-bold text-white">
							IPV4 Geolocation Tracker
						</h1>
						<p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							A web-based IP geolocation tracker to
locate and display the approximate geographic
location of IPv4 addresses
						</p>
						<button class="rounded-full bg-primary/30 py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
						<link rel="stylesheet" href="https://beautifulyou-website.vercel.app/" target="_blank" />
							Check Github
						</button>
					</div>
				</div>
				<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:bg-bgprim/30">
					<div class="h-96 w-72">
						<img
							class="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
							src={lb}
							alt=""
						/>
					</div>
					<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
					<div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
						<h1 class="font-dmserif text-3xl font-bold text-white">
							Restaurant Backend Manager
						</h1>
						<p class="mb-1 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							A restaurant and cloud-kitchen
management software to streamline order tracking,
customer databases, and sales analysis
						</p>
						<button class="rounded-full bg-primary/30 py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
						<link rel="stylesheet" href="https://github.com/Kadambini30/Vital-Ease" target="_blank" />
							Check Github
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Work;
