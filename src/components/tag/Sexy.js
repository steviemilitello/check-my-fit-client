import React, { useState, useEffect } from 'react'
import { getSexyOutfits } from '../../api/tag'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { indexOutfitsSuccess, indexOutfitsFailure } from '../shared/AutoDismissAlert/messages'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexSexyOutfits = (props) => {

    const [outfits, setOutfits] = useState(null)
    const { msgAlert } = props

    useEffect(() => {
        getSexyOutfits()
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

            < Card key={outfit._id} style={{ width: '30%' }} className="m-2" >
                <Card.Body className="card-body d-flex flex-column justify-content-end">
                    <Card.Title> <a href={`/outfits/user/${outfit?.owner?._id}`}>{outfit?.owner?.email}</a></Card.Title>
                    <p><img class="outfit-image" src={outfit.img}></img></p>

                    <Card.Text className="card-text">
                        <p>Date: {outfit.date}</p>
                        <p>Description: {outfit.description}</p>
                        <p>Rating: {outfit.rating}</p>
                        {outfit.tags.map(tag => (
                            <p>Tags: {tag.category}</p>
                        ))}
                        <Link to={`/outfits/${outfit._id}`}>
                            <Button variant="secondary">View</Button>
                        </Link>
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

export default IndexSexyOutfits