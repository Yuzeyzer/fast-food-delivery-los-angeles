import React from 'react'
import updateDocument from '@/hooks/updateDocument'
import starIcon from './img/star-icon.svg'
import likeIcon from './img/like-icon.svg'
import timeIcon from './img/time-icon.svg'
import busketIcon from './img/busket-icon.svg'
import kebabIcon from './img/kebab-icon.svg'
import './style.scss'

const MainFoodProduct = ({ id, name, price, imageUrl, categories, rating, cookTime, isLiked }) => {
	const [like, setLike] = React.useState(isLiked)
	const { updateDoc } = updateDocument('bishkek', id)

	const handleLikeClick = async () => {
		setLike(!like)
		await updateDoc({ isLiked: !like })
	}
	return (
		<div className='main-product'>
			<div className='main-product__header'>
				<img className='main-product__image' src={imageUrl} alt={name} />
				<div className='main-product__cook-time'>
					<img src={timeIcon} alt='cook time' />
					<span>{cookTime} min</span>
				</div>
				<div onClick={handleLikeClick} className={`main-product__like ${like ? 'liked' : ''}`}>
					<img src={likeIcon} alt='like' />
				</div>
			</div>
			<div className='main-product__bottom'>
				<div className='main-product__details'>
					<h3 className='main-product__name'>{name}</h3>
					<div>
						<div className='main-product__rating'>
							<img src={starIcon} alt='rating 4.8' />
							<span>{rating}</span>
						</div>
						<div className='main-product__order'>
							<img src={busketIcon} alt='Order From 0$' />
							<span>Order From {price}$</span>
						</div>
					</div>
				</div>
				<div className='main-product__categories'>
					{categories.map((category) => {
						return <span key={category}>{category}</span>
					})}
					<img src={kebabIcon} alt='more categories' />
				</div>
			</div>
		</div>
	)
}

export default MainFoodProduct
