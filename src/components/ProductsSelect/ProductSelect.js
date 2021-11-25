import React, {useState} from 'react';
import cl from './ProductSelect.module.scss';

const ProductSelect = () => {
    const items = [
        {title: 'Помидоры'},
        {title: 'Огірки'},
        {title: 'Картошка, буряк, морква'},
        {title: 'Цибуля, чиснок'},
        {title: 'Капуста'},
        {title: 'Приховати'},
        {title: 'Приховати'},
        {title: 'Приховати'},
    ]
    const [moreIsVisible, setMoreIsVisible] = useState(false)
    const hidden = items.splice(5, items.length - 1)
    console.log(hidden)
    const moreIsVisibleToggle = () => {
        console.log('asdf')
        setMoreIsVisible(!moreIsVisible)
        console.log(moreIsVisible)

    }
    return (
        <ul className={cl.wrapper}>
            {items.map(item =>
                <li>{item.title}</li>
            )}
            {hidden.length > 0 &&
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