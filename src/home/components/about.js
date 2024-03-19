import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import hero from './hero.png';
import kapal from './kapal.jpg';
import aboutPic from './about.png';

function About() {
    return (
        <MDBContainer breakpoint='lg' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <MDBRow>
                <MDBCol lg='6'>
                    <img src={aboutPic} alt='About.Png' style={{
                        display:'block',

                    }}></img> 
                </MDBCol>
                <MDBCol lg='6'>
                <h1 className='about heroFont' style={{ color: '#DA2121', padding: '0px', fontSize: '76px', fontWeight:'600' }} >
                    HOME OF THE EXPERIENCE
                </h1>
                <p style={{ marginTop: '50px' }}>
                    The employees of PT. PRIMA SERVITAMA INDONESIA are trained to solve even the most complex and unique problems of any technical problems on board the vessel. Reach out and an experienced team of PT. PRIMA SERVITAMA will be ready to help you think of the next best business step.
                </p>
                </MDBCol>
            </MDBRow>

            <div style={{ flex: '1', marginLeft: '20px' }}>
                
            </div>
        </MDBContainer>
    );
}

export default About;
