import React from 'react';

// import pages here
import Home from './pages/Home'
import Contact from './pages/Contact'
import Interests from './pages/Interests'
import Projects from './pages/Projects'
import Nav from './pages/components/Nav'
import Footer from './pages/components/Footer'

// for SASS and customizing bootstrap
import './assets/scss/main.scss'



class App extends React.Component{
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
        this.state = {
            navOptions: [            
                {
                id: 'home',
                text: 'Home',
                description: 'Welcome to my personal website',
                component: <Home></Home>
                },
                {
                id: 'projects',
                text: 'Code',
                description: "Here is a sample of some projects I've done",
                component: <Projects></Projects>
                },
                {
                id: 'contact',
                text: 'Contact',
                description: 'this is the CONTACT page...hello is this working??',
                component: <Contact></Contact>
                },
                {
                id: 'interests',
                text: 'Interests',
                description: 'Here are some pictures and interests of mine',
                component: <Interests></Interests>
                }],
            currentOption: 'home'
        }
        // const [currentOption, setCurrentOption] = useState(navOptions[0]);
    };

    changePage(pageId) {
        this.setState({currentOption: pageId});
    }


    render(){
        return(
            <div>
                <Nav
                    navOptions = {this.state.navOptions}
                    currentOption = {this.state.currentOption}
                    changePage = {this.changePage}
                ></Nav>
                <div class="py-4">
                    {this.state.navOptions.map((navOption) => (
                        <div>
                            {(this.state.currentOption==navOption.id) && navOption.component}
                        </div>
                    ))}
                </div>
                <Footer
                    navOptions = {this.state.navOptions}
                    currentOption = {this.state.currentOption}
                ></Footer>
            </div>
            )
    };
}


export default App