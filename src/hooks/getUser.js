import React, { useState } from 'react'
import { auth } from '../firebase/config'

const GetUser = () => {
	let [user, setUser] = useState(auth.currentUser)

	auth.onAuthStateChanged((_user) => {
		setUser(_user)
	})

	return { user }
}

export default GetUser
