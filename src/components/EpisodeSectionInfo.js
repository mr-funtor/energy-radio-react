import React, {useState,useCallback, useEffect} from 'react';
import sanityClient from '../client.js';


const EpisodeSectionInfo=()=>{
	// const [programData,setProgramData]=useState({});
	const [theInfo, setTheInfo]=useState('');
	const [slicedURL, setSlicedURL]=useState('');
	
		//fetches the data that supplies the info from Sanity IO
	const fetchSeason= useCallback(async()=>{
		const response=await sanityClient.fetch(`*[_type=="programInfo"]{
			  URL,
			  body[0]{
				children[0]{
				  text
				}
			  }
			}[0]`);
			
		setTheInfo(response.body.children.text);
		slicingUrl(response.URL);
	})
	
	
	
	
	const slicingUrl=(url)=>{
		const newUrl=url+'i';
		const sliced=newUrl.slice(-12,-1);
		setSlicedURL(sliced);
	}
	
	
	useEffect(()=>{
		fetchSeason();
		
	},[])


	
	
	
	return(
		<section className="info-section">
			<p className="info-breakdown">{theInfo || 'No information available'}</p>
			
<div className="episode-youtube " id="video-placeholder" ><iframe src={`https://www.youtube.com/embed/${slicedURL}?`}
				title='video'
			></iframe></div>
		</section>
	)
}

export default EpisodeSectionInfo