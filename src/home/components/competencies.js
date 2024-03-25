import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import certif1 from './certif1.png';
import certif2 from './certif2.png';
import certif3 from './certif3.png';
import certif4 from './certif4.png';
import { MDBContainer, MDBIcon } from 'mdb-react-ui-kit';


function Competencies(){
  const data = [
    {
      "imageurl": certif1,
      "alt": "Cerification 1"
    },
    {
      "imageurl": certif2,
      "alt": "Cerification 2"
    },
    {
      "imageurl": certif3,
      "alt": "Cerification 3"
    },
    {
      "imageurl": certif4,
      "alt": "Cerification 4"
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  
  return(
    <div className='p-0 mb-5' style={{height: 'max-content'}}>
      <MDBContainer>
        <h1 className='titleBawah devAlign text-center title mt-5'>OUR COMPETENCIES</h1>
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass=""
        customLeftArrow={<MDBIcon icon='circle-chevron-right' fas size='3x' className='position-absolute end-0' style={{color:'#DA2121'}}/>}
        customRightArrow={<MDBIcon icon='circle-chevron-left' fas size='3x' className='position-absolute start-0' style={{color:'#DA2121'}}/>}
        dotListClass=""
        draggable="false"
        focusOnSelect={false}
        infinite
        responsive={responsive}
        itemClass=""
        keyBoardControl="false"
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl="false"
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
      >
      {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className='m-auto py-5'
                >
                  <img alt='itu' className='text-center d-flex m-auto' src={item.imageurl} style={{height:'50vh', border:'4px solid #DA2121'}}></img>
                </div>
              );
            })}
      </Carousel>
      </MDBContainer>
    </div>
    );
}

export default Competencies;