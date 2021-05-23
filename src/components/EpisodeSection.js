import React from 'react';

const EpisodeSection=()=>{
	return(
		<section className="episodes-section">
			<nav className="info-container">
				<button className="active"> <img src="./img/episode.png"/>Episodes</button>
				<button>Info</button>
			</nav>
			
			<div className="header-container">
				<div>
					<span>
						<div className="top-dash"></div>
						<div className="video-box">
							<img src="./img/play-white.png"/>
							<img src="./img/play-box.png"/>
						</div>
					</span>
					<h2>EPISODES</h2>
				</div>
				
				<button>Season 1 <img src="./img/down-arrow.png"/></button>
			</div>
			
			<div className="episodes-container">
				<article className="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article className="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article className="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article className="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article className="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article className="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article className="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
				<article className="episode-box">
					<header></header>
					
					<footer>
						<p>EPISOPE 1</p>
						<h3>Black Coffee</h3>
					</footer>
				</article>
				
			</div>
			
			<button className="load-more">Load More</button>
		</section>
	)
}

export default EpisodeSection;