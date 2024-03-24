import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import certif1 from './certif1.png';
import certif2 from './certif2.png';
import certif3 from './certif3.png';
import certif4 from './certif4.png';


function Competencies(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

      const data = [
        {
          title: 'Certification 1',
          img: certif1,
        },
        {
          title: 'Certification 2',
          img: certif2,
        },
        {
          title: 'Certification 3',
          img: certif3,
        },
        {
          title: 'Certification 4',
          img: certif4,
        },
      ];
    return(
    <div>
        <h1 className="titleBawah devAlign mb-4 text-center mt-5">OUR COMPETENCIES</h1>

        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  customTransition="all ease .5"
  transitionDuration={500}
  containerClass="container"
  dotListClass="custom-dot-list-style"
  itemClass=""
>
  <div><img alt='Certification 1' src={certif1}></img></div>
  <div><img alt='Certification 1' src={certif2}></img></div>
  <div><img alt='Certification 1' src={certif3}></img></div>
  <div><img alt='Certification 1' src={certif4}></img></div>
</Carousel>;
    </div>
    );
}

export default Competencies;