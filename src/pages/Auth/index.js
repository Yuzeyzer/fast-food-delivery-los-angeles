import React from 'react'
import Login from '../../components/Login'
import SignUp from '../../components/Signup'

const Auth = () => {
	const [user, setUser] = React.useState(true)
	return <div>{user ? <Login /> : <SignUp />}</div>
}

export default Auth
