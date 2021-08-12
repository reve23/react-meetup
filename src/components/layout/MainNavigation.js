import React from 'react'
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React MeetUps</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All MeetUps</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add MeetUps</Link>
                    </li>
                    <li>
                        <Link to='/favorite'>Favorite</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;
