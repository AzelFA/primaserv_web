import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarNav,
  MDBIcon,
} from 'mdb-react-ui-kit';
import Logo from '../Logo.png'

function Nav(){
  const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='myprimary' className=''>
        <MDBContainer fluid className='p-0 mx-lg-5 mx-3'>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas color='white' />
          </MDBNavbarToggler>
          
          <MDBCollapse navbar open={openNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-0 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='#' className='text-white'>
                  Explore
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#projects' className='text-white'>Projects</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#contact' className='text-white'>
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBNavbarBrand href='#' className='ml-auto mr-auto justify-content-center'>
            <img
              src={Logo}
              height='50'
              alt='Brand Logo'
              loading='lazy'
              className='img-fluid'
            />
          </MDBNavbarBrand>
            <MDBNavbarLink className='pr-3' href='https://instagram.com'>
              <MDBIcon fab icon="instagram" size='2x' color='light' />
            </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Nav;