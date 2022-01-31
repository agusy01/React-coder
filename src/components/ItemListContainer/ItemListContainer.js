import React from 'react';
import BasicCard from './Card/Card';
import './ItemListContainer.css';

const ItemListContainer = () => {
    return (
        <div className='Section-order'>
            <BasicCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbpjJlPrTL2c8ZxXOe94G6kPn5DHwfimBGhAgjMVPgZ09F5iW8u1TXL49wWApR4boe0s&usqp=CAU" category="Shirt" title="" description="Very comfortable shirt"/>
            <BasicCard img="https://www.austriaski.com.ar/admin/user_content/img/img_color_list117.png" category="Trousers" title=""  description="Very comfortable pants"/>
            <BasicCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQUoiG4mguMxQIu-7NxQInDhD66CPzuwtPharFRylFT9IO9kGNvtw3gKDPCwwb4GBptE&usqp=CAU" category="Coverall" title="" description="Very comfortable diver" />
            <BasicCard img="https://www.austriaski.com.ar/admin/user_content/img/img_color_list7775.png" category="jacket" title="" description="Very comfortable jacket" />
            <BasicCard img="https://www.austriaski.com.ar/admin/user_content/img/img_color_list7775.png" category="jacket" title="" description="Very comfortable jacket"/>
            <BasicCard img="https://www.austriaski.com.ar/admin/user_content/img/img_color_list7775.png" category="jacket" title="" description="Very comfortable jacket"/>
            <BasicCard img="https://www.austriaski.com.ar/admin/user_content/img/img_color_list7775.png" category="jacket" title="" description="Very comfortable jacket"/>
            <BasicCard img="https://www.austriaski.com.ar/admin/user_content/img/img_color_list7775.png" category="jacket" title="" description="Very comfortable jacket"/>
            <BasicCard img="https://www.austriaski.com.ar/admin/user_content/img/img_color_list7775.png" category="jacket" title="" description="Very comfortable jacket"/>
        </div>
    );
};

export default ItemListContainer;
