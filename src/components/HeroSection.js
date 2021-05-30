import React,{useState,useEffect,useRef} from 'react';

const HeroSection=({theData})=>{
	const [presentYoutube,setPresentYoutube]=useState();//this is for the Youtube URL's
	const  heroImage= useRef(null);//this references the full image that shows
	const  heroContent= useRef(null);//this references contents on the hero section
	const theIframe=useRef(null);
	
	//PICKING THE RANDOM PICTURE/VIDEO THAT WILL SHOW ON THE HERO
	const randomGenerator=()=>{
		let newData= theData.slice(0,7);//this is propdrilled form App.js
		console.log(newData)
		let newIndex= Math.floor(Math.random()*newData.length);//picks a random number
		heroImage.current.src=newData[newIndex].mainImage.asset.url;//changes the hero image that shows using the random number picked
		
		setPresentYoutube(newData[newIndex].URL)//sets the Youtube video url/source
	}
	
	const changeYoutubeVideo=()=>{
		
		//RESTRUCTURE THE YOUTUBE LINK FROM 'WATCH' TO 'EMBED'
		let newNumb=presentYoutube.indexOf('watch?v=')+8;
		let newExtract=presentYoutube.slice(newNumb,newNumb+11);//this extracts the Youtube videoID
		
		let newURL= `https://www.youtube.com/embed/${newExtract}?autoplay=1`
		console.log(newExtract,newURL)
		theIframe.current.src=newURL
		heroContent.current.classList.add('inactive');//hides the hero contents
		heroImage.current.classList.add('inactive');//hides the hero Image
	}

	
	useEffect(()=>{
		randomGenerator();
		
	},[])
	
	
	
	return(
		<section className="hero-section" >
		
			<div className="top-youtube " id="video-placeholder" ><iframe  ref={theIframe} src='https://www.youtube.com/embed/XqUQbAUnIkc?'
				title='video'
			/></div>
			
			
			<img ref={heroImage} src="" alt="a man wearing a pair of glasses"/>
			
			<div ref={heroContent} className="hero-content">
				<div className="hero-details">
				
						<img src="./img/energy-logo.png" alt=""/>
					
					
					<div className="details-lower">
						<h1>Black Coffee</h1>
						<p>On the other hand, we denounce with righteous indignation 
						and dislike men who are so beguiled and 
						demoralized by the charms of pleasure of the moment.</p>
						<button onClick={()=>changeYoutubeVideo()} title="Play" > <img src="./img/play.png" alt=""/>WATCH NOW</button>
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