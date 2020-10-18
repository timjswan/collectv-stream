import React from 'react';
import Resizer from "../Resizer/index";

function DynamicModalSize(BaseModal) {
    return <Resizer><BaseModal/></Resizer>;
}

export default DynamicModalSize;