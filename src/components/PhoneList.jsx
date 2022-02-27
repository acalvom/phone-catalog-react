import React from 'react';
import {Button, ButtonToolbar, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import CardPhoneInfo from "../utils/CardPhoneInfo";

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
                                <CardPhoneInfo phone={phone}/>
                                <div>
                                    <ButtonToolbar className="card-phone-button-toolbar">
                                        <Link to={`/phone/${phone.id}`}>
                                            <Button variant="dark"><i className="fa-solid fa-circle-info"/></Button>
                                        </Link>
                                        <Button variant="danger" onClick={() => handleDelete(phone.id)}><i
                                            className="fa-solid fa-trash-can"/></Button>
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
