import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow} from 'mdb-react-ui-kit'
import HeroBG from './hero.png'


function HomePage(){
    return(

        <div>
            <div style={{
                backgroundImage:`url(${HeroBG})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                width: '100%',
                height: 'max-content',
                paddingBottom:''
                }}>
                <div breakpoint='lg' className='justify-content-between align-items-center p-4 p-lg-5'>
                    <div className='p-lg-5 p-3 m-0'>
                        <MDBRow className='align-items-center justify-content-between'>
                            <MDBCol lg='6'>
                            <h1 className='text-white heroFont' style={{width:'250px'}}>PRIMA SERVITAMA</h1>
                            <h4 className='text-white iginv' style={{fontWeight:'300'}}>We serve you the best</h4>
                            <a href='https://instagram.com' className='py-2 iginv'>
                                <MDBIcon fab icon="instagram" size='3x' color='light' />
                            </a>
                            </MDBCol>
                            <MDBCol lg='6' style={{width:'25rem'}}>
                            <h4 className='text-white' style={{fontWeight:'300', lineHeight:'1.5'}}>We Offer the Best Diesel Engine Technical Solution for Your Company</h4>
                            <MDBBtn className='' size='lg' style={{backgroundColor:'#DA2121',fontSize:'20px',borderRadius:'7px',marginBottom:'1rem', fontWeight:'300', textTransform:'none'}}>
                                Discover More
                            </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePage;