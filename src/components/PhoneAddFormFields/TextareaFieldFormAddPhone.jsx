import React from 'react';

const TextareaFieldFormAddPhone = (props) => {

    const id = props.id;
    const label = props.label;
    const register = props.register;
    const error = props.error;

    return (
        <div className="phone-add-group">
            <label htmlFor={id} className="form-label">{label}</label>
            <textarea className="form-control form-control-sm" rows="3" id={id} {...register(id, {required: true})}/>
            {error && <span>{label} is required</span>}
        </div>
    );
};

export default TextareaFieldFormAddPhone;
