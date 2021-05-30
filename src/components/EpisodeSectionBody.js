import React, {useState} from 'react';

const EpisodeSectionBody=()=>{
	const [seasonActive, setSeasonActive]=useState(false);
	
	return(
		<>
			<div className="header-container">
				<div>
					<span>
						<div className="top-dash"></div>
						<div className="video-box">
							<img src="./img/play-white.png" alt=""/>
							<img src="./img/play-box.png" alt=""/>
						</div>
					</span>
					<h2>EPISODES</h2>
				</div>
				
				<button onClick={()=>setSeasonActive(!seasonActive)}>Season 1 <img src="./img/down-arrow.png" alt="" /></button>
				<div className={seasonActive?"episodes-dropdown active" :"episodes-dropdown"} ></div>
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
		</>
	)
}

export default EpisodeSectionBody