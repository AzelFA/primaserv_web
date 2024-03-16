import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import hero from './hero.png';
import kapal from './kapal.jpg'

function About() {
    return (
        <MDBContainer breakpoint='lg' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: '1' }}>
                <div style={{position:'absolute', marginTop:'-200px', objectFit:'cover'}}>
                    <img src={kapal} alt="about" style={{ width: '59%', height: '75vh' }} />
                </div>
                <div style={{position:'absolute', marginLeft:'450px', marginTop:'-200px'}}>
                    <img src={hero} alt="about" style={{ width: '40%', height: '24vh' }} />
                </div>
                <div style={{position:'absolute', marginLeft:'450px', marginTop:'-15px'}}>
                    <img src={hero} alt="about" style={{ width: '40%', height: '24vh' }} />
                </div>
                <div style={{position:'absolute', marginLeft:'450px', marginTop:'172px'}}>
                    <img src={hero} alt="about" style={{ width: '40%', height: '24vh' }} />
                </div>
            </div>

            <div style={{ flex: '1', marginLeft: '20px' }}>
                <h1 className='about' style={{ color: '#DA2121', padding: '0px', fontSize: '76px' }}>
                    HOME OF THE <br /> EXPERIENCE
                </h1>
                <p style={{ marginTop: '50px' }}>
                    The employees of PT. PRIMA SERVITAMA INDONESIA are trained to solve even the most complex and unique problems of any technical problems on board the vessel. Reach out and an experienced team of PT. PRIMA SERVITAMA will be ready to help you think of the next best business step.
                </p>
            </div>
        </MDBContainer>
    );
}

export default About;
