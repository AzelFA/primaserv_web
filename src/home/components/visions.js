import React from 'react';
import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit'

function Visions() {
    return (
      // <MDBContainer breakpoint='lg' style={{ display: 'flex', flexDirection: 'column', height:'100vh'}}>
      //   <h1 className='vision' style={{ color: '#DA2121', width: '50px', padding: '10px', marginBottom: '20px' }}>VISION/MISSION/GOALS</h1>
  
      //   <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom:'20px', marginTop:'50px'}}>
      //     <div style={{ border: '2px solid #DA2121', padding: '30px', flex: '1', marginRight: '10px', height: '70vh'}}>
      //       <h2 className='mision' style={{ textAlign:'center'}}>Mission</h2>
      //       <p style={{fontSize: '23px'}}>Our mission to maintain a high degree of customer satisfaction, trust, integrity, and reliability through delivering quality services conforming to industry best practices, while constantly continuing to improve our standard and processes</p>
      //     </div>
  
      //     <div style={{ border: '2px solid #DA2121', padding: '30px', flex: '1', marginRight: '10px' }}>
      //       <h2 className='vision'style={{ textAlign:'center'}}>Vision</h2>
      //       <p style={{fontSize: '23px'}}>Our vision to be recognized as a national class leader in the installation, repair, and maintenance of large bore marine diesel engines and generators. We strive to the exceed the highest standard and our quality of our work, our commitment to on timme delivery and for providing excellent customer value</p>
      //     </div>
  
      //     <div style={{ border: '2px solid #DA2121', padding: '30px', flex: '1' }}>
      //       <h2 className='value'style={{ textAlign:'center'}}>Values</h2>
      //       <p style={{fontSize: '23px'}}>We recognized that our strength is the quality of the people who comprise our corporate team. Our commitment to their job satisfaction, their individual personal and professional growth, and to the synergy of our team</p>
      //     </div>
      //   </div>
      // </MDBContainer>
      <div breakpoint='lg' className='justify-content-between align-items-center my-4 gx-5 pt-2 pt-lg-4 mx-auto p-lg-5 p-5'>
        <h1 className='titleBawah devAlign text-left' style={{}}>OUR GUIDING PRINCIPLE</h1>
        <MDBRow className='d-flex justify-content-between align-items-center mx-auto'>
          <MDBCol md='4' className='borderRed align-items-center justify-content-center pt-3 mx-lg-2'>
            <h5 className='text-center fs-3' style={{fontSize:'24px'}}>Missions</h5>
            <p className='devText'>Our mission to maintain a high degree of customer satisfaction, trust, integrity, and reliability through delivering quality services conforming to industry best practices, while constantly continuing to improve our standard and processes</p>
          </MDBCol>
          <MDBCol md='4' className='borderRed align-items-center justify-content-center pt-3 mx-lg-2'>
            <h5 className='text-center fs-3' style={{fontSize:'24px'}}>Visions</h5>
            <p  className='devText'>Our vision to be recognized as a national class leader in the installation, repair, and maintenance of large bore marine diesel engines and generators. We strive to the exceed the highest standard and our quality of our work, our commitment to on timme delivery and for providing excellent customer value</p>
          </MDBCol>
          <MDBCol md='4' className='borderRed align-items-center justify-content-center pt-3 mx-lg-2'>
            <h5 className='text-center fs-3' style={{fontSize:'24px'}}>Goals</h5>
            <p className='devText'>We recognized that our strength is the quality of the people who comprise our corporate team. Our commitment to their job satisfaction , their individual personal and professional growth, and to the synergy of our team</p>
          </MDBCol>
        </MDBRow>
      </div>
    );
}
export default Visions;