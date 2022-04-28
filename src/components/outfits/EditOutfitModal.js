import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import OutfitForm from '../shared/OutfitForm'
import { editOutfitSuccess, editOutfitFailure } from '../shared/AutoDismissAlert/messages'

const EditOutfitModal = (props) => {
    const { user, show, handleClose, updateOutfit, msgAlert, triggerRefresh } = props
    const [outfit, setOutfit] = useState(props.outfit)

    const handleTagSelect = (e, tag) => {
        const outfitTags = outfit.tags

        let updatedTarget
        const checked = e.target.checked
        if (checked) {
            updatedTarget = outfitTags.push(tag)
        } else {
            let index = outfitTags.indexOf(tag)
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

            if (name === "tags" && e.target.checked) {
                value = e.target.checked
            } else if (name === "tags" && !e.target.checked) {
                value = false
            }

            const updatedValue = { [name]: value }
            console.log("updatedValue", updatedValue)


            return { ...prevOutfit, ...updatedValue }
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        updateOutfit(user, outfit)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Outfit updated!',
                    message: editOutfitSuccess,
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Outfit update has failed!',
                    message: editOutfitFailure,
                    variant: 'danger',
                }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <OutfitForm
                    outfit={outfit}
                    handleChange={handleChange}
                    handleTagSelect={handleTagSelect}
                    handleSubmit={handleSubmit}
                    heading="Edit your Outfit!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditOutfitModal