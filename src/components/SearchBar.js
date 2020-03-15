import React from 'react';

class SearchBar extends React.Component{
	state= {term:''};
	// the function name doesn't matter, the prop name onChange matters. 
	// onInputChange(event){
	// 	console.log(event.target.value);
	// }
	
	// event handler
	onFormSubmit =(event )=>{
		event.preventDefault();// prevent the browser submit the form automatically and refresh the page
		// console.log(this.state.term)
		this.props.runWhenonSubmit(this.state.term);

	};

	render(){
		return (
			<div className= 'ui segment'>
				<form onSubmit = {this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Image Search</label>
						<input 
							type="text" 
							value = {this.state.term } 
							onChange= {e=> this.setState({term:e.target.value})} 
						/>
					</div>
				</form>
			</div>
			);
	}
}

export default SearchBar;