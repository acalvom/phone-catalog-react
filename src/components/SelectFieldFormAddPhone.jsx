import React, {Fragment} from 'react';

const SelectFieldFormAddPhone = (props) => {

    const id = props.id;
    const label = props.label;
    const register = props.register;
    const error = props.error;

    return (
        <Fragment>
            <label htmlFor={id} className="form-label">{label}</label>
            <select className="form-select form-select-sm"
                    id={id} {...register(id, {required: true})}>
                <option value="Apple">APPLE</option>
                <option value="Samsung">SAMSUNG</option>
                <option value="Xiaomi">XIAOMI</option>
                <option value="Huawei">HUAWEI</option>
                <option value="Motorola">MOTOROLA</option>
                <option value="Sony">SONY</option>
                <option value="Oppo">OPPO</option>
            </select>
            {error && <span>{label} is required</span>}
        </Fragment>
    );
};

export default SelectFieldFormAddPhone;
