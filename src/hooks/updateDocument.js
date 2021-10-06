import { firestore } from '@/firebase/config'
import { doc, updateDoc as update } from 'firebase/firestore'

const updateDocument = (collectionName, id) => {
	const docRef = doc(firestore, collectionName, id)

	const updateDoc = async (value) => {
		try {
			await update(docRef, value)
		} catch (err) {
			console.log(err)
		}
	}

	return { updateDoc }
}

export default updateDocument
