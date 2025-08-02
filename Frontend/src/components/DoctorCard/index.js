import {Link} from 'react-router-dom'
import { GoDotFill } from "react-icons/go"
import './index.css'

const DoctorCard = props => {
    const {doctorDetails} = props
    const {id,name,specialization,availability,image} = doctorDetails
    return (
        <Link to={`/doctors/${id}`} className='docCard-container'>
            <li className='docCard-item'>
                <img src={image} alt="fullName" className='docCard-img' />
                <p className={availability === "Available"?"green":"red"}><GoDotFill />  {availability}</p>
                <h1 className='docCard-name'>{name}</h1>
                <p className='docCard-specialization'>{specialization}</p>
            </li>
        </Link>
    )
}

export default DoctorCard
