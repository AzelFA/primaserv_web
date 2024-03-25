import React from 'react';
import {MDBCol, MDBRow, MDBListGroup, MDBListGroupItem, MDBContainer} from 'mdb-react-ui-kit'

function Services(){
    return(
    <MDBContainer breakpoint='lg' className='d-flex flex-column justify-content-between align-items-center pt-2 pt-lg-4 mx-auto p-lg-5 p-5'>
        <h1 className='titleBawah devAlign text-left mb-5 title' style={{}}>WE PROVIDE SERVICES SUCH AS</h1>
        <div className='user-select-none'>
            <MDBRow className='gx-0'>
                <MDBCol lg='6' className='p-0 boxWidth' style={{border:'4px solid #DA2121',color:'#DA2121'}}>
                    <MDBListGroup style={{ minWidthL: '22rem' }} light>
                        <MDBListGroupItem action className='p-3 m-0'style={{color:'#DA2121'}}><h3 style={{fontWeight:'600', textAlign:'center'}}>Inspection</h3></MDBListGroupItem>
                    </MDBListGroup>
                </MDBCol>
                <MDBCol lg='6' className='p-0 boxWidth' style={{border:'4px solid #DA2121',color:'#DA2121'}}>
                <MDBListGroup style={{ minWidthL: '22rem' }} light>
                        <MDBListGroupItem action className='p-3 m-0'style={{color:'#DA2121'}}><h3 style={{fontWeight:'600', textAlign:'center'}}>Overhaul</h3></MDBListGroupItem>
                    </MDBListGroup>
                </MDBCol>
            </MDBRow>
            <MDBRow className='gx-0'>
                <MDBCol lg='6' className='p-0 boxWidth' style={{border:'4px solid #DA2121', textAlign:'center',color:'#DA2121'}}>
                <MDBListGroup style={{ minWidthL: '22rem' }} light>
                        <MDBListGroupItem action className='p-3 m-0'style={{color:'#DA2121'}}><h3 style={{fontWeight:'600', textAlign:'center'}}>Troubleshooting</h3></MDBListGroupItem>
                    </MDBListGroup>
                </MDBCol>
                <MDBCol lg='6' className='py-0 boxWidth' style={{border:'4px solid #DA2121', textAlign:'center',color:'#DA2121'}}>
                <MDBListGroup style={{ minWidthL: '22rem' }} light>
                        <MDBListGroupItem action className='p-3 m-0'style={{color:'#DA2121'}}><h3 style={{fontWeight:'600', textAlign:'center'}}>Reconditioned</h3></MDBListGroupItem>
                    </MDBListGroup>
                </MDBCol>
            </MDBRow>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center pt-2 pt-lg-2 mx-auto py-lg-1 py-2'>
            <h1 className='titleBawah devAlign text-center title' style={{}}>WE ALSO SUPPLY OEM PARTS</h1>
            <p className='devText devAlign text-center'>We supply spare parts for a large range of engine brands and types. We work with OEM spare parts which means that all out parts are original quality and guaranteed. </p>
            <MDBListGroup className='devText devAlign text-center fw-bold user-select-none' style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem action style={{color:'#DA2121'}}>WARTSILA TYPES: W20 - W22 - W26 - R32 - W32 - W46</MDBListGroupItem>
      <MDBListGroupItem action style={{color:'#DA2121'}}>CREPELLE ALL TYPES</MDBListGroupItem>
      <MDBListGroupItem action style={{color:'#DA2121'}}>STORK 240 - 280 - 410</MDBListGroupItem>
      <MDBListGroupItem action style={{color:'#DA2121'}}>MAN B&W 16/24 - 27/38 - 28/32</MDBListGroupItem>
      <MDBListGroupItem action style={{color:'#DA2121'}}>MAK M20 - M25 - M32 - M43</MDBListGroupItem>
      <MDBListGroupItem action style={{color:'#DA2121'}}>DEUTZ</MDBListGroupItem>
      <MDBListGroupItem action style={{color:'#DA2121'}}>ABC (V)DZC - DX</MDBListGroupItem>
      <MDBListGroupItem action style={{color:'#DA2121'}}>BOLNES ALL TYPES</MDBListGroupItem>
    </MDBListGroup>
        </div>
    </MDBContainer>
    );
}

export default Services;