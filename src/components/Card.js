import React from 'react';
import './component.css';

export default function PaperSheet(props) {

    return (
        <div>
            <a href='#'>
                <img alt='' src={props.card} className='hvr-grow' />
            </a>
        </div>
    );
}