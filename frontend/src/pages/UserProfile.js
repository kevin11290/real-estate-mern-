import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../sassStyles/pages/UserProfile.scss'
import Loader from '../utilities/Loader'

const ShowUserInfo = () => {

    const userData = useSelector(state => state.profile)
    const { isError, isSuccess, message, profile, isLoading } = userData

    const { address, city, country, email, firstname, lastname, number, telephone, username, zip } = profile

    const [ firstName, setFirstName ] = useState(firstname)
    const [ lastName, setLastName ] = useState(lastname)
    const [ street, setStreet ] = useState(address)
    const [ houseNumber, setHouseNumber ] = useState(number)
    const [ homeTown, setHomeTown ] = useState(city)
    const [ countryName, setCountryName ] = useState(country)
    const [ postalCode, setPostalCode ] = useState(zip)
    const [ emailAddress, setEmailAddress ] = useState(email)
    const [ userName, setUserName ] = useState(username)
    const [ phoneNumber, setPhoneNumber ] = useState(telephone)


const handleSubmit = (e) => {
    e.preventDefault()
    
    const update = {
        firstname: firstName, 
        lastname: lastName,
        address: street,
        number: houseNumber,
        city: homeTown, 
        country: countryName,
        zip: postalCode,
        email: emailAddress,
        telephone: phoneNumber,
        username: userName 
    }
    console.log(update)
}

    return (
        <div className="profileContainer">
            <div className="profileHeader">Update User profile</div>
            {profile ?
                <div className="profile">
                    <div className="profile_users">
                    
                        <form onSubmit={handleSubmit} className="form">
                            <div className="inputBox">
                                <label htmlFor="fullname"><span>Fullname</span><span>:</span></label>
                                <input type="text" placeholder="Firstname" name="firstname" defaultValue={firstname} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="lastname"><span>Lastname</span><span>:</span></label>
                                <input type="text" placeholder="Lastname" name="lastname" defaultValue={lastname} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="address"><span>Address</span><span>:</span></label>
                                <input type="text" placeholder="Address" name="address" defaultValue={address} onChange={(e) => setStreet(e.target.value)} />
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="number"><span>Number</span><span>:</span></label>
                                <input type="text" placeholder="Number" name="number" defaultValue={number} onChange={(e) => setHouseNumber(e.target.value)} />
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="city"><span>City</span><span>:</span></label>
                                <input type="text" placeholder="City" name="city" defaultValue={city} onChange={(e) => setHomeTown(e.target.value)} />
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="zip"><span>Zip</span><span>:</span></label>
                                <input type="text" placeholder="Zip" name="zip" defaultValue={zip} onChange={(e) => setPostalCode(e.target.value)} />
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="country"><span>Country</span><span>:</span></label>
                                <input type="text" placeholder="Country" name="country" defaultValue={country} onChange={(e) => setCountryName(e.target.value)} />
                            </div>
                           
                            <div className="inputBox">
                                <label htmlFor="email"><span>Email</span><span>:</span></label>
                                <input type="text" placeholder="Email" name="email" defaultValue={email} onChange={(e) => setEmailAddress(e.target.value)} />
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="telephone"><span>Telephone</span><span>:</span></label>
                                <input type="text" placeholder="Telephone" name="telephone" defaultValue={telephone} onChange={(e) => setPhoneNumber(e.target.value)} />
                            </div>
                            
                            <div className="inputBox">
                                <label htmlFor="username"><span>Username</span><span>:</span></label>
                                <input type="text" placeholder="Username" name="username" defaultValue={username} onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            

                            <button type="submit" className="submitBtn">Update Profile</button>
                        </form>
                       
                    </div>
                </div> : <Loader />}
        </div>
    )
}

export default ShowUserInfo
