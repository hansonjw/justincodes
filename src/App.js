import React from 'react';

// import pages here
import Home from './pages/Home'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Interests from './pages/Interests'
import Projects from './pages/Projects'
import Wedding from './pages/Wedding'
import Nav from './pages/components/Nav'
import Footer from './pages/components/Footer'

// Routing modules
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';

// for SASS and customizing bootstrap
import './assets/scss/main.scss'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            navOptions: [            
                {
                to: '',
                text: 'About Me',
                },
                {
                to: 'experience',
                text: 'Experience',
                },
                {
                to: 'code',
                text: 'Code',
                },
                {
                to: 'contact',
                text: 'Contact',
                },
                {
                to: 'interests',
                text: 'Interests',
                },
                {
                to: 'reginaandjustin',
                text: 'Regina And Justin',
                },
            ],
            currentOption: 'home'
        }
    };

    render(){
        // Get the current path from props
        const { location } = this.props;
        const hideNavFooter = location && location.pathname === '/reginaandjustin';
        return(
            <div>
                {!hideNavFooter && <Nav navOptions={this.state.navOptions}></Nav>}
                <div class="py-4">
                    <Routes>
                        <Route exact path="/" element={<Home />} errorElement={<Home />}/>
                        <Route exact path="interests" element={<Interests />} />
                        <Route exact path="experience" element={<Experience />} />
                        <Route exact path="code" element={<Projects />} />
                        <Route exact path="contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                        <Route exact path="reginaandjustin" element={<Wedding />} />
                    </Routes>
                </div>
                {!hideNavFooter && <Footer></Footer>}
            </div>
        )
    };
}

// Functional wrapper to provide location to App
function AppWithRouter(props) {
    const location = useLocation();
    return <App {...props} location={location} />;
}

// Main export with BrowserRouter
export default function MainApp() {
    return (
        <BrowserRouter>
            <AppWithRouter />
        </BrowserRouter>
    );
}