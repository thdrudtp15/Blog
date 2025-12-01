import Info from '@/containers/Info';
import AboutMe from '@/containers/AboutMe';
import Projects from '@/containers/Projects';
import PersonalHistory from '@/containers/PersonalHistory';
import TechStack from '@/containers/TechStack';
import Others from '@/containers/Others';

const About = () => {
    return (
        <div>
            <Info />
            <PersonalHistory />
            <AboutMe />
            <Projects />
            <TechStack />
            <Others />
        </div>
    );
};
export default About;
