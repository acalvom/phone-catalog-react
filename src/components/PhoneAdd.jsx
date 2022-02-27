import React, {useEffect} from 'react';
import Swal from "sweetalert2";
import {Col, Container, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import './PhoneAdd.css';
import InputFieldFormAddPhone from "./PhoneAddFormFields/InputFieldFormAddPhone";
import TextareaFieldFormAddPhone from "./PhoneAddFormFields/TextareaFieldFormAddPhone";
import SelectFieldFormAddPhone from "./PhoneAddFormFields/SelectFieldFormAddPhone";
import axios from "axios";

const PhoneAdd = () => {
    const {register, handleSubmit, reset, formState: {errors, isSubmitSuccessful}} = useForm();

    const convertToFormData = (data) => {
        const formNewPhone = new FormData();
        Object.keys({...data, phoneImage: data.phoneImage[0]}).forEach(key => {
            if (key === 'phoneImage') formNewPhone.append(key, data[key][0]);
            else formNewPhone.append(key, data[key]);
        });
        return formNewPhone;
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                phoneName: "",
                phoneManufacturer: "",
                phoneDescription: "",
                phoneColor: "",
                phonePrice: "",
                phoneScreen: "",
                phoneProcessor: "",
                phoneRam: ""
            });
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = async (data, event) => {
        event.preventDefault();
        addPhone(convertToFormData(data)).then();
    }

    const addPhone = async (formPhone) => {
        try {
            await axios.post('/add', formPhone);
            await Swal.fire({
                icon: 'success',
                title: 'Great!',
                text: 'Phone successfully created',
                background: 'rgb(228 255 162)'
            })
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
        <Container className="d-flex flex-wrap flex-column my-3 mx-auto align-content-center">
            <h2 className="phone-add-title"><i className="fa-solid fa-mobile"/> New phone</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="phone-add-form">
                <Row className="justify-content-between p-3">

                    <Col sm={10} md={4}>
                        <InputFieldFormAddPhone id="phoneName" label="Model" register={register}
                                                error={errors.phoneName}/>
                        <SelectFieldFormAddPhone id="phoneManufacturer" label="Manufacturer" register={register}
                                                 error={errors.manufacturer}/>
                        <TextareaFieldFormAddPhone id="phoneDescription" label="Description" register={register}
                                                   error={errors.phoneDescription}/>
                    </Col>

                    <Col sm={10} md={4}>
                        <InputFieldFormAddPhone id="phoneColor" label="Color" register={register}
                                                error={errors.phoneColor}/>
                        <InputFieldFormAddPhone id="phonePrice" label="Price" register={register}
                                                error={errors.phonePrice}/>
                        <InputFieldFormAddPhone id="phoneScreen" label="Screen" required={false}
                                                register={register}/>
                    </Col>

                    <Col sm={10} md={4}>
                        <InputFieldFormAddPhone id="phoneProcessor" label="Processor" required={false}
                                                register={register}/>
                        <InputFieldFormAddPhone id="phoneRam" label="RAM" register={register}
                                                error={errors.phoneRam}/>
                        <InputFieldFormAddPhone id="phoneImage" label="Image" type="file" register={register}
                                                error={errors.phoneImage}/>
                    </Col>

                </Row>

                <Row className="d-flex justify-content-center">
                    <button type="submit" className="btn">Add phone</button>
                </Row>
            </form>
        </Container>
    );
};

export default PhoneAdd;
