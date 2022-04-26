
   
import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const OutfitForm = (props) => {

<<<<<<< HEAD
    const { outfit, handleSubmit, handleTagSelect, handleChange, heading } = props

=======
    const { outfit, handleSubmit, handleChange, heading } = props
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
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
<<<<<<< HEAD
                    value="626587550dbd6c533ca22e9e"
                    onChange={handleTagSelect}
=======
                    value="62684388d744f0c94e08d96e"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="casual"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22e9f"
                    onChange={handleTagSelect}
=======
                    value="626843f81efda0f78eee013a"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="grunge"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea0"
                    onChange={handleTagSelect}
=======
                    value="62684405179727689c5b7bdd"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="goth"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea1"
                    onChange={handleTagSelect}
=======
                    value="6268440ffcbff9a62fb559a3"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="punk"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea2"
                    onChange={handleTagSelect}
=======
                    value="6268441b060587e9f3589ace"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="boho"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea3"
                    onChange={handleTagSelect}
=======
                    value="62684427588649b61b91f60b"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="artsy"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea4"
                    onChange={handleTagSelect}
=======
                    value="626844321c439ec9ab7d59c5"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="date night"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea5"
                    onChange={handleTagSelect}
=======
                    value="6268443d39595b809ff5dc7d"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="summer look"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea6"
                    onChange={handleTagSelect}
=======
                    value="62684447bd34ccc6f4221138"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="spring look"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea7"
                    onChange={handleTagSelect}
=======
                    value="62684451d7b7b8aa38d05671"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="fall look"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea8"
                    onChange={handleTagSelect}
=======
                    value="6268445ca44cc53ee2ece044"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="winter look"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ea9"
                    onChange={handleTagSelect}
=======
                    value="626844651e599f9ff7444bb4"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="western"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22eaa"
                    onChange={handleTagSelect}
=======
                    value="62684471019f634d3b1e1a4f"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="sexy"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22eab"
                    onChange={handleTagSelect}
=======
                    value="6268447bb36a69c922752027"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="sporty"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22eac"
                    onChange={handleTagSelect}
=======
                    value="62684485991d04bd06a118e5"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="formal"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22ead"
                    onChange={handleTagSelect}
=======
                    value="6268448f05a59aec41654998"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="day"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22eae"
                    onChange={handleTagSelect}
=======
                    value="6268449877bf11746bedf4e5"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <Form.Check
                    inline
                    label="evening"
                    name="tags"
<<<<<<< HEAD
                    value="626587550dbd6c533ca22eaf"
                    onChange={handleTagSelect}
=======
                    value="626844a16c8d870164be1820"
                    onChange={handleChange}
>>>>>>> 747d92b1d009f0c8ba24e9208188e5b7b4ca605b
                />
                <br />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default OutfitForm