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
        img: '', description: '', date: '', tags: [],
    })

    const [tag] = useState({
        outfits: []
    })


    const handleTagSelect = (e) => {
        const outfitTags = outfit.tags
        let updatedTarget
        const checked = e.target.checked

        if (checked) {
            updatedTarget = outfitTags.push(e.target.value)

        } else {
            let index = outfitTags.indexOf(e.target.value)
            outfitTags.splice(index, 1)
            updatedTarget = outfitTags
        }
        return { ...updatedTarget }
    }

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
        console.log('outfit', outfit)
        console.log('tag', tag)

        createOutfit(user, outfit, tag)
            // if create is successful, we should navigate to the show page
            .then(res => { navigate(`/outfits/${res.data._id}`) })

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
            handleTagSelect={handleTagSelect}
            handleSubmit={handleSubmit}
            heading="Add a new Outfit!"
        />
    )
}

export default CreateOutfit