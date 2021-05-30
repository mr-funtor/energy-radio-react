import React from 'react';
import EpisodeSectionNav from './EpisodeSectionNav';
import EpisodeSectionBody from './EpisodeSectionBody';
import EpisodeSectionInfo from './EpisodeSectionInfo';
import {useEpisodeGlobalContext} from './EpisodeGlobalContext'

const EpisodeSection=()=>{
	const {activeInfoState}=useEpisodeGlobalContext();
	
	return(
	<section className="episodes-section">
		<EpisodeSectionNav/>
		{!activeInfoState && <EpisodeSectionBody/>}
		{activeInfoState && <EpisodeSectionInfo/>}
			
	</section>
	)
}

export default EpisodeSection;