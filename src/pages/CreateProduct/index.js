import React from 'react'
import addDocument from '@/hooks/addDocument'

const CreateProduct = () => {
	const [food, setFood] = React.useState({
		name: '',
		isLiked: false,
		categories: [],
		price: '',
		rating: '0',
		imageUrl: '',
		cookTime: 0,
	})

	const handleChange = (event) => {
		setFood((prev) => ({ ...prev, [event.target.name]: event.target.value }))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		await addDocument(food)
	}
	return (
		<form onSubmit={handleSubmit}>
			<label>Имя:</label>
			<input onChange={handleChange} name='name' value={food.name} type='text' />
			<label>Цена:</label>
			<input onChange={handleChange} name='price' value={food.price} type='text' />
			<label>Картинка:</label>
			<input onChange={handleChange} name='imageUrl' value={food.imageUrl} type='text' />
			<label>Время готовки:</label>
			<input onChange={handleChange} name='cookTime' value={food.cookTime} type='text' />
			<button>Создать продукт</button>
		</form>
	)
}

export default CreateProduct
