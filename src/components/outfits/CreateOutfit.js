import React, { useState } from 'react'
import { createOutfit } from '../../api/outfit'
import { createOutfitSuccess, createOutfitFailure } from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import OutfitForm from '../shared/OutfitForm'

////////////////////////////////////////////////////////////////
// Create Place enders a form and calls the createPlace function
// When complete it navigates to the Spooky Places show page.
// props necessary are user and msgAlert
////////////////////////////////////////////////////////////////
const CreateOutfit = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()

    // we'll need two states
    const [outfit, setOutfit] = useState({
        img: '', description: '', date: '',
    })

    // console.log('In create place', place)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setOutfit(prevOutfit => {

            const name = e.target.name
            let value = e.target.value

            const updatedValue = { [name]: value }

            console.log('prevOutfit', prevOutfit)
            console.log('updatedValue', updatedValue)

            return { ...prevOutfit, ...updatedValue }
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createOutfit(user, outfit)

            .then(res => {
                navigate(`/outfits/${res.data._id}`)
            })
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'The Outfit has been Added!',
                    message: createOutfitSuccess,
                    variant: 'success',
                }))
            .catch(() =>
                // if there is an error, we'll send an error message
                msgAlert({
                    heading: 'Failed to create an Outfit!',
                    message: createOutfitFailure,
                    variant: 'danger',
                }))
    }

    return (
        <OutfitForm
            outfit={outfit}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add a new Outfit!"
        />
    )
}

export default CreateOutfit