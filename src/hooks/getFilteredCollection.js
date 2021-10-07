import { firestore } from '@/firebase/config'
import { getDocs, collection, query, where } from 'firebase/firestore'

const getFilteredCollection = async (collectionName, payload) => {
	let documents = []
	let error = null

	try {
		const querySnapshot = query(
			collection(firestore, collectionName),
			where('categories', 'array-contains', payload),
		)

		const filteredData = await getDocs(querySnapshot)

		filteredData.forEach((doc) => {
			documents = [...documents, { id: doc.id, ...doc.data() }]
		})

		console.log(documents)
	} catch (e) {
		error = e.message
		console.error('Произошла ошибки при получении документов ', e)
	}

	return { documents, error }
}

export default getFilteredCollection
