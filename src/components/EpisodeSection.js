import React from 'react';

const EpisodeSection=()=>{
	return(
		<section class="episodes-section">
			<nav class="info-container">
				<button class="active"> <img src="./img/episode.png"/>Episodes</button>
				<button>Info</button>
			</nav>
			
			<div class="header-container">
				<div>
					<span>
						<div class="top-dash"></div>
						<div class="video-box">
							<img src="./img/play-white.png"/>
							<img src="./img/play-box.png"/>
						</div>
					</span>
					<h2>EPISODES</h2>
				</div>
				
				<button>Season 1 <img src="./img/down-arrow.png"/></button>
			</div>
			
			<div class="episodes-container">
				<article class="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article class="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article class="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article class="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article class="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article class="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article class="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article class="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
			</div>
			
			<button class="load-more">Load More</button>
		</section>
	)
}

export default EpisodeSection;