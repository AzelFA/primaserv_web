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
                height: '50vh',
                }}>
                <MDBContainer breakpoint='lg' className='mx-auto justify-content-between align-items-center p-0'>
                    <div className='p-lg-5 p-3'>
                        <MDBRow className='align-items-center'>
                            <MDBCol lg='6'>
                            <h1 className='text-white heroFont' style={{width:'250px'}}>PRIMA SERVITAMA</h1>
                            <h4 className='text-white iginv' style={{fontWeight:'400'}}>We serve you the best</h4>
                            <a href='https://instagram.com' className='py-2 iginv'>
                                <MDBIcon fab icon="instagram" size='3x' color='light' />
                            </a>
                            </MDBCol>
                            <MDBCol lg='6'>
                            <h4 className='text-white' style={{fontWeight:'400'}}>We Offer the Best Diesel Engine Technical Solution for Your Company</h4>
                            <MDBBtn style={{backgroundColor:'#DA2121',fontSize:'20px',borderRadius:'7px'}}>
                                Discover More
                            </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        
                    </div>
                
                </MDBContainer>
            </div>
        </div>
        
    );
}

export default HomePage;