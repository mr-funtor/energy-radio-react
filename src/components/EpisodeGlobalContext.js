import React, {useState,useContext, useRef}from 'react';

const AppContext = React.createContext();

const AppProvider=({children})=>{
	const [activeInfoState, setActiveInfoState]=useState(false);//this determines if it's the 'Episodes' page or the 'Info' that shows 
	
	const theIframe=useRef(null);
	const  heroImage= useRef(null);//this references the full image that shows in the heroSection components
	const  heroContent= useRef(null);//this references contents on the hero section
	
		//PLAYING THE YOUTUBE VIDEO
	const changeYoutubeVideo=(theLink)=>{
		
		
		//change the part of the link from 'watch' to 'embed'
		let newNumb=theLink.indexOf('watch?v=')+8;
		let newExtract=theLink.slice(newNumb,newNumb+11);//this extracts the Youtube videoID
		let newURL= `https://www.youtube.com/embed/${newExtract}?autoplay=1`
		console.log(newExtract,newURL)
		theIframe.current.src=newURL
		
		heroContent.current.classList.add('inactive');//hides the hero contents
		heroImage.current.classList.add('inactive');//hides the hero Image
		window.scroll(0,0);//scrolls the page to the top
	}
	
	
	return(
		<AppContext.Provider 
		value={{
			activeInfoState,
			setActiveInfoState,
			changeYoutubeVideo,
			theIframe,
			heroImage,
			heroContent,
		}}
		>
			{children}
		</AppContext.Provider>
	)
}

const useEpisodeGlobalContext= () => {
  return useContext(AppContext);
};

export {AppContext, useEpisodeGlobalContext,AppProvider};
