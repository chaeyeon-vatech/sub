import React from 'react';

import Button from "@material-ui/core/Button";
import {UserDelete} from "../../../../graphql/useMutation";


function DeleteButton(id) {

    return (
        <>

            <Button
                onClick={UserDelete(id)}>🗑</Button>

        </>
    );
}


export default DeleteButton;
