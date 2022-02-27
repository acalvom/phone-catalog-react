import React, {Fragment} from 'react';

const InputFieldFormAddPhone = (props) => {

    const id = props.id;
    const type = props.type;
    const label = props.label;
    const register = props.register;
    const required = props.required;
    const error = props.error;

    return (
        <Fragment>
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control form-control-sm"
                   id={id} {...register(id, {required: required})}/>
            {error && <span>{label} is required</span>}
        </Fragment>
    );
};

InputFieldFormAddPhone.defaultProps = {
    type: "text",
    required: true
}

export default InputFieldFormAddPhone;
