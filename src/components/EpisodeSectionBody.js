import React, {useState, useEffect,useCallback} from 'react';
import sanityClient from '../client.js';
import {useEpisodeGlobalContext} from './EpisodeGlobalContext';

const EpisodeSectionBody=()=>{
	const{changeYoutubeVideo}=useEpisodeGlobalContext();
	const [seasonId, setSeasonId]=useState({})
	const [theData,setTheData]=useState([]);
	const [seasonActive, setSeasonActive]=useState(false);
	
	//this picks the first season from Sanity IO
	//here we fetch the 1st season id from sanity IO 
	const fetchSeason= useCallback(async()=>{
		const response=await sanityClient.fetch(`*[_type=="seasons"][0]._id`)
		
		// const data= await response.json();
		// setSeasonId(response)
		getEpisodes(response)
		
		console.log(response)
	})
	
	//this brings out only episodes that are linked to a particular season
	//the seasons' reference is gotten throught the id passed called 'theId'
	const getEpisodes = useCallback(async (theId) => {
		// setIsLoading(true);
		const response = await sanityClient.fetch(`*[references("${theId}")]{
			title,
			 description,
			  URL,
			  mainImage{
							asset->{
								_id,
								url
							},
							alt
						}
		}[0...8]`
		);
		
		// const response = await fetch(url);
		console.log(response)
		// const data = await response.json();
		setTheData(response);
		// setIsLoading(false);
	  }, []);
	
	useEffect(()=>{
		// getEpisodes()
		fetchSeason()
	},[])
	
	
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
			{
				theData.map((dat, index)=>{
					const{URL, title, mainImage,description}=dat;
					
					return(
					<article key={index} onClick={()=>changeYoutubeVideo(URL)}className="episode-box">
						<header>
							<img src={mainImage.asset.url} alt=""/>
						</header>
						
						<footer>
							<p>{title}</p>
							<h3>{description}</h3>
							
						</footer>
					</article>
					)
				})
			}
			
				
				
			</div>
			
			<button className="load-more">Load More</button>
		</>
	)
}

export default EpisodeSectionBody