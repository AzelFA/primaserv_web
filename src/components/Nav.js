import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import Logo from '../Logo.png'

function Nav(){
  const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='myprimary'>
        <MDBContainer fluid>
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
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
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
          <MDBNavbarBrand href='#'>
            <img
              src={Logo}
              height='40'
              alt='Brand Logo'
              loading='lazy'
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