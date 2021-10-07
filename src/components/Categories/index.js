import React from 'react'
import { useDispatch } from 'react-redux'
import { getfilteredProducts } from './actions'
import categoryItems from './const'
import Item from './Item'
import './style.scss'

const Categories = () => {
	const dispatch = useDispatch()
	const [active, setActive] = React.useState(0)

	React.useEffect(() => {
		dispatch(getfilteredProducts(categoryItems[0].type))
	}, [])
	return (
		<div className='categories'>
			<ul className='categories__list'>
				{categoryItems.map((item, index) => (
					<Item key={item.icon} setActive={setActive} active={active} {...item} index={index} />
				))}
			</ul>
			<button>
				<svg
					width='16'
					height='4'
					viewBox='0 0 16 4'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z'
						fill='#C3CAD9'
					/>
				</svg>
				<span>All Categories</span>
			</button>
		</div>
	)
}

export default Categories
