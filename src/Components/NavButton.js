import React from 'react';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';


function NavButton(props) {
    const urlPath = props.urlPath;
    const buttonName = props.buttonName;
    console.log(urlPath);

return (
    <Button as={Link} to={urlPath}>{buttonName}</Button>
)
    }

export default NavButton