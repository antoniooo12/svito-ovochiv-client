import React from 'react';
import {ReactComponent as YourSvg} from '../../../image/icons/search.svg';
import cl from './SearchPanel.module.scss'
const SearchPanel = () => {
    return (
        <div className={cl.wrapper}>
            <YourSvg  />
        </div>
    );
};

export default SearchPanel;