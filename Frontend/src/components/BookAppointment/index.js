import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import './index.css'

const BookAppointment = () => {
  const { id: doctorId } = useParams()

  const [formData, setFormData] = useState({
    patientName: '',
    contact: '',
    date: '',
    reason: ''
  })

  const [status, setStatus] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const appointmentData = { ...formData, doctorId }
      const API_URL = process.env.REACT_APP_API_URL
      
      await axios.post(`${API_URL}/appointments`, appointmentData)
      setStatus('success')
      setShowPopup(true)
      setFormData({ patientName: '', contact: '', date: '', reason: '' })
      setShowPopup(true)
      setTimeout(() => {
        setShowPopup(false)
        setStatus(null)
      }, 3000)
    } catch (error) {
      console.error('Error booking appointment:', error)
      setStatus('error')
      setShowPopup(false)
    }
  }

  const handleClosePopup = () => {
        setShowPopup(false)
        setStatus(null)
    }

  return (
    <>
        <Navbar />
        <div className='book-appointment-bg-container'>
            <div className="appointment-form-container">
                <h2 className='book-appointment-heading'>Book Appointment</h2>
                <form onSubmit={handleSubmit} className="appointment-form">
                    <label htmlFor="name" className='appointment-form-label'>YOUR NAME :</label>
                    <input
                        type="text"
                        name="patientName"
                        id="name"
                        className='book-appointment-input'
                        value={formData.patientName}
                        onChange={handleChange}
                        placeholder='ENTER YOUR NAME'
                        required
                    />
                    <label htmlFor="contact" className='appointment-form-label'>CONTACT INFO :</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        className='book-appointment-input'
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder='ENTER CONTACT NUMBER'
                        required
                    />
                    <label htmlFor="date" className='appointment-form-label'>APPOINTMENT DATE :</label>
                    <input
                        type="date"
                        name="date"
                        id='date'
                        value={formData.date}
                        onChange={handleChange}
                        className='book-appointment-input'
                        required
                    />
                    <label htmlFor="reason" className='appointment-form-label'>REASON :</label>
                    <textarea
                        name="reason"
                        id="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder='ENTER REASON'
                        className='book-appointment-input'
                        required
                    />
                    <button type="submit" className='appointment-form-button'>Book Now</button>

                    {status === 'success' && <p className="success-message">Appointment booked successfully!</p>}
                    {status === 'error' && <p className="error-message">Something went wrong. Please try again.</p>}
                </form>
                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                        <h3 className='popup-heading'>Appointment Booked </h3>
                        <p className='popup-description'>Your appointment has been successfully scheduled.</p>
                        <button onClick={handleClosePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </>
  )
}

export default BookAppointment
