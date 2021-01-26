import React from 'react';
import '../Table/table.css';

import {useTheme} from 'react-jss';


function OrderBoard(props) {
    const theme = useTheme();
    const classes = useStyles({theme});

    return (
        <table>
            <caption>User 관리</caption>
            <thead>
            <tr>
                <th>h</th>

            </tr>
            </thead>
        </table>

    );


}

export default OrderBoard;
