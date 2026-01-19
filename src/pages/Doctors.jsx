import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'



const Doctors = () => {

  const { speciality } = useParams()
   console.log("The speciality is ",speciality);
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)
  const applyFilter = () => {
    if (speciality) {
     
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className='mx-2  min-h-screen sm:mx-20 pb-10 mt-5'>
      <p className='text-white text-xl'>Browse through the specialists across various spheres...</p>
      <div className='flex flex-col sm:flex-col items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex gap-4 text-sm text-white ${showFilter ? 'flex-col' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Psychiatrist' ? navigate('/doctors') : navigate('/doctors/Psychiatrist')} className={`hover:bg-amber-600  w-[94vw] sm:w-auto px-4 py-1.5  border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Psychiatrist' ? 'bg-amber-600 text-white ' : ''}`}>Psychiatrists</p>
          <p onClick={() => speciality === 'Therapist' ? navigate('/doctors') : navigate('/doctors/Therapist')} className={`hover:bg-amber-600  w-[94vw] sm:w-auto px-4  py-1.5  border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Therapist' ? 'bg-amber-600 text-white  ' : ''}`}>Therapists</p>
          <p onClick={() => speciality === 'Monk' ? navigate('/doctors') : navigate('/doctors/Monk')} className={`hover:bg-amber-600  w-[94vw] sm:w-auto px-4  py-1.5  border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Monk' ? 'bg-amber-600 text-white  ' : ''}`}>Monks</p>
          <p onClick={() => speciality === 'Wellness Coach' ? navigate('/doctors') : navigate('/doctors/Wellness Coach')} className={`hover:bg-amber-600  w-[94vw] sm:w-auto px-4 py-1.5  border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Wellness Coach' ? 'bg-amber-600 text-white ' : ''}`}>Wellness Coaches</p>
          <p onClick={() => speciality === 'Spiritual Mentor' ? navigate('/doctors') : navigate('/doctors/Spiritual Mentor')} className={`hover:bg-amber-600  w-[94vw] sm:w-auto  py-1.5 px-4  border border-gray-300 rounded-full transition-all cursor-pointer ${speciality === 'Spiritual Mentor' ? 'bg-amber-600 text-white  ' : ''}`}>Spiritual Mentors</p>
        
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] bg-white rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
