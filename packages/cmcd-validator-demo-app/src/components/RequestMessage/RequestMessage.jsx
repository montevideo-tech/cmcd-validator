import React from 'react'
import Image from 'react-bootstrap/esm/Image';
import Button from 'react-bootstrap/esm/Button';
import warningImg from '../../assets/warning.svg'
import errorImg from '../../assets/error.svg'
import successImg from '../../assets/success.svg'
import useRenderSize from '../../hooks/useRenderSize';

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
        <Button className="btn" variant={type} onClick={onClick} style={{width: '100%'}}> 
            {renderImage()}
            {`${message?.slice(0, device === 'mobile'? 35 : 20 + widthSize/50)}...`}
            <span className="badge bg-secondary me-2">{reqId}</span>
        </Button>
    )
}

export default RequestMessage