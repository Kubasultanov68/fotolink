import React from 'react';
import {Avatar} from "@mui/material";

const Companion = () => {
    return (
        <div className='companions__item'>
            <div className='companions__item-left'>
                <Avatar sx={{width: '48px', height: '48px'}}/>
                <div className="companions__item-info">
                    <p className="companions__item-username">
                        Denis_Armed
                    </p>
                    <p className="companions__item-message">
                        Даров, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque numquam recusandae voluptatibus.
                    </p>
                </div>
            </div>
            <div className="companions__item-right">
                <p className="companions__item-data">
                    12:00
                </p>
               <div style={{display: 'flex', justifyContent: 'end'}}>
                    <span className='companions__item-count'>
                                12
                </span>
               </div>
            </div>
        </div>
    );
};

export default Companion;