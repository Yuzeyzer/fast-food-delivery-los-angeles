import React from 'react'
import starIcon from './img/star-icon.svg'
import likeIcon from './img/like-icon.svg'
import timeIcon from './img/time-icon.svg'
import mainFoodImg from './img/main-food-1.jpg'
import busketIcon from './img/busket-icon.svg'
import kebabIcon from './img/kebab-icon.svg'
import './style.scss'

const MainFoodProduct = () => {
	return (
		<div className='main-product'>
			<div className='main-product__header'>
				<img className='main-product__image' src={mainFoodImg} alt='product-name' />
				<div className='main-product__cook-time'>
					<img src={timeIcon} alt='cook time' />
					<span>60 min</span>
				</div>
				<div className='main-product__like'>
					<img src={likeIcon} alt='like' />
				</div>
			</div>
			<div className='main-product__bottom'>
				<div className='main-product__details'>
					<h3 className='main-product__name'>Planet of Stacks and Meats</h3>
					<div>
						<div className='main-product__rating'>
							<img src={starIcon} alt='rating 4.8' />
							<span>4.8</span>
						</div>
						<div className='main-product__order'>
							<img src={busketIcon} alt='Order From 0$' />
							<span>Order From 0$</span>
						</div>
					</div>
				</div>
				<div className='main-product__categories'>
					<span>Steaks</span>
					<span>Meat</span>
					<span>Vegetables</span>
					<img src={kebabIcon} alt='more categories' />
				</div>
			</div>
		</div>
	)
}

export default MainFoodProduct
