import React from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import {Col, Container, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import './PhoneAdd.css';
import InputFieldFormAddPhone from "./InputFieldFormAddPhone";

const PhoneAdd = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const convertToFormData = (data) => {
        const formNewPhone = new FormData();
        Object.keys({...data, phoneImage: data.phoneImage[0]}).forEach(key => {
            if (key === 'phoneImage') formNewPhone.append(key, data[key][0]);
            else formNewPhone.append(key, data[key]);
        });
        return formNewPhone;
    }

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

                        <div className="phone-add-group">
                            <InputFieldFormAddPhone id="phoneName" label="Model" register={register}/>
                            {errors.phoneName && <span>Phone name is required</span>}
                        </div>
                        <div className="phone-add-group">
                            <label htmlFor="phoneManufacturer" className="form-label">Manufacturer</label>
                            <select className="form-select form-select-sm"
                                    id="phoneManufacturer" {...register("phoneManufacturer", {required: true})}>
                                <option value="Apple">APPLE</option>
                                <option value="Samsung">SAMSUNG</option>
                                <option value="Xiaomi">XIAOMI</option>
                                <option value="Huawei">HUAWEI</option>
                                <option value="Motorola">MOTOROLA</option>
                                <option value="Sony">SONY</option>
                                <option value="Oppo">OPPO</option>
                            </select>
                            {errors.manufacturer && <span>Manufacturer is required</span>}
                        </div>
                        <div className="phone-add-group">
                            <label htmlFor="phoneDescription" className="form-label">Description</label>
                            <textarea className="form-control form-control-sm" id="phoneDescription" rows="3"
                                      {...register("phoneDescription", {required: true})}/>
                            {errors.phoneDescription && <span>Phone description is required</span>}
                        </div>
                    </Col>

                    <Col sm={10} md={4}>
                        <div className="phone-add-group">
                            <InputFieldFormAddPhone id="phoneColor" label="Color" register={register}/>
                            {errors.phoneColor && <span>Color is required</span>}
                        </div>
                        <div className="phone-add-group">
                            <InputFieldFormAddPhone id="phonePrice" label="Price" register={register}/>
                            {errors.phonePrice && <span>Price is required</span>}
                        </div>
                        <div className="phone-add-group">
                            <InputFieldFormAddPhone id="phoneScreen" label="Screen" register={register}/>
                        </div>
                    </Col>

                    <Col sm={10} md={4}>
                        <div className="phone-add-group">
                            <InputFieldFormAddPhone id="phoneProcessor" label="Processor" register={register}/>
                        </div>
                        <div className="phone-add-group">
                            <InputFieldFormAddPhone id="phoneRam" label="RAM" register={register}/>
                            {errors.phoneRam && <span>RAM is required</span>}
                        </div>
                        <div className="phone-add-group">
                            <label htmlFor="phoneImage" className="form-label">Upload Image</label>
                            <input name="phoneImage"
                                   type="file" accept="image/*" className="form-control form-control-sm" id="phoneImage"
                                   {...register("phoneImage", {required: true})}/>
                            {errors.phoneImage && <span>Image is required</span>}
                        </div>
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
