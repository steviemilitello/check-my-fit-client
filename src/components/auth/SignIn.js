import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Button'

const SignIn = (props) => {
    // constructor(props) {
    // 	super(props)

    // 	this.state = {
    // 		email: '',
    // 		password: '',
    // 	}
    // }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    // handleChange = (event) =>
    // 	this.setState({
    // 		[event.target.name]: event.target.value,
    // 	})

    const onSignIn = (event) => {
        event.preventDefault()
        console.log('the props', props)
        const { msgAlert, setUser } = props

        const credentials = { email, password }

        signIn(credentials)
            .then((res) => setUser(res.data.user))
            .then(() =>
                msgAlert({
                    heading: 'Sign In Success',
                    message: messages.signInSuccess,
                    variant: 'success',
                })
            )
            .then(() => navigate('/outfits'))
            .catch((error) => {
                setEmail('')
                setPassword('')
                msgAlert({
                    heading: 'Sign In Failed with error: ' + error.message,
                    message: messages.signInFailure,
                    variant: 'danger',
                })
            })
    }

    return (
        <div className='sign-in-page-div row'>
            <h2 className="sign-in-text">Is your fit straight fire?<br/>Ask the world and get your fit checked!</h2>
            <div className='sign-in-page col-sm-10 col-md-8 mx-1 mt-5'>
                <Card style={{ textAlign: 'left', height: '30%', width: '50%' }} className="sign-in-card mb-2" variant="light">
                <Form className="sign-in-form mb-3" onSubmit={onSignIn}>
                    <h3>Sign In</h3>
                    <Form.Group controlId='email'>
                        <Form.Control
                            className="auth-form-control"
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Control
                            className="auth-form-control"
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='button'>
                        <div className="d-grid gap-2">
                            <Button className="submit-button" size="lg" variant='dark' type='submit'>
                                Submit
                            </Button>
                        </div>
                    </Form.Group>
                </Form>
                </Card>
            </div>
        </div>
    )
}

export default SignIn
