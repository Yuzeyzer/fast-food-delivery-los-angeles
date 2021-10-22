import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const UseSignup = async (email, password) => {
	let user
	let error
	try {
		user = await createUserWithEmailAndPassword(auth, email, password)
	} catch (err) {
		error = err.message
	}
	return { user, error }
}

export default UseSignup
