import React, { useState, useEffect } from 'react'
import { getOneOutfit, updateOutfit, removeOutfit } from '../../api/outfit'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import EditOutfitModal from './EditOutfitModal'
import Moment from 'react-moment'
import { showOutfitSuccess, showOutfitFailure, removeOutfitSuccess, removeOutfitFailure } from '../shared/AutoDismissAlert/messages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const ShowOutfit = (props) => {

    const [outfit, setOutfit] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const setVoted = useState(false)
    const { user, msgAlert } = props
    const { id } = useParams()
    const navigate = useNavigate()

    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneOutfit(id)
            .then(res => setOutfit(res.data.outfit))
            .then(() => {
                msgAlert({
                    heading: 'The outfit has been retrieved!',
                    message: showOutfitSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Failed to find the outfit',
                    message: showOutfitFailure,
                    variant: 'danger',
                })
            })
    }, [updated])

    const removeTheOutfit = () => {

        removeOutfit(user, outfit._id)
            .then(() => {
                msgAlert({
                    heading: 'The outfit has been removed!',
                    message: removeOutfitSuccess,
                    variant: 'success',
                })
            })
            .then(() => { navigate(`/outfits`) })
            .catch(() => {
                msgAlert({
                    heading: 'Spooky Place deletion failed.',
                    message: removeOutfitFailure,
                    variant: 'danger',
                })
            })
    }

    const addVote = (voteType) => {
        outfit[voteType] += 1

        if (outfit.hotVotes >= outfit.notVotes) {
            outfit.rating = 'Hot'
        } else {
            outfit.rating = 'Not'
        }
        updateOutfit(user, outfit)
            .then(() => setUpdated(true))
            .then(() => setVoted(true))
    }    // .catch(() =>)


    const hot = <FontAwesomeIcon icon={faFire} onClick={() => addVote('hotVotes')} disabled={setVoted} />
    const not = <FontAwesomeIcon icon={faBan} onClick={() => addVote('notVotes')} disabled={setVoted} />



    if (!outfit) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    return (
        <>
            <Container className="fluid mt-5">
                <Card>
                    <Card.Header className='card-title'></Card.Header>
                    <Card.Body className="d-flex justify-content-start">
                        <Card.Title> <a href={`/outfits/user/${outfit?.owner?._id}`}>{outfit?.owner?.email.split('@')[0]}</a></Card.Title>
                        <img className="show-page-img" src={outfit.img}></img>
                        <Card.Text className="show-page-card">
                            <p>Date: <Moment format="MMMM DD, YYYY">{outfit.date}</Moment></p>
                            <p>Description: {outfit.description}</p>
                            <p>Rating: {outfit.rating}</p>
                            <p>Tags:</p>
                            {outfit.tags.map(tag => (
                                <p><li>{tag.category}</li></p>
                            ))}
                            <h4>{hot} or {not}</h4>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="show-footer">
                        {
                            outfit.owner && user && (user._id === outfit.owner._id)
                                ?
                                <>
                                    <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                                        Edit Outfit
                                    </Button>
                                    <Button onClick={() => removeTheOutfit()} className="m-2" variant="danger">
                                        Delete Outfit
                                    </Button>
                                </>

                                :

                                null

                        }

                    </Card.Footer>
                </Card>
            </Container>
            <EditOutfitModal
                outfit={outfit}
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateOutfit={updateOutfit}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default ShowOutfit