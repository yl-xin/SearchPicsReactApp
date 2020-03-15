import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// Inside <SearchBar>, runWhenonSubmit is a prop, we pass down the onSearchSubmit method to this prop
class App extends React.Component {
	// initialize state, set it to an array so we can use array methods later. 
	state={images:[]};
	
	onSearchSubmit=async (term)=>{
		// console.log(term);
		const response = await unsplash.get("/search/photos",{
			params:{query:term}
		});
		// console.log(response.data.results);
		this.setState({images:response.data.results});
	}
	render(){
		return (
			<div className = 'ui container' style ={{marginTop:'10px'}}>
				<SearchBar runWhenonSubmit={this.onSearchSubmit}/>
				{/* FOUND:{this.state.images.length} images */}
				<ImageList images={this.state.images} />
			</div>

		);
	}	
}

export default App;