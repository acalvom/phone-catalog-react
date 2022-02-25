import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";

const PhoneAdd = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container className="d-flex flex-wrap flex-column my-3 mx-auto align-content-center">
            <h2 className="text-center">Add new phone information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="justify-content-between">
                    <Col sm={10} md={4} className="mx-2">
                        <div className="mb-3">
                            <label htmlFor="phoneName" className="form-label">Phone name</label>
                            <input type="text" className="form-control form-control-sm" id="phoneName"
                                   {...register("phoneName", {required: true})}/>
                            {errors.phoneName && "Phone name is required"}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneManufacturer" className="form-label">Manufacturer</label>
                            <input type="text" className="form-control form-control-sm" id="phoneManufacturer"
                                   {...register("phoneManufacturer", {required: true})}/>
                            {errors.manufacturer && "Phone manufacturer is required"}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneDescription" className="form-label">Description</label>
                            <textarea className="form-control form-control-sm" id="phoneDescription" rows="3"
                                      {...register("phoneDescription", {required: true})}/>
                            {errors.phoneDescription && "Phone description is required"}
                        </div>

                    </Col>
                    <Col sm={10} md={4} className="mx-2">
                        <div className="mb-3">
                            <label htmlFor="phoneColor" className="form-label">Color</label>
                            <input type="text" className="form-control form-control-sm" id="phoneColor"
                                   {...register("phoneColor", {required: true})}/>
                            {errors.phoneColor && "Phone color is required"}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phonePrice" className="form-label">Price</label>
                            <input type="text" className="form-control form-control-sm" id="phonePrice"
                                   {...register("phonePrice", {required: true})}/>
                            {errors.phonePrice && "Phone price is required"}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneScreen" className="form-label">Screen </label>
                            <input type="text" className="form-control form-control-sm" id="phoneScreen"
                                   {...register("phoneScreen")}/>
                        </div>

                    </Col>
                    <Col sm={10} md={4} className="mx-2">
                        <div className="mb-3">
                            <label htmlFor="phoneProcessor" className="form-label">Processor</label>
                            <input type="text" className="form-control form-control-sm" id="phoneProcessor"
                                   {...register("phoneProcessor")}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneRam" className="form-label">RAM</label>
                            <input type="text" className="form-control form-control-sm" id="phoneRam"
                                   {...register("phoneRam", {required: true})}/>
                            {errors.phoneRam && "Phone RAM is required"}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneImage" className="form-label">Upload Image</label>
                            <input type="file" className="form-control form-control-sm" id="phoneImage"
                                   {...register("phoneImage", {required: true})}/>
                            {errors.phoneImage && "Phone image is required"}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary mb-3">Add phone</button>
                    </div>
                </Row>


            </form>

        </Container>
    );
};

export default PhoneAdd;
