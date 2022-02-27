import React, {Fragment} from 'react';

const TextareaFieldFormAddPhone = (props) => {

    const id = props.id;
    const label = props.label;
    const register = props.register;
    const error = props.error;

    return (
        <Fragment>
            <label htmlFor={id} className="form-label">{label}</label>
            <textarea className="form-control form-control-sm" rows="3" id={id} {...register(id, {required: true})}/>
            {error && <span>{label} is required</span>}
        </Fragment>
    );
};

export default TextareaFieldFormAddPhone;
