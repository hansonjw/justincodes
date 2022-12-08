import React from 'react';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Interests from './components/Interests'
import Projects from './components/Projects'
import Nav from './components/Nav'
import Footer from './components/Footer'

// import components here

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
                text: 'Projects',
                description: "Here is a sample of some projects I've done",
                component:<Projects></Projects>
                },
                {
                id: 'contact',
                text: 'Contact',
                description: 'this is the CONTACT page...hello is this working??',
                component:<Contact></Contact>
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
                <div>Hello, World!</div>
                {this.state.navOptions.map((navOption) => (
                    <div>
                        {(this.state.currentOption==navOption.id) && navOption.component}
                    </div>
                ))}
                <Footer
                    navOptions = {this.state.navOptions}
                    currentOption = {this.state.currentOption}
                ></Footer>
            </div>
            )
    };
}


export default App