import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon} from 'mdb-react-ui-kit'
import HeroBG from './hero.png'


function HomePage(){
    return(
        <MDBContainer breakpoint='lg'>
            <h1 className='text-black heroFont' style={{width:'250px'}}>PRIMA SERVITAMA</h1>
            <h4 className='text-black'>We serve you the best</h4>
            <a href='https://instagram.com'>
                <MDBIcon fab icon="instagram" size='3x' color='light' />
            </a>
            <h4 className='text-black'>We Offer the Best Diesel Engine Technical Solution for Your Company</h4>
            <MDBBtn style={{backgroundColor:'#DA2121',fontSize:'20px',borderRadius:'7px'}}>
                Discover More
            </MDBBtn>
        </MDBContainer>
        
    );
}

export default HomePage;