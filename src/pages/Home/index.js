import React from 'react'
import Categories from '@components/Categories'
import MainFoodProduct from '@components/MainFoodProducts'
import getCollection from '@/hooks/getCollection'
import Preloader from '@components/Preloader'
import './style.scss'

const Home = () => {
	const [mainFoods, setMainFood] = React.useState([])
	React.useEffect(() => {
		;(async () => {
			const { documents: foods } = await getCollection('bishkek')
			setMainFood(foods)
		})()
	}, [])
	return (
		<section className='home'>
			<div className='container'>
				<div className='home__header'>
					<h1 className='home__title'>
						Fast <span>Food Delivery</span> in Los Angeles
						<span>FOOD DELIVERY</span>
					</h1>
					<div className='home__newsletter'>
						<svg
							width='20'
							height='16'
							viewBox='0 0 20 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.15 4.09 2 3.82 2 3.53C2 2.86 2.73 2.46 3.3 2.81L10 7L16.7 2.81C17.27 2.46 18 2.86 18 3.53C18 3.82 17.85 4.09 17.6 4.25Z'
								fill='#C3CAD9'
							/>
						</svg>
						<span> Subscribe To Our Newsletter</span>
					</div>
				</div>
				<div className='home__content'>
					<Categories />
					<div className='home__products'>
						{mainFoods.length ? (
							mainFoods.map((food) => {
								return <MainFoodProduct {...food} key={food.id} />
							})
						) : (
							<Preloader />
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
