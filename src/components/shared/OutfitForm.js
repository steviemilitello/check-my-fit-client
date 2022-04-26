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
                <input type="hidden" value={outfit.rating} name='Hot' />

                <Form.Label>Tags</Form.Label><br />
                <Form.Check
                    inline
                    label="vintage"
                    name="tags"
                    value="626587550dbd6c533ca22e9e"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="casual"
                    name="tags"
                    value="626587550dbd6c533ca22e9f"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="grunge"
                    name="tags"
                    value="626587550dbd6c533ca22ea0"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="goth"
                    name="tags"
                    value="626587550dbd6c533ca22ea1"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="punk"
                    name="tags"
                    value="626587550dbd6c533ca22ea2"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="boho"
                    name="tags"
                    value="626587550dbd6c533ca22ea3"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="artsy"
                    name="tags"
                    value="626587550dbd6c533ca22ea4"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="date night"
                    name="tags"
                    value="626587550dbd6c533ca22ea5"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="summer look"
                    name="tags"
                    value="626587550dbd6c533ca22ea6"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="spring look"
                    name="tags"
                    value="626587550dbd6c533ca22ea7"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="fall look"
                    name="tags"
                    value="626587550dbd6c533ca22ea8"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="winter look"
                    name="tags"
                    value="626587550dbd6c533ca22ea9"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="western"
                    name="tags"
                    value="626587550dbd6c533ca22eaa"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="sexy"
                    name="tags"
                    value="626587550dbd6c533ca22eab"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="sporty"
                    name="tags"
                    value="626587550dbd6c533ca22eac"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="formal"
                    name="tags"
                    value="626587550dbd6c533ca22ead"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="day"
                    name="tags"
                    value="626587550dbd6c533ca22eae"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="evening"
                    name="tags"
                    value="626587550dbd6c533ca22eaf"
                    onChange={handleChange}
                />
                <br />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default OutfitForm