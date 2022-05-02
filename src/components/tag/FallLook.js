import React, { useState, useEffect } from 'react'
import { getTagOutfits } from '../../api/tag'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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

const IndexFallLookOutfits = (props) => {

    const [outfits, setOutfits] = useState(null)
    // const [tags, setTags] = useState(null)
    const { msgAlert } = props

    useEffect(() => {
        getTagOutfits("6268445ca44cc53ee2ece044")
            .then(res => {
                setOutfits(res.data.outfits)
                console.log("HITTTT");
                console.log("res.data.outfits", res.data.outfits);
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
                            <a style={{ textDecoration: 'none' }} href={`/tags/${tag.category.replace(/\s+/g, '')}`}>#{tag.category.replace(/\s+/g, '')}&nbsp;</a>
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
            <h3 style={{ textAlign: 'center', padding: '10px' }}>Fall Looks</h3>
            <div style={cardContainerLayout}>
                {outfitCards}
            </div>
        </>
    )
}

export default IndexFallLookOutfits