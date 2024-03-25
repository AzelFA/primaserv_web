import React from 'react';
import { MDBRow, MDBCol, MDBContainer} from 'mdb-react-ui-kit'

function Visions() {
    return (
      <MDBContainer breakpoint='lg' className='justify-content-between align-items-center my-4 gx-lg-5 pt-2 pt-lg-4 mx-auto px-lg-0 p-5'>
        <h1 className='titleBawah title devAlign text-left' style={{}}>OUR GUIDING PRINCIPLE</h1>
        <MDBRow className='d-flex justify-content-between align-items-center mx-auto'>
          <MDBCol lg='4' className='borderRed align-items-center justify-content-center pt-3 mx-lg-0'>
            <h5 className='text-center fs-3' style={{fontSize:'24px'}}>Missions</h5>
            <p className='devText'>Our mission to maintain a high degree of customer satisfaction, trust, integrity, and reliability through delivering quality services conforming to industry best practices, while constantly continuing to improve our standard and processes</p>
          </MDBCol>
          <MDBCol lg='4' className='borderRed align-items-center justify-content-center pt-3 mx-lg-0'>
            <h5 className='text-center fs-3' style={{fontSize:'24px'}}>Visions</h5>
            <p  className='devText'>Our vision to be recognized as a national class leader in the installation, repair, and maintenance of large bore marine diesel engines and generators. We strive to the exceed the highest standard and our quality of our work, our commitment to on time delivery and for providing excellent customer value</p>
          </MDBCol>
          <MDBCol lg='4' className='borderRed align-items-center justify-content-center pt-3 mx-lg-0'>
            <h5 className='text-center fs-3' style={{fontSize:'24px'}}>Goals</h5>
            <p className='devText'>We recognized that our strength is the quality of the people who comprise our corporate team. Our commitment to their job satisfaction , their individual personal and professional growth, and to the synergy of our team</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
}
export default Visions;