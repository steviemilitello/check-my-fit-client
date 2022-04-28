

import React, { useEffect, useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { getTags } from '../../api/tag'

const OutfitForm = (props) => {
    const [tags, setTags] = useState([])

    const { outfit, handleSubmit, handleTagSelect, handleChange, heading } = props

    useEffect(() => {
        getTags()
            .then(res => {
                setTags(res.data.tags)
            })
    }, [])

    const selectedTags = outfit.tags.map(tag => tag._id)

    console.log('outfit', outfit)
    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Image</Form.Label>
                <Form.Control
                    placeholder="What does this outfit look like?"
                    value={outfit.img}
                    name='img'
                    onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                    placeholder="What is the description of this outfit?"
                    value={outfit.description}
                    name='description'
                    onChange={handleChange}
                />
                <Form.Label>Date</Form.Label>
                <Form.Control
                    placeholder="What date did you wear this outfit?"
                    value={outfit.date}
                    name='date'
                    onChange={handleChange}
                />
                <input type="hidden" value={outfit.rating} name='Hot' />

                <Form.Label>Tags</Form.Label><br />
                {tags.map((tag, index) => {
                    return (
                        <Form.Check
                            key={index}
                            inline
                            label={tag.category}
                            name="tags"
                            value={tag._id}
                            onChange={(e) => handleTagSelect(e, tag)}
                            defaultChecked={selectedTags.includes(tag._id)}
                        />
                    )
                })}
                <br />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default OutfitForm