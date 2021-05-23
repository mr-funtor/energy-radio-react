import React,{useState, useEffect,useCallback} from 'react'
import HeroSection from './components/HeroSection';
import EpisodeSection from './components/EpisodeSection';
import ConnectSection from './components/ConnectSection';
import FooterSection from './components/FooterSection';
import sanityClient from './client.js';
import './Main.css';


const url = 'https://course-api.com/javascript-store-products'

function App() {
	const [isLoading,setIsLoading]=useState(true);
	const [theData,setTheData]=useState();
	
	const getImages = useCallback(async () => {
		setIsLoading(true);
		const response = await sanityClient.fetch(`*[_type=="YoutubeSchema"]{
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
		}`
		);
		
		// const response = await fetch(url);
		console.log(response)
		// const data = await response.json();
		setTheData(response);
		setIsLoading(false);
	  }, []);
	
	useEffect(()=>{
		getImages ()
		// sanityClient.fetch(`*[_type == "post"]{
			// title,
			// slug,
			// mainImage{
				// asset->{
					// _id,
					// url
				// },
				// alt
			// }
		// }`)
		// .then(data=>console.log(data))
	},[])

	//SET THE LOADING ANIMATION
		if(isLoading){
			
			return(
			<main className="body-container">
				
					<div className="loading-page">
						<svg><rect></rect></svg>
					</div>
				
			</main>
			)
		}
	

  return (
    <main className="body-container">
		<HeroSection theData={theData}/>
		<EpisodeSection/>
		<ConnectSection/>
		<FooterSection/>
    </main>
  );
}

export default App;
