import { firestore } from '@/firebase/config'
import { getDocs, collection } from 'firebase/firestore'

const getCollection = async (collectionName) => {
	let documents = []
	let error = null

	try {
		const querySnapshot = await getDocs(collection(firestore, collectionName))

		querySnapshot.forEach((doc) => {
			documents = [...documents, { id: doc.id, ...doc.data() }]
		})
	} catch (e) {
		error = e.message
		console.error('Произошла ошибки при получении документов ', e)
	}

	return { documents, error }
}

export default getCollection
