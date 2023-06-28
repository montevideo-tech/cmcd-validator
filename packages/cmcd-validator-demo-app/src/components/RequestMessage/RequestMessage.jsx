import React from 'react'
import Image from 'react-bootstrap/esm/Image';
import Button from 'react-bootstrap/esm/Button';
import warningImg from '../../assets/warning.svg'
import errorImg from '../../assets/error.svg'
import successImg from '../../assets/success.svg'
import useRenderSize from '../../hooks/useRenderSize';
import "./RequestMessage.css";

const RequestMessage = (props) => {
    const {message, type, onClick, reqId } = props;
    const { widthSize, device } = useRenderSize();

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
        <Button className="btn data-btn" variant={type} onClick={onClick}> 
            <span className="badge bg-secondary me-2">{reqId}</span>
            {renderImage()}
            {message}
        </Button>
    )
}

export default RequestMessage