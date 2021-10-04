import React from 'react'
import searchIcon from './icons/search.svg'
import './style.scss'

const Search = () => {
	return (
		<div className='header-search'>
			<img src={searchIcon} alt='searchbar' />
			<input type='text' placeholder='Search ...' />
		</div>
	)
}

export default Search
