import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const OutfitForm = (props) => {

    const { outfit, handleSubmit, handleChange, heading } = props

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
                <Form.Label>Tags</Form.Label><br />
                <Form.Check
                    inline
                    label="vintage"
                    name="vintage"
                    value="626587550dbd6c533ca22e9e"
                />
                <Form.Check
                    inline
                    label="casual"
                    name="casual"
                />
                <Form.Check
                    inline
                    label="grunge"
                    name="grunge"
                />
                <Form.Check
                    inline
                    label="goth"
                    name="goth"
                />
                <Form.Check
                    inline
                    label="punk"
                    name="punk"
                />
                <Form.Check
                    inline
                    label="boho"
                    name="boho"
                />
                <Form.Check
                    inline
                    label="artsy"
                    name="artsy"
                />
                <Form.Check
                    inline
                    label="date night"
                    name="date night"
                />
                <Form.Check
                    inline
                    label="summer look"
                    name="summer look"
                />
                <Form.Check
                    inline
                    label="spring look"
                    name="spring look"
                />
                <Form.Check
                    inline
                    label="fall look"
                    name="fall look"
                />
                <Form.Check
                    inline
                    label="winter look"
                    name="winter look"
                />
                <Form.Check
                    inline
                    label="western"
                    name="western"
                />
                <Form.Check
                    inline
                    label="sexy"
                    name="sexy"
                />
                <Form.Check
                    inline
                    label="sporty"
                    name="sporty"
                />
                <Form.Check
                    inline
                    label="formal"
                    name="formal"
                />
                <Form.Check
                    inline
                    label="day"
                    name="day"
                />
                <Form.Check
                    inline
                    label="evening"
                    name="evening"
                />
                <br />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default OutfitForm