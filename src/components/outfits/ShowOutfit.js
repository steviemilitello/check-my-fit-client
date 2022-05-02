import React, { useState, useEffect } from 'react'
import { getOneOutfit, updateOutfit, removeOutfit } from '../../api/outfit'
import { createComment, removeComment } from '../../api/comment'
import { createVote } from '../../api/vote'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button, Form, CloseButton } from 'react-bootstrap'
import EditOutfitModal from './EditOutfitModal'
import Moment from 'react-moment'
import { showOutfitSuccess, showOutfitFailure, removeOutfitSuccess, removeOutfitFailure, createCommentSuccess, createCommentFailure } from '../shared/AutoDismissAlert/messages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const linkStyle = {
    fontWeight: 'bold',
	color: 'black',
	textDecoration: 'none'
}

const ShowOutfit = (props) => {

    const [outfit, setOutfit] = useState(null)
    const [comment, setComment] = useState(null)
    const [vote, setVote] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const setVoted = useState(false)
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
        let hotVotes = 0
        let notVotes = 0

        if (vote === "Hot") {
            hotVotes += 1
        } else if (vote === "Not") {
            notVotes += 1
        }
        console.log("hotVotes", hotVotes)
        console.log("notVotes", notVotes)
        // console.log("vote", vote);
        if (hotVotes >= notVotes) {
            outfit.rating = 'Hot'
        } else {
            outfit.rating = 'Not'
        }
        updateOutfit(user, outfit, vote)
            .then(() => setUpdated(true))
            .then(() => setVoted(true))
    }


    const hot = <FontAwesomeIcon icon={faFire} onClick={() => addVote('Hot')} disabled={setVoted} />
    const not = <FontAwesomeIcon icon={faBan} onClick={() => addVote('Not')} disabled={setVoted} />

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        console.log('this is e', e)
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
            <Container style={{width: '100%'}} className="fluid mt-3 d-flex row justify-content-center">
                <Card className="show-page-card" style={{ width: '70%' }}> 
                    <Card.Header></Card.Header>
                    <Card.Body className="d-flex align-self-center">
                            <div className="d-flex row justify-content-start">
                        <Card.Title> <a style={linkStyle} href={`/outfits/user/${outfit?.owner?._id}`}>{outfit?.owner?.email.split('@')[0]}</a></Card.Title>
                            <p className="index-card-date d-flex"><small><Moment format="MMMM DD, YYYY">{outfit.date}</Moment></small></p>
                            <img style={{ width: "100%" }}className="show-page-img" src={outfit.img}></img>
                        <Card.Text className="show-page-card-text d-flex row justify-content-center">
                            <p><b>{outfit.owner.email.split('@')[0]}</b> {outfit.description}</p>
                            <div className="align-content-flex-end">
                                <p className="index-card-rating">{outfit.rating}</p>
                            </div>
                            {outfit.tags.map(tag => (
                                <a style={{ textDecoration: 'none' }}href={`/tags/${tag.category}`}>#{tag.category}&nbsp;</a>
                            ))}
                            <p></p>
                            <h4>{hot} or {not}</h4>

                        </Card.Text>
                        </div>
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
                <Form style={{ width: '70%' }} onSubmit={handleCommentSubmit}>
                    {
                        user ?
                            <p>
                                <Form.Group className="mb-3">
                                    <Form.Label><b>Comment</b></Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Comment" onChange={(e) => setComment(e.target.value)} />
                                    <div className="submit-button-div">
                                        <Button
                                            className="submit-button"
                                            style={{ margin: '10px', padding: '7px' }}
                                            variant="dark"
                                            type="submit">
                                            Submit
                                        </Button>
                                    </div>
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
                        (<Card style={{ width: '70%' }} className="comment-card">
                            <Card.Body>
                                <div className="comment-date">
                                    <small><Moment format="MMMM DD, YYYY">{comment.date}</Moment></small>
                                    <CloseButton className="comment-button" variant="light" onClick={() => removeTheComment(outfit?._id, comment?._id)}/>
                                </div>
                                <div className="comment-card-body d-flex row-nowrap">
                                    <a className="comment-card-username" style={linkStyle} href={`/outfits/user/${comment?.author}`}>{comment?.name}</a>
                                    {comment.note}
                                </div>
                            </Card.Body>

                        </Card>)
                        :
                        (<Card style={{ width: '70%' }} className="comment-card">
                            <Card.Body>
                                <div className="comment-date">
                                    <small><Moment format="MMMM DD, YYYY">{comment.date}</Moment></small>
                                </div>
                                <div className="comment-card-body d-flex row-nowrap">
                                    <a className="comment-card-username" style={linkStyle} href={`/outfits/user/${comment?.author}`}>{comment?.name}</a>
                                    {comment.note}
                                </div>
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