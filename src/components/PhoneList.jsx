import React from 'react';
import {Card} from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import CardPhoneInfo from "../utils/CardPhoneInfo";
import CardPhoneButtons from "../utils/CardPhoneButtons";

const PhoneList = (props) => {

    const phoneList = props.phoneList;

    const handleDelete = (id, filename) => {
        deletePhone(id, filename).then();
    }

    const deletePhone = async (id, filename) => {
        try {
            await axios.delete('/phone/' + id);
            await axios.delete('/uploads/' + filename);
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
                                <CardPhoneButtons id={phone.id} filename={phone.imageEncryptedFileName}
                                                  handleDelete={handleDelete}/>
                            </Card.Body>
                        </Card>
                    ) : <h2 className="fw-bold-3">No phones to show</h2>
            }
        </div>
    );
};

export default PhoneList;
