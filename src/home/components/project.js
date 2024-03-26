import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card4.png";

function Project(){
    return(
    <div className='d-flex flex-column pt-2 pt-lg-4 p-lg-5 p-5' style={{background:'#EEEEEE', height: 'max-content', }} id='projects'>
        <h1 className="titleBawah devAlign mb-4 text-center" >OUR PROJECTS</h1>
        <div className="d-flex flex-column justify-content-between mx-auto">
            <MDBRow className="mb-4 gx-5">
                <MDBCol lg='6' className="mb-lg-4 mb-4" >
                    <div className="">
                        <img alt="Project 1" src={card1} className="img-fluid imgHover"></img>
                    </div>
                </MDBCol>
                <MDBCol lg='6'>
                <div className="">
                        <img alt="Project 2" src={card2} className="img-fluid imgHover"></img>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4 gx-5">
                <MDBCol lg='6' className="mb-lg-4 mb-4">
                <div className="">
                        <img alt="Project 3" src={card3} className="img-fluid imgHover"></img>
                    </div>
                </MDBCol>
                <MDBCol lg='6'>
                <div className="">
                        <img alt="Project 4" src={card4} className="img-fluid imgHover"></img>
                    </div>
                </MDBCol>
            </MDBRow>
            {/* <div className='d-flex flex-row-reverse justify-content-between '>
            <MDBBtn className='' href="/projects" size='lg' style={{backgroundColor:'#DA2121',fontSize:'20px',borderRadius:'7px',marginBottom:'1rem', fontWeight:'300', textTransform:'none'}}>
                                    See Detailed
            </MDBBtn>
            </div> */}
        </div>
        
    </div>
    );
}

export default Project;