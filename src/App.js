// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import IndexOutfits from './components/outfits/IndexOutfits'
import IndexUserOutfits from './components/outfits/IndexUserOutfits'
import IndexCasualOutfits from './components/tag/Casual'
import IndexVintageOutfits from './components/tag/Vintage'
import IndexGrungeOutfits from './components/tag/Grunge'
import IndexGothOutfits from './components/tag/Goth'
import IndexPunkOutfits from './components/tag/Punk'
import IndexBohoOutfits from './components/tag/Boho'
import IndexArtsyOutfits from './components/tag/Artsy'
import IndexDateNightOutfits from './components/tag/DateNight'
import IndexSummerLookOutfits from './components/tag/SummerLook'
import IndexSpringLookOutfits from './components/tag/SpringLook'
import IndexFallLookOutfits from './components/tag/FallLook'
import IndexWinterLookOutfits from './components/tag/WinterLook'
import IndexWesternOutfits from './components/tag/Western'
import IndexSexyOutfits from './components/tag/Sexy'
import IndexSportyOutfits from './components/tag/Sporty'
import IndexFormalOutfits from './components/tag/Formal'
import IndexDayOutfits from './components/tag/Day'
import IndexEveningOutfits from './components/tag/Evening'
import ShowOutfit from './components/outfits/ShowOutfit'
import CreateOutfit from './components/outfits/CreateOutfit'
import ChangePassword from './components/auth/ChangePassword'


const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])

	console.log('user in app', user)
	console.log('message alerts', msgAlerts)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id))
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route path='/outfits' element={<IndexOutfits msgAlert={msgAlert} />} />
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route
					path='/addOutfit'
					element={
						<RequireAuth user={user}>
							<CreateOutfit msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path='/outfits/:id'
					element={<ShowOutfit msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/outfits/user/:id'
					element={<IndexUserOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/vintage'
					element={<IndexVintageOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/casual'
					element={<IndexCasualOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/grunge'
					element={<IndexGrungeOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/goth'
					element={<IndexGothOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/punk'
					element={<IndexPunkOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/boho'
					element={<IndexBohoOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/artsy'
					element={<IndexArtsyOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/datenight'
					element={<IndexDateNightOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/summerlook'
					element={<IndexSummerLookOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/springlook'
					element={<IndexSpringLookOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/falllook'
					element={<IndexFallLookOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/winterlook'
					element={<IndexWinterLookOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/western'
					element={<IndexWesternOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/sexy'
					element={<IndexSexyOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/sporty'
					element={<IndexSportyOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/formal'
					element={<IndexFormalOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/day'
					element={<IndexDayOutfits msgAlert={msgAlert} user={user} />}
				/>
				<Route
					path='/tags/evening'
					element={<IndexEveningOutfits msgAlert={msgAlert} user={user} />}
				/>

			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
