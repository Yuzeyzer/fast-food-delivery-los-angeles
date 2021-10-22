import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/user/actions'
import UseSignup from '@/hooks/useSignup'
import userIcon from './icons/user.svg'
import emailIcon from './icons/email.svg'
import bgImage from './icons/bg.jpg'
import passwordIcon from './icons/password.svg'
import './styles.scss'

const SignUp = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	const handleSubmit = async (event) => {
		event.preventDefault()

		const { email, password, name } = event.target.elements

		const { error, user } = await UseSignup(email.value, password.value, name.value)

		if (error) {
			throw new Error(error)
		}

		dispatch(setUser(true))

		history.push('/')
	}
	return (
		<section className='sign-up section'>
			<div className='container'>
				<div className='row'>
					<div className='col-4'>
						<h1>
							Fast <b>Food Delivery</b>{' '}
						</h1>
						<p>
							Welcome Back! We glad to see you again! We hope that our products makes you happy. We
							always work to improve our product. Now you can login and see our news.
						</p>
						<form onSubmit={handleSubmit}>
							<label>Name</label>
							<div>
								<input name='name' type='text' placeholder='John Doe' required />
								<img src={userIcon} alt='Type your Name' />
							</div>
							<label>Email</label>
							<div>
								<input name='email' type='email' placeholder='tromp.velda@russel.biz' required />
								<img src={emailIcon} alt='Type your Email' />
							</div>
							<label>
								Password
								<span>
									Forgot Password? <a href=''>Restore</a>
								</span>
							</label>
							<div>
								<input
									name='password'
									type='password'
									placeholder='tromp.velda@russel.biz'
									required
								/>
								<img src={passwordIcon} alt='Type your Password' />
							</div>
							<button>Sign Up</button>
							<span className='auth__have-account'>
								Already have an account? <Link to='/auth/login'>Login</Link>
							</span>
						</form>
					</div>
					<div className='col-8'>
						<img src={bgImage} alt='Welcome to our Restaraunt' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default SignUp
