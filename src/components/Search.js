import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ()=>{
	return (
		
		
		<div className='search'>
			{/* <span className='title'>Notes App</span> */}
			

		<MdSearch className='search-icons' size = '1.3em'/>
		<input type='text' placeholder='type to seach...'/>

	</div>);
};

export default Search;