import React from 'react';
import { MDBContainer} from 'mdb-react-ui-kit'

function Visions() {
    return (
      <MDBContainer breakpoint='lg' style={{ display: 'flex', flexDirection: 'column', height:'100vh'}}>
        <h1 className='vision' style={{ color: '#DA2121', width: '50px', padding: '10px', marginBottom: '20px' }}>VISION/MISSION/GOALS</h1>
  
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom:'20px', marginTop:'50px'}}>
          <div style={{ border: '2px solid #DA2121', padding: '30px', flex: '1', marginRight: '10px', height: '70vh'}}>
            <h2 className='mision' style={{ textAlign:'center'}}>Mission</h2>
            <p style={{fontSize: '23px'}}>Our mission to maintain a high degree of customer satisfaction, trust, integrity, and reliability through delivering quality services conforming to industry best practices, while constantly continuing to improve our standard and processes</p>
          </div>
  
          <div style={{ border: '2px solid #DA2121', padding: '30px', flex: '1', marginRight: '10px' }}>
            <h2 className='vision'style={{ textAlign:'center'}}>Vision</h2>
            <p style={{fontSize: '23px'}}>Our vision to be recognized as a national class leader in the installation, repair, and maintenance of large bore marine diesel engines and generators. We strive to the exceed the highest standard and our quality of our work, our commitment to on timme delivery and for providing excellent customer value</p>
          </div>
  
          <div style={{ border: '2px solid #DA2121', padding: '30px', flex: '1' }}>
            <h2 className='value'style={{ textAlign:'center'}}>Values</h2>
            <p style={{fontSize: '23px'}}>We recognized that our strength is the quality of the people who comprise our corporate team. Our commitment to their job satisfaction, their individual personal and professional growth, and to the synergy of our team</p>
          </div>
        </div>
      </MDBContainer>
    );
}
export default Visions;