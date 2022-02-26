import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import './PhoneAdd.css';

const PhoneAdd = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container className="d-flex flex-wrap flex-column my-3 mx-auto align-content-center">
            <h2 className="phone-add-title"><i className="fa-solid fa-mobile"/> New phone</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="phone-add-form">
                <Row className="justify-content-between p-3">
                    <Col sm={10} md={4}>
                        <div className="phone-add-group">
                            <label htmlFor="phoneName" className="form-label">Phone name</label>
                            <input type="text" className="form-control form-control-sm" id="phoneName"
                                   {...register("phoneName", {required: true})}/>
                            {errors.phoneName && <span>Phone name is required</span>}
                        </div>
                        <div className="phone-add-group">
                            <label htmlFor="phoneManufacturer" className="form-label">Manufacturer</label>
                            <select className="form-select form-select-sm"
                                    id="phoneManufacturer" {...register("phoneManufacturer", {required: true})}>
                                <option value="apple">APPLE</option>
                                <option value="samsung">SAMSUNG</option>
                                <option value="xiaomi">XIAOMI</option>
                                <option value="huawei">HUAWEI</option>
                                <option value="motorola">MOTOROLA</option>
                                <option value="sony">SONY</option>
                                <option value="oppo">OPPO</option>
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
                            <label htmlFor="phoneColor" className="form-label">Color</label>
                            <input type="text" className="form-control form-control-sm" id="phoneColor"
                                   {...register("phoneColor", {required: true})}/>
                            {errors.phoneColor && <span>Color is required</span>}
                        </div>
                        <div className="phone-add-group">
                            <label htmlFor="phonePrice" className="form-label">Price (€) </label>
                            <input type="text" className="form-control form-control-sm" id="phonePrice"
                                   {...register("phonePrice", {required: true})}/>
                            {errors.phonePrice && <span>Price is required</span>}
                        </div>
                        <div className="phone-add-group">
                            <label htmlFor="phoneScreen" className="form-label">Screen </label>
                            <input type="text" className="form-control form-control-sm" id="phoneScreen"
                                   {...register("phoneScreen")}/>
                        </div>

                    </Col>
                    <Col sm={10} md={4}>
                        <div className="phone-add-group">
                            <label htmlFor="phoneProcessor" className="form-label">Processor</label>
                            <input type="text" className="form-control form-control-sm" id="phoneProcessor"
                                   {...register("phoneProcessor")}/>
                        </div>
                        <div className="phone-add-group">
                            <label htmlFor="phoneRam" className="form-label">RAM</label>
                            <input type="text" className="form-control form-control-sm" id="phoneRam"
                                   {...register("phoneRam", {required: true})}/>
                            {errors.phoneRam && <span>RAM is required</span>}
                        </div>
                        <div className="phone-add-group">
                            <label htmlFor="phoneImage" className="form-label">Upload Image</label>
                            <input type="file" className="form-control form-control-sm" id="phoneImage"
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
