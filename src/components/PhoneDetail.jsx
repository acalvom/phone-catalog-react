import React from 'react';
import {useParams} from 'react-router-dom';

const PhoneDetail = (props) => {

    const {id} = useParams();
    return (
        <div>
            Phone Detail Component {id}
        </div>
    );
};

export default PhoneDetail;
