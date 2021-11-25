import React from 'react';
import cl from './SelectCategory.module.scss';
import Section from "./helper/Section";

const selectList = [
    {
        title: 'Овощна лавка',
        sections: [{
            title: 'Овочі, гриби, зелень',
            img: 'images/tomatos_mashrooms.png',
        }, {
            title: 'Фрукти та ягоди',
            img: 'images/fruits.png',
        },]
    },
    {
        title: 'Хлібець',
        sections: [{
            title: 'Хліб',
            img: 'images/bread.png',
        }, {
            title: 'Мука',
            img: 'images/flour.png',
        }, {
            title: 'Пряники',
            img: 'images/cookie.png',
        }
        ]
    },
    {
        title: 'Хлібець',
        sections: [{
            title: 'Хліб',
            img: '',
        }, {
            title: 'Мука',
            img: '',
        }, {
            title: 'Пряники',
            img: '',
        },{
            title: 'Пряники',
            img: '',
        },{
            title: 'Пряники',
            img: '',
        },{
            title: 'Пряники',
            img: '',
        },

        ]
    },
    {
        title: 'Овощна лавка',
        sections: [{
            title: 'Овочі, гриби, зелень',
            img: 'images/tomatos_mashrooms.png',
        }, {
            title: 'Фрукти та ягоди',
            img: 'images/fruits.png',
        },]
    },
    {
        title: 'Хлібець',
        sections: [{
            title: 'Хліб',
            img: 'images/bread.png',
        }, {
            title: 'Мука',
            img: '',
        }, {
            title: 'Пряники',
            img: '',
        }
        ]
    }
]
const SelectCategory = () => {
    return (
        <div className={cl.wrapper}>
            {selectList.map(obj => {

                return (
                    < >
                        <h3>{obj.title}</h3>
                        <div className={obj.sections.length >= 4?cl.sectionsList4:  cl.sectionsList}>
                            {obj.sections.map(section =>
                                <Section item={section}/>
                            )}
                        </div>

                    </>
                )
            })}
                </div>
                );
            };

                export default SelectCategory;