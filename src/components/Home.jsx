import Quote from './Quotes';
import Courses from './Courses';
import Navbar from './Navbar';

function Home(props){
        return(
        <>
            <Navbar browseCourses={true}/>
            <Quote />
            <Courses category={props.category}/>
        </>
        )
}

export default Home;