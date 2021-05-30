import React,{useState,useEffect,useRef} from 'react';
import {useEpisodeGlobalContext} from './EpisodeGlobalContext';


const HeroSection=({theData})=>{
	const {changeYoutubeVideo,theIframe,heroImage,heroContent}=useEpisodeGlobalContext();
	const [presentYoutube,setPresentYoutube]=useState();//this is for the Youtube URL's
	
	
	
	//PICKING THE RANDOM PICTURE/VIDEO THAT WILL SHOW ON THE HERO
	const randomGenerator=()=>{
		let newData= theData.slice(0,7);//this is propdrilled form App.js
		console.log(newData)
		let newIndex= Math.floor(Math.random()*newData.length);//picks a random number
		heroImage.current.src=newData[newIndex].mainImage.asset.url;//changes the hero image that shows using the random number picked
		
		setPresentYoutube(newData[newIndex].URL)//sets the Youtube video url/source
	}

	
	useEffect(()=>{
		randomGenerator();
		
	},[])
	
	
	
	return(
		<section className="hero-section" >
		
			<div className="top-youtube " id="video-placeholder" ><iframe  ref={theIframe} src='https://www.youtube.com/embed/XqUQbAUnIkc?'
				title='video'
			></iframe></div>
			
			
			<img ref={heroImage} src="" alt="a man wearing a pair of glasses"/>
			
			<div ref={heroContent} className="hero-content">
				<div className="hero-details">
				
						<img src="./img/energy-logo.png" alt=""/>
					
					
					<div className="details-lower">
						<h1>Black Coffee</h1>
						<p>On the other hand, we denounce with righteous indignation 
						and dislike men who are so beguiled and 
						demoralized by the charms of pleasure of the moment.</p>
						<button onClick={()=>changeYoutubeVideo(presentYoutube)} title="Play" > <img src="./img/play.png" alt=""/>WATCH NOW</button>
					</div>
				</div>
			
			
				<div className="hero-nav-button-case">
					<button></button>
					<button></button>
					<button></button>
				</div>
				
			</div>
			
			
		</section>
	)
}

export default HeroSection;