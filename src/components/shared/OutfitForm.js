

import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

let arr = ["62684388d744f0c94e08d96e"];

const OutfitForm = (props) => {

    const { outfit, handleSubmit, handleTagSelect, handleChange, heading } = props

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
                <Form.Check
                    inline
                    label="vintage"
                    name="tags"
                    value="62684388d744f0c94e08d96e"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="casual"
                    name="tags"
                    value="626843f81efda0f78eee013a"
                    onChange={handleTagSelect}
                // checked={''}

                />
                <Form.Check
                    inline
                    label="grunge"
                    name="tags"
                    value="62684405179727689c5b7bdd"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="goth"
                    name="tags"
                    value="6268440ffcbff9a62fb559a3"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="punk"
                    name="tags"
                    value="6268441b060587e9f3589ace"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="boho"
                    name="tags"
                    value="62684427588649b61b91f60b"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="artsy"
                    name="tags"
                    value="626844321c439ec9ab7d59c5"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="date night"
                    name="tags"
                    value="6268443d39595b809ff5dc7d"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="summer look"
                    name="tags"
                    value="62684447bd34ccc6f4221138"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="spring look"
                    name="tags"
                    value="62684451d7b7b8aa38d05671"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="fall look"
                    name="tags"
                    value="6268445ca44cc53ee2ece044"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="winter look"
                    name="tags"
                    value="626844651e599f9ff7444bb4"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="western"
                    name="tags"
                    value="62684471019f634d3b1e1a4f"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="sexy"
                    name="tags"
                    value="6268447bb36a69c922752027"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="sporty"
                    name="tags"
                    value="62684485991d04bd06a118e5"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="formal"
                    name="tags"
                    value="6268448f05a59aec41654998"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="day"
                    name="tags"
                    value="6268449877bf11746bedf4e5"
                    onChange={handleTagSelect}
                // checked={''}
                />
                <Form.Check
                    inline
                    label="evening"
                    name="tags"
                    value="626844a16c8d870164be1820"
                    onChange={handleTagSelect}
                // defaultChecked={tag.category.value}
                // checked={''}
                />
                <br />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default OutfitForm