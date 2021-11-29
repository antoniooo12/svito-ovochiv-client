import React, {useState} from 'react';
import cl from './ProductSelect.module.scss';
import {useSelector} from "react-redux";

const ProductSelect = () => {
    const itemsSelect = useSelector(state => state.products.sections)
    const items = Array.from(itemsSelect)
    const [moreIsVisible, setMoreIsVisible] = useState(false)
    const hidden = items.splice(5, items.length - 1)

    const moreIsVisibleToggle = () => {
        setMoreIsVisible(!moreIsVisible)
    }
    return (
        <ul className={cl.wrapper}>
            {items.map(item =>
                <li key={item.id}>{item.title}</li>
            )}
            {hidden.length > 1 &&

            <li onClick={() => moreIsVisibleToggle()} className={[cl.hidden,moreIsVisible &&  cl.hiddenActive].join(' ') }>

                <p >ще 8</p>
                <ul>
                    {hidden.map((item, index) =>
                        <li>{item.title}</li>
                    )}
                </ul>
            </li>
            }
        </ul>
    );
};

export default ProductSelect;