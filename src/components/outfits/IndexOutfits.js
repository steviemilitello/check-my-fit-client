import React, { useState, useEffect } from 'react'
import { getAllOutfits } from '../../api/outfit'
import { Card, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { indexOutfitsSuccess, indexOutfitsFailure } from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column'
}

const IndexOutfits = (props) => {

    const [outfits, setOutfits] = useState(null)
    const { msgAlert } = props

    console.log('outfits in app', outfits)

    useEffect(() => {
        getAllOutfits()
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
            < Card key={outfit._id} style={{ width: '30%' }} className="mb-2" >
                <Card.Body className="card-body d-flex flex-column justify-content-end">
                    <Card.Title> <a href={`/outfits/user/${outfit?.owner?._id}`}>{outfit?.owner?.email.split('@')[0]}</a></Card.Title>

                    <p><img class="outfit-image" src={outfit.img}></img></p>

                    <Card.Text className="card-text">
                        <p>Date: <Moment format="MMMM DD, YYYY">{outfit.date}</Moment></p>
                        <p>Description: {outfit.description}</p>
                        <p>Tags:</p>
                        {outfit.tags.map(tag => (
                            <p><li>{tag.category}</li></p>
                        ))}
                        <p><Link to={`/outfits/${outfit._id}`}>
                            <Button variant="secondary">View</Button>
                        </Link></p>
                    </Card.Text>
                </Card.Body>
            </Card >
        ))
    }

    return (
        <>
            <h3>All the Outfits</h3>
            <div style={cardContainerLayout}>
                {outfitCards}
            </div>
        </>
    )
}

export default IndexOutfits