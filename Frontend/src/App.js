import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import BookAppointment from './components/BookAppointment'
import ContactUs from './components/ContactUs'
import AllDoctors from './components/AllDoctors'
import DoctorDetails from './components/DoctorDetails'
import './App.css'

const App = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all-doctors" component={AllDoctors} />
        <Route exact path="/book-appointment" component={BookAppointment} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/doctors/:id" component={DoctorDetails} />
    </Switch>
)

export default App
