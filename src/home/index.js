import HomePage from './components/homepage';
import About from './components/about';
import Visions from './components/visions';
import Services from './components/services';
import Project from './components/project';
import Competencies from './components/competencies';
import Testimony from './components/testi';
import ContactForm from './components/conform';

function Home() {
    return(
        <>
            <HomePage />
            <About />
            <Visions />
            <Services />
            <Project />
            <Competencies />
            <Testimony />
            <ContactForm />
        </>
    );
}

export default Home;