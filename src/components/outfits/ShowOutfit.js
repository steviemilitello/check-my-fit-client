import React, { useState, useEffect } from 'react'
import { getOneOutfit } from '../../api/outfit'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card } from 'react-bootstrap'
import { showOutfitSuccess, showOutfitFailure } from '../shared/AutoDismissAlert/messages'

const ShowOutfit = (props) => {

    const [outfit, setOutfit] = useState(null)
    // const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
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
                        <img className="show-page-img" src={outfit.img}></img>
                        <Card.Text className="show-page-card">
                            <p>Date: {outfit.date}</p>
                            <p>Description: {outfit.description}</p>
                            <p>Rating: {outfit.rating}</p>
                            {outfit.tags.map(tag => (
                                <p>Tags: {tag.category}</p>
                            ))}
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer className="show-footer">
                        {
                            outfit.owner && user && (user._id === outfit.owner._id)
                                ?
                                <>
                                    <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                                        Edit Outfit
                                    </Button>
                                </>

                                :

                                null

                        }

                    </Card.Footer> */}
                </Card>
            </Container>
            {/* <EditOutfitModal
                outfit={outfit}
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updatePlace={updateOutfit}
                handleClose={() => setModalOpen(false)}
            /> */}
        </>
    )
}

export default ShowOutfit