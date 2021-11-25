import React from 'react';
import cl from './Section.module.scss'

const Section = ({item}) => {

    return (

        <div className={cl.wrapper}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title}/>
        </div>
    );
};

export default Section;