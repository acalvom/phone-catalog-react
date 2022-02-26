import React from 'react';
import {Button, ButtonToolbar, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const PhoneList = (props) => {

    const phoneList = props.phoneList;

    const handleDelete = (id) => {
        deletePhone(id).then();
    }

    const deletePhone = async (id) => {
        try {
            await axios.delete('/phone/' + id);
            window.location.reload(false);
        } catch (e) {
            console.log(e.response.data[0])
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: e.response.data[0],
                background: 'rgb(228 255 162)'
            })
        }
    }

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {
                phoneList.length > 0 ?
                    phoneList.map(phone =>
                        <Card key={phone.id} className="card-phone">
                            <Card.Img variant="top" src={phone.imageFilePath} alt={phone.name}/>
                            <Card.Body>
                                <div className="mb-2">
                                    <Card.Title>{phone.name}</Card.Title>
                                    <Card.Subtitle
                                        className="mb-2 text-warning">{phone.manufacturer}</Card.Subtitle>
                                    <Card.Text>{phone.price}€</Card.Text>
                                </div>
                                <div>
                                    <ButtonToolbar className="card-phone-button-toolbar">
                                        <Link to={`/phone/${phone.id}`}>
                                            <Button variant="dark">See details</Button>
                                        </Link>
                                        <Button variant="danger" onClick={() => handleDelete(phone.id)}>Delete</Button>
                                    </ButtonToolbar>
                                </div>
                            </Card.Body>
                        </Card>
                    ) : <h2 className="fw-bold-3">No phones to show</h2>
            }
        </div>
    );
};

export default PhoneList;
