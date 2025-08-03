import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import DoctorCard from '../DoctorCard'
import Specialization from '../Specialization'

const specializationList = [
    {specializationId:"ALL",displayText:"All"},
    {specializationId:"GENERAL PHYSICIAN",displayText:"General physician"},
    {specializationId:"GYNECOLOGIST",displayText:"Gynecologist"},
    {specializationId:"DERMATOLOGIST",displayText:"Dermatologist"},
    {specializationId:"PEDIATRICIAN",displayText:"Pediatrician"},
    {specializationId:"NEUROLOGIST",displayText:"Neurologist"},
    {specializationId:"GASTROENTEROLOGIST",displayText:"Gastroenterologist"}
]


class AllDoctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      activeSpecializationId:specializationList[0].specializationId,
      searchQuery: '',
    };
  }

  componentDidMount() {
    const API_URL = process.env.REACT_APP_API_URL
    axios.get(`${API_URL}/doctors`)
      .then(response => {
        const data = Array.isArray(response.data)
        ? response.data
        : response.data.doctors || [];
        this.setState({ doctors: data });
      })
      .catch(error => {
            if (error.response) {
              console.error('Server error:', error.response.status, error.response.data);
              alert('Server error: ' + error.response.status);
            } else if (error.request) {
              console.error('No response received:', error.request);
              alert('No response received. Is server running on port 5000?');
            } else {
              console.error('Axios setup error:', error.message);
              alert('Axios error: ' + error.message);
            }
          });
        }
    
    handleSearchChange = event => {
      this.setState({ searchQuery: event.target.value })
    }

    clickItem = specialValue => {
        this.setState({activeSpecializationId:specialValue})
    }

    render() {
        const {doctors,activeSpecializationId,searchQuery } = this.state
        const filteredDoctors = activeSpecializationId === "ALL"
            ? doctors
            : doctors.filter(
                d => d.specialization.toLowerCase() === activeSpecializationId.toLowerCase()
              )
        const visibleDoctors = filteredDoctors.filter(d =>
            d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.specialization.toLowerCase().includes(searchQuery.toLowerCase())
          )
        return (
            <>
                <Navbar />
                <div className='all-doctors-bg-container'>
                    <input
                        type="search"
                        placeholder="Search by name or specialization"
                        value={searchQuery}
                        onChange={this.handleSearchChange}
                        className="doctor-search-input"
                    />
                    <div className='all-doctors-card-container'>
                        <div className='all-doctors-filter-container'>
                            <p className='doctor-filter-heading'>Browse through the doctors specialist.</p>
                            <ul className='specialization-list-container'>
                                {specializationList.map(each => (
                                    <Specialization key={each.specializationId} details={each} clickItem={this.clickItem} isActive={activeSpecializationId === each.specializationId} />
                                ))}
                            </ul>
                        </div>
                        <>
                          {doctors.length === 0 ? (<p className='doctor-filter-heading no-doctor'>No Doctors Available</p>):
                            (<ul className='all-doctor-card-list'>
                                {visibleDoctors.map(eachDoctor => (
                                    <DoctorCard key={eachDoctor.id} doctorDetails={eachDoctor} />
                                ))}
                            </ul>)
                          }
                        </>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default AllDoctors
