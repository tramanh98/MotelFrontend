import React from 'react';
import '../style.css'
import MotelFrame from '../../../PublicComponent/ItemMotel/index'

export const List = (props)=> {
        const { results } = props;
        console.log("Số lượng phòng trọ "+results.length)
        console.log(results)
        return (
            <div>
                {results.map((object,index) => 
                    <MotelFrame key={index} {...object} />
                )}
            </div>
        );

}
