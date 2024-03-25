import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MDBIcon, MDBContainer } from 'mdb-react-ui-kit';

function Testimony(){
  const data = [
    {
      "body": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor metus nec turpis sagittis, ac tincidunt justo consectetur.”",
      "person": "John Doe",
      "position": "Head of Department, ShipSail"
    },
    {
      "body": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor metus nec turpis sagittis, ac tincidunt justo consectetur.”",
      "person": "Jonathan Doe",
      "position": "Engineer, ShipSail"
    },
    {
      "body": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor metus nec turpis sagittis, ac tincidunt justo consectetur.”",
      "person": "Barry Allen",
      "position": "Specialist, Greenwich"
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
    <div className='p-0 mb-5' style={{background:'#EEEEEE', height: 'max-content'}}>
      <MDBContainer>
        <h1 className='titleBawah devAlign text-center title mt-5 pt-5'>TESTIMONIALS</h1>
        <p className='text-center fw-bolder'>What our client says</p>
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
                  className='m-5 px-3'
                >
                  <div className='text-center'>
                  <MDBIcon icon='circle-user' fas color='black' size='7x' />
                  </div>
                  <h1 className='fst-italic fw-light fs-2 text-center my-4'>
                    {item.body}
                  </h1>
                  <p className='text-center fst-italic fs-5 m-0'>{item.person}</p>
                  <p className='text-center fst-italic fs-5 m-0'>{item.position}</p>
                </div>
              );
            })}
      </Carousel>
      </MDBContainer>
    </div>
  );
}

export default Testimony;