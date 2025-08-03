import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { useParams,Link } from 'react-router-dom'
import { MdVerified } from "react-icons/md"
import { FaStar } from "react-icons/fa6"
import { HiLocationMarker } from "react-icons/hi"
import { GoDotFill } from "react-icons/go"
import axios from 'axios'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './index.css'

const DoctorDetails = () => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState(null)
  const [relatedDoctors, setRelatedDoctors] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);


  useEffect(() => {
    const fetchDoctorAndRelated = async () => {
    const API_URL = process.env.REACT_APP_API_URL  
      try {
        const doctorRes = await axios.get(`${API_URL}/doctors/${id}`)
        const allRes = await axios.get(`${API_URL}/doctors`)

        setDoctor(doctorRes.data)
        const allDoctors = Array.isArray(allRes.data) ? allRes.data : allRes.data.doctors || []

       const related = allDoctors.filter(d =>
          d.specialization?.toLowerCase() === doctorRes.data.specialization?.toLowerCase() &&
          String(d.id) !== String(doctorRes.data.id)
        )
        setRelatedDoctors(related)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchDoctorAndRelated()
  }, [id])

  return (
    <>
      <Navbar />
      <div className='dd-bg-container'>
        {isLoading ? (<ClipLoader
          height="80"
          width="80"
          color="#4fa94d"
        />):(<><div className='dd-card-container'>
          <div className='dd-img-container'>
            <img src={doctor.image} alt={doctor.name} className='dd-img' />
          </div>
          <div className='dd-card-about'>
            <h1 className='dd-heading'>{doctor.name} <span className='dd-icon'><MdVerified size={23} /></span></h1>
            <p className='dd-qualification'>{doctor.qualification} - {doctor.specialization}</p>
            <p className='dd-about-heading'>Experience : <span className='dd-fees'>{doctor.experience} Years</span></p>
            <h2 className='dd-about-heading'>About</h2>
            <p className='dd-about'>{doctor.about}</p>
            <div className='dd-rating-container'>
              <div className='dd-star-container'>
                <p className='dd-star'><FaStar size={20} /></p>
                <p className='dd-qualification'>{doctor.rating} Rating</p>
              </div>
              <div className='dd-star-container'>
                <p className='dd-star'><HiLocationMarker size={20} /></p>
                <p className='dd-qualification'>{doctor.location}</p>
              </div>
            </div>
            <p className='dd-about-heading'>Appointment Fees : <span className='dd-fees'>{doctor.fees} Rs.</span></p>
            <Link to="/book-appointment" className="book-appointment-link"><p className='book-appointment'>Book Appointment</p></Link>
          </div>
        </div>
           {relatedDoctors.length === 0 ? (
        <p>No related doctors found.</p>
      ) : (
        <>
          <h1 className="dd-heading rd">Related Doctors</h1>
          <p className='dd-qualification'>Simply browse through our extensive list of trusted doctors.</p>
          <ul className='rd-list-container'>
          {relatedDoctors.map(d => (
            <Link to={`/doctors/${d.id}`} className='rd-container'>
                <li className='rd-item'>
                  <img src={d.image} alt="fullName" className='rd-img' />
                  <p className={d.availability === "Available"?"green":"red"}><GoDotFill />  {d.availability}</p>
                  <h1 className='rd-name'>{d.name}</h1>
                  <p className='rd-specialization'>{d.specialization}</p>
                </li>
            </Link>
          ))}
        </ul>
        </>
      )}
        </>)}
      </div>
      <Footer />
    </>
  )
}


export default DoctorDetails
