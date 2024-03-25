import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Button/Card';
import Button from '../Button/Button';
import classes from './ErrorModal.module.css';

const Backdrop=(props)=>{return(   <div className={classes.backdrop} onClick={props.modalHandler} />)}

const ModalOverlay=(props)=>{return(<Card className={classes.modal}>
<header className={classes.header}>
  <h2>{props.title}</h2>
</header>
<div className={classes.content}>
  <p>{props.message}</p>
</div>
<footer className={classes.actions}>
  <Button onClick={props.modalHandler}>Okay</Button>
</footer>
</Card>)}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
    {ReactDOM.createPortal(<Backdrop modalHandler={props.modalHandler}></Backdrop>,document.getElementById('backdrop-root'))}
    {ReactDOM.createPortal(<ModalOverlay title={props.title} modalHandler={props.modalHandler} message={props.message}></ModalOverlay>,document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;