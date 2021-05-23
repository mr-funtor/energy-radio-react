import React,{useState,useEffect,useRef} from 'react';



const HeroSection=({theData})=>{
	const [presentYoutube,setPresentYoutube]=useState();//this is for the Youtube URL's
	const  heroImage= useRef(null);//this references the full image that shows
	const  heroContent= useRef(null);//this references contents on the hero section
	const daYou=useRef(null);
	
	
	const randomGenerator=()=>{
		let newIndex= Math.floor(Math.random()*theData.length);//picks a random number
		heroImage.current.src=theData[newIndex].mainImage.asset.url;//changes the hero image that shows
		// presentYoutube=theData[newIndex].youtube;//changes the Youtube video source
		
		setPresentYoutube(theData[newIndex].URL)//sets the Youtube video url/source
		// "./img/hero-glasses.png"
		// console.log(newIndex,imageCatalogue[newIndex].picture )
	}
	
	const changeYoutubeVideo=()=>{
		// daYou.current.src='https://www.youtube.com/embed/qJhyhaf_uRs?autoplay=1'
		// console.log('yam',daYou)
		
		
		let newNumb=presentYoutube.indexOf('watch?v=')+8;
		let newExtract=presentYoutube.slice(newNumb,newNumb+11);//this extracts the Youtube videoID
		
		let newURL= `https://www.youtube.com/embed/${newExtract}?autoplay=1`
		console.log(newExtract,newURL)
		daYou.current.src=newURL
	}
	
// https://www.youtube.com/watch?v=dR_Fol8nAzo&t=3369s
	

	useEffect(()=>{
		randomGenerator();
		
	},[])
	
	
	
	return(
		<section className="hero-section" >
		
			<div className="top-youtube " id="video-placeholder" ><iframe  ref={daYou} src='https://www.youtube.com/embed/E7wJTI-1dvQ?'
				frameborder='0'
				allow='autoplay; encrypted-media'
				autoplay='1'
				allowfullscreen
				title='video'
				
			/></div>
			
			
			<img ref={heroImage} src="" alt="a man wearing a pair of glasses"/>
			
			<div ref={heroContent} className="hero-content">
				<div className="hero-details">
				
						<img src="./img/energy-logo.png"/>
					
					
					<div className="details-lower">
						<h1>Black Coffee</h1>
						<p>On the other hand, we denounce with righteous indignation 
						and dislike men who are so beguiled and 
						demoralized by the charms of pleasure of the moment.</p>
						<button onClick={()=>changeYoutubeVideo()} title="Play" > <img src="./img/play.png"/>WATCH NOW</button>
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