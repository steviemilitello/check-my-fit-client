import React, { useState, useEffect } from 'react'
import { getOneOutfit, updateOutfit, removeOutfit } from '../../api/outfit'
import { createComment, removeComment } from '../../api/comment'
import { createVote } from '../../api/vote'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button, Form } from 'react-bootstrap'
import EditOutfitModal from './EditOutfitModal'
import Moment from 'react-moment'
import { showOutfitSuccess, showOutfitFailure, removeOutfitSuccess, removeOutfitFailure, createCommentSuccess, createCommentFailure } from '../shared/AutoDismissAlert/messages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const ShowOutfit = (props) => {

    const [outfit, setOutfit] = useState(null)
    const [comment, setComment] = useState(null)
    const [vote, setVote] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    // const [voted, setVoted] = useState(false)
    const { user, msgAlert } = props
    const { id } = useParams()
    const navigate = useNavigate()
    console.log("this is outfit", outfit)
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
                    heading: 'outfit deletion failed.',
                    message: removeOutfitFailure,
                    variant: 'danger',
                })
            })
    }

    const addVote = (vote) => {
        createVote(user, outfit._id, vote)
        const votes = outfit?.votes?.map(vote => {
            return vote.vote
        })

        updateOutfit(user, outfit, vote)
            .then(() => setUpdated(true))
        // .then(() => setVoted(true))
    }



    const didUserVote = () => {
        if (outfit && user) {
            const voters = outfit?.votes?.map(vote => {
                return vote.voter
            })
            // setVoted(voters.includes(user._id))
            return voters.includes(user._id)
        } else {
            return false
        }
    }


    const hot = <FontAwesomeIcon icon={faFire} onClick={() => addVote('Hot')} disabled={didUserVote()} />
    const not = <FontAwesomeIcon icon={faBan} onClick={() => addVote('Not')} disabled={didUserVote()} />

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        createComment(user, outfit._id, { note: comment })
            .then(() =>
                msgAlert({
                    heading: 'The Comment has been Added!',
                    message: createCommentSuccess,
                    variant: 'success',
                }))
            .then(() => setUpdated(true))
            .catch(() =>
                // if there is an error, we'll send an error message
                msgAlert({
                    heading: 'Failed to create a Comment!',
                    message: createCommentFailure,
                    variant: 'danger',
                }))
    }

    const removeTheComment = (outfit, comment) => {

        removeComment(user, outfit, comment)

            .then(() => setUpdated(true))
            .catch(() => {
                msgAlert({
                    heading: 'Comment deletion failed.',
                    message: 'failed to delete your comment',
                    variant: 'danger',
                })
            })
    }

    let hotVote = 0
    let notVote = 0
    outfit?.votes?.map(vote => {
        if (vote.vote === "Hot") {
            hotVote += 1
        } else if (vote.vote === "Not")
            notVote += 1
    }
    )

    const showRating = () => {
        const votes = outfit?.votes?.map(vote => {
            return vote.vote
        })
        // console.log("votes in addVote", votes)

        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
        const hotCount = countOccurrences(votes, 'Hot')
        const notCount = countOccurrences(votes, 'Not')

        // console.log("hotVotes & notVotes", hotCount, notCount)
        if (hotCount >= notCount) {
            return outfit.rating = 'Hot'
        } else {
            return outfit.rating = 'Not'
        }
    }

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
                            <p>Description: {outfit?.description}</p>
                            <p>Rating: {showRating()}</p>
                            <p>Tags:</p>
                            {outfit.tags.map(tag => (
                                <p><li>{tag?.category}</li></p>
                            ))}

                            <h4>{hot} or {not}</h4>

                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="show-footer">
                        {
                            outfit.owner && user && (user._id === outfit.owner._id)
                                ?
                                <>
                                    <p>Hot votes: {hotVote}</p>
                                    <p>Not votes: {notVote}</p>
                                    <voteShow />
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
                <Form onSubmit={handleCommentSubmit}>
                    {
                        user ?
                            <p>
                                <Form.Group className="mb-3">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Comment" onChange={(e) => setComment(e.target.value)} />
                                    <Button
                                        variant="secondary"
                                        type="submit">
                                        Submit
                                    </Button>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </p>
                            :
                            null
                    }
                </Form>

                {outfit.comments.map((comment) => (
                    comment?.author === user?._id ?
                        (<Card>
                            <Card.Title><a href={`/outfits/user/${comment?.author}`}>{comment?.name}</a></Card.Title>
                            <Card.Body className="show-page-card">
                                <p>{comment?.note}</p>
                                <p>Date: <Moment format="MMMM DD, YYYY">{comment?.date}</Moment></p>
                            </Card.Body>
                            <Card.Footer>
                                <Button onClick={() => removeTheComment(outfit?._id, comment?._id)}>Delete</Button>
                            </Card.Footer>
                        </Card>)
                        :
                        (<Card>
                            <Card.Title><a href={`/outfits/user/${comment?.author}`}>{comment?.name}</a></Card.Title>
                            <Card.Body className="show-page-card">
                                <p>{comment.note}</p>
                                <p>Date: <Moment format="MMMM DD, YYYY">{comment.date}</Moment></p>
                            </Card.Body>
                        </Card>)
                ))}
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