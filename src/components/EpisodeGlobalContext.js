import React, {useState,useContext}from 'react';

const AppContext = React.createContext();

const AppProvider=({children})=>{
	const [activeInfoState, setActiveInfoState]=useState(false);
	
	
	return(
		<AppContext.Provider 
		value={{
			activeInfoState,
			setActiveInfoState,
			
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
