import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

function Error404(){
    return(
        <>
            <div className="container justify-content-center align-items-center" style={{position:'fixed', top:'50%', left:'50%', transform:' translate(-50%, -50%)'}}>
                <h1 className="fw-bold text-center" style={{color:'#DA2121', fontSize:'120px'}}>Oops!</h1>
                <p className="fs-4 text-center">The page you were looking for might be removed or its temporarily unavailable</p>
                <MDBBtn href='/' className='' size='lg' style={{backgroundColor:'#DA2121',fontSize:'16px',borderRadius:'7px', fontWeight:'300', textTransform:'none', left:'50%', transform:' translate(-50%, 0%)'}}>
                                Back to Homepage
                            </MDBBtn>
            </div>
        </>
    );
};

export default Error404;