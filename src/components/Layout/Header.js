import React, {Fragment} from 'react';
import foodImage from '../../assets/food.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>./React Food App</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImage} alt="Food"/>
            </div>
        </Fragment>
    );
}

export default Header;