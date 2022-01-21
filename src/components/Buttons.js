import React from "react";
import { Button } from 'react-bootstrap'

function MyButon(props){

    return(
        <>
  <Button variant="dark" size="sm" >{props.text}</Button>

</>
    )

}
export default MyButon;