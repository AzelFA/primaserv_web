import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import aboutPic from './about.png';

function About() {
    return (
        <div breakpoint='lg' style={{ display: 'grid', alignItems: 'center', justifyContent: 'space-between' }} className='mt-5 mb-4 pt-lg-4 px-lg-5'>
            <MDBRow className='mx-auto'>
                <MDBCol lg='6' className='align-items-center justify-content-between'>
                    <img src={aboutPic} alt='About.Png' style={{
                        display:'block',
                        marginRight: 'auto',
                        marginLeft: 'auto',

                    }} className='heroBg'></img> 
                </MDBCol>
                <MDBCol lg='6' className='align-items-center justify-content-between mx-auto px-lg-5'>
                <h1 className='devAlign heroFont d-flex' style={{ color: '#DA2121', padding: '0px', fontSize: '76px', fontWeight:'600', marginTop:'1rem' }} >
                    HOME OF THE EXPERIENCE
                </h1>
                <p className='devAlign mt-lg-5 px-4' style={{fontSize:'20px'}}>
                    The employees of PT. PRIMA SERVITAMA INDONESIA are trained to solve even the most complex and unique problems of any technical problems on board the vessel. Reach out and an experienced team of PT. PRIMA SERVITAMA will be ready to help you think of the next best business step.
                </p>
                </MDBCol>
            </MDBRow>

            <div style={{ flex: '1', marginLeft: '20px' }}>
                
            </div>
        </div>
    );
}

export default About;
