import { MDBCol, MDBRow, MDBIcon, MDBInput, MDBBtn, MDBTextArea, MDBContainer  } from "mdb-react-ui-kit";

function ContactForm(){
    return(
    <MDBContainer className="mx-5 mb-5 px-lg-5 h-100 mx-auto">
        <h1 className="titleBawah devAlign mb-4 text-center">Give Us A Touch</h1>
    <MDBRow>
        <MDBCol lg='4' className="d-none d-lg-block">
              <div className="p-5" style={{border: '5px solid #DA2121', borderRadius:'20px', height:'100%'}}>
                  <table className="fluid">
                    <tbody>
                        <tr>
                            <td rowSpan='2'>
                            <MDBIcon color='black' icon='location-dot' size='3x' className='me-2' />
                            </td>
                            <td className="fw-bold fs-4 m-0">
                                Location:
                            </td>
                        </tr>
                        <tr><td>Ruko Bukit Gading Mediterania Blok A Nomor 01 Jakarta Utara</td></tr>
                        <tr>
                            <td rowSpan='2'>
                            <MDBIcon color='black' icon='phone' size='3x' className='me-2' />
                            </td>
                            <td className="fw-bold fs-4 m-0">
                                Phone:
                            </td>
                        </tr>
                        <tr><td>+62 811 8880 0875</td></tr>
                        <tr>
                            <td rowSpan='2'>
                            <MDBIcon color='black' icon='envelope' size='3x' className='me-2' />
                            </td>
                            <td className="fw-bold fs-4 m-0">E-Mail:</td>
                        </tr>
                        <tr><td>admin@primaservitama.com</td></tr>
                    </tbody>
                  </table>
              </div>
        </MDBCol>
        <MDBCol lg='8'>
            <div className="p-5" style={{border: '5px solid #DA2121', borderRadius:'20px', height:'100%'}}>
                <form>
                <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' id='form3Example3' label='Subject' />
      <MDBTextArea  wrapperClass='mb-4' textarea="true" id='form3Example4' rows={4} label='Message' />
      <MDBBtn type='submit' className='mb-4 poppin-medium' style={{background:'#DA2121'}} block>
        Submit
      </MDBBtn>
                </form>
            </div>
        </MDBCol>
    </MDBRow>
    </MDBContainer>

);
}

export default ContactForm;