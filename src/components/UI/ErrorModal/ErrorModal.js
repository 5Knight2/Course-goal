import React from 'react';

import Card from '../Button/Card';
import Button from '../Button/Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.modalHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.modalHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;