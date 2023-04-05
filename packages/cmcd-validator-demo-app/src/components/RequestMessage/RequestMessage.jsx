import React from 'react'
import Image from 'react-bootstrap/esm/Image';
import Button from 'react-bootstrap/esm/Button';
import warningImg from '../../assets/warning.svg'
import errorImg from '../../assets/error.svg'
import successImg from '../../assets/success.svg'

const RequestMessage = (props) => {
    const {message, type, onClick} = props;

    const renderImage = () => {
        switch (type) {
            case 'warning':
                return (
                    <img width="27" className='pe-2' fluid src={warningImg}/>
                );
            case 'danger':
                return (
                    <img width="27" className='pe-2' fluid src={errorImg}/>
                );
            default:
                return (
                    <img width="27" className='pe-2' fluid src={successImg}/>
                );
        };
    }

    return (
        <Button variant={type} onClick={onClick}> 
            {renderImage()}
            {`${message?.slice(0, 50)}...`}
        </Button>
    )
}

export default RequestMessage