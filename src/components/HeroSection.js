import React from 'react';

const HeroSection=()=>{
	return(
		<section class="hero-section">
			<div class="top-youtube " id="video-placeholder" ></div>
			<img src="" alt="a man wearing a pair of glasses"/>
			
			<div class="hero-content">
				<div class="hero-details">
				
						<img src="./img/energy-logo.png"/>
					
					
					<div class="details-lower">
						<h1>Black Coffee</h1>
						<p>On the other hand, we denounce with righteous indignation 
						and dislike men who are so beguiled and 
						demoralized by the charms of pleasure of the moment.</p>
						<button heroPlayBtn title="Play"> <img src="./img/play.png"/>WATCH NOW</button>
					</div>
				</div>
			
			
				<div class="hero-nav-button-case">
					<button></button>
					<button></button>
					<button></button>
				</div>
				
			</div>
		</section>
	)
}

export default HeroSection;