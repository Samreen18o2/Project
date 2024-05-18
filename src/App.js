import './App.css';
import AboutUsComponent from './components/AboutUsComponent';
import ContactComponent from './components/ContactComponent';
import FAQComponent from './components/FAQComponent';
import FooterComponent from './components/FooterComponent';
import Home from './components/Home';
import PartnerWithUsComponent from './components/PartnerWithUsComponent';
import ProjectsComponent from './components/ProjectsComponent';
import UsersComponent from './components/UsersComponent';
import DonationFormComponent from './components/DonationFormComponent';
import VolunteerComponent from './components/VolunteerComponent';
import ZakatCalculator from './components/ZakatCalculator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/achievements' element={<UsersComponent />} />
          <Route path='/donate' element={<DonationFormComponent />} />

          <Route path='/about' element={<AboutUsComponent />} />
          <Route path='/projects' element={<ProjectsComponent />} />
          <Route
            path='/donate/:projectId'
            element={<DonationFormComponent />}
          />
          <Route path='/partner' element={<PartnerWithUsComponent />} />
          <Route path='/contact' element={<ContactComponent />} />
          <Route path='/zakat-calculator' element={<ZakatCalculator />} />
          <Route path='/volunteer' element={<VolunteerComponent />} />
          <Route path='/faq' element={<FAQComponent />} />
        </Routes>
      </Router>

      <FooterComponent />
    </div>
  );
}

export default App;
