import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Logo from '../Logo.png'

function Footer(){
    return(
        <MDBFooter style={{background:'#DA2121'}} className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 px-lg-5 border-bottom'>
        <div className='me-5 ps-0 ps-lg-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.instagram.com/primaservitama_official/' target="_blank" rel="noreferrer noopener" className='me-auto me-lg-5 pe-lg-5 text-reset'>
            <MDBIcon color='light' fab icon='instagram' size='2x' />
          </a>
        </div>
      </section>

      <section className='px-lg-5 me-lg-5'>
        <div className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <img
              src={Logo}
              height='50px'
              alt='Brand Logo'
              loading='lazy'
              className='img-fluid'
            />
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/projects' className='text-reset'>
                  Projects List
                </a>
              </p>
              <p>
                <a href='/contact-us' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Informations</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Projects
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Competencies
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Testimonies
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Form
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4' >
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Ruko Bukit Gading Mediterania Blok A Nomor 01 Jakarta Utara
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                admin@primaservitama.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +62 811 888 008 75

              </p>
            </MDBCol>
          </MDBRow>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'rgba(255,255,255,0.65)' }}>
        © 2024 All Rights Reserved -  
        <a className='text-reset' href='https://primaservitama.com/'>
        - PrimaServitama.com
        </a>
      </div>
    </MDBFooter>
    );
}

export default Footer;