import React, {useState} from 'react';
import {useEpisodeGlobalContext} from './EpisodeGlobalContext';

const EpisodeSectionNav=()=>{
	const {activeInfoState,setActiveInfoState}=useEpisodeGlobalContext();

	
	return(
		<nav className="info-container">
			<button className={!activeInfoState?'active' :''} onClick={()=>setActiveInfoState(false)}> <img src="./img/episode.png" alt=""/>Episodes</button>
			<button className={activeInfoState?'active' :''} onClick={()=>setActiveInfoState(true)}>Info</button>
		</nav>
	)
}

export default EpisodeSectionNav;