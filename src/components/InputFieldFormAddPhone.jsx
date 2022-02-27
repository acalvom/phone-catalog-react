import React, {Fragment} from 'react';

const InputFieldFormAddPhone = (props) => {

    const id = props.id;
    const label = props.label;
    const register = props.register;

    return (
        <Fragment>
            <label htmlFor={id} className="form-label">{label}</label>
            <input type="text" className="form-control form-control-sm" id={id} {...register(id, {required: true})}/>
        </Fragment>
    );
};

export default InputFieldFormAddPhone;
