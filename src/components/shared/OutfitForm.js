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
                        value={outfit.tags.push("vintage")}
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="casual"
                        name="casual"
                        value="casual"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="grunge"
                        name="grunge"
                        value="grunge"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="goth"
                        value="goth"
                        name="goth"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="punk"
                        name="punk"
                        value="punk"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="boho"
                        name="boho"
                        value="boho"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="artsy"
                        name="artsy"
                        value="artsy"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="date night"
                        name="date night"
                        value="date night"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="summer look"
                        name="summer look"
                        value="summer look"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="spring look"
                        name="spring look"
                        value="spring look"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="fall look"
                        name="fall look"
                        value="fall look"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="winter look"
                        name="winter look"
                        value="winter look"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="western"
                        name="western"
                        value="western"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="sexy"
                        name="sexy"
                        value="sexy"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="sporty"
                        name="sporty"
                        value="sporty"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="formal"
                        name="formal"
                        value="sporty"
                        onChange={handleChange}

                    />
                    <Form.Check
                        inline
                        label="day"
                        name="day"
                        value="day"
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="evening"
                        name="evening"
                        value="evening"
                        onChange={handleChange}
                    />
                    <br />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default OutfitForm