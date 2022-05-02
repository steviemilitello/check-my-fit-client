import React, { useState, useEffect } from 'react'
import { getAllUserOutfits } from '../../api/outfit'
import { Card, Button } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { indexOutfitsSuccess, indexOutfitsFailure } from '../shared/AutoDismissAlert/messages'
import Moment from 'react-moment'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const linkStyle = {
    fontWeight: 'bold',
	color: 'black',
	textDecoration: 'none'
}

const IndexUserOutfits = (props) => {

    const { id } = useParams()
    const [outfits, setOutfits] = useState(null)
    const { msgAlert } = props

    useEffect(() => {
        getAllUserOutfits(id)
            .then(res => {
                setOutfits(res.data.outfits)
            })
            .then(() => {
                msgAlert({
                    heading: 'Outfits have been retrieved!',
                    message: indexOutfitsSuccess,
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Failed to retrieve Outfits!',
                    message: indexOutfitsFailure,
                    variant: 'danger',
                })
            })
    }, [])

    if (!outfits) {
        return <p>Loading ...</p>
    } else if (outfits.length === 0) {
        return <p>No Outfits yet, go add some</p>
    }

    let outfitCards

    if (outfits.length > 0) {
        outfitCards = outfits.map(outfit => (
            <Card key={outfit._id} style={{ width: '30%' }} className="index-page-cards mb-2" >
                <Card.Body className="card-body d-flex flex-column justify-content-end">
                    <div className="card-header-div row">
                        <Card.Title className="d-flex row-wrap"> <a style={linkStyle} href={`/outfits/user/${outfit?.owner?._id}`}>{outfit?.owner?.email.split('@')[0]}</a></Card.Title>
                        <p className="index-card-date d-flex"><small><Moment format="MMMM DD, YYYY">{outfit.date}</Moment></small></p>
                    </div>
                    <p><img class="outfit-image" src={outfit.img}></img></p>
                        <div className="align-content-flex-end">
                            <p className="index-card-rating">{outfit.rating}</p>
                        </div>
                    <Card.Text className="card-text">
                    
                        <p><b>{outfit.owner.email.split('@')[0]}</b> {outfit.description}</p>

                        {outfit.tags.map(tag => (
                            <a style={{ textDecoration: 'none' }}href={`/tags/${tag.category}`}>#{tag.category}&nbsp;</a>
                        ))}
                            <p></p>
                            <p><Link to={`/outfits/${outfit._id}`}>
                                <Button variant="dark">View</Button>
                            </Link></p>
                    </Card.Text>
                </Card.Body>
            </Card >
        ))
    }

    return (
        <>
            <h3>Profile</h3>
            <div style={cardContainerLayout}>
                {outfitCards}
            </div>
        </>
    )
}

export default IndexUserOutfits