import { firestore } from '@/firebase/config'
import { doc, setDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

const addDocument = async (newDoc) => {
	const id = uuidv4()
	const docRef = doc(firestore, 'bishkek', id)
	try {
		await setDoc(docRef, newDoc)
	} catch (err) {
		console.log(err.message)
	}
}

export default addDocument
