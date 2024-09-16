
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { useContext, useEffect, useState } from "react"


const RelatedDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)
    const { docId } = useParams()    
    const [filterDoc, setFilterDoc] = useState([])
    
    const {speciality} = doctors.find(doc => doc._id === docId)
    
    const applyFilter = () => {
        if( doctors.length > 0 && speciality) {
            setFilterDoc(doctors.filter(doc => (doc.speciality === speciality && doc._id != docId)))
        }else{
            setFilterDoc(doctors)
        }
    }

    useEffect(() => {
        applyFilter()
    },[docId,speciality,doctors])

    return (
        <div className="mt-10">
            <h1 className="text-center text-3xl font-medium my-2" >Related Doctors</h1>
            <p className="text-center text-sm font-light text-gray-400">Simply browse through our extensive list of trusted doctors</p>
            <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
            {filterDoc.slice(0,5).map((item, index) => (
                <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0,0) }} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" key={index}>
                    <img className="bg-blue-50" src={item.image} alt="" />
                    <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-center text-green-500">
                            <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Available</p>
                        </div>
                        <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                        <p className="text-gray-600 text-sm">{item.speciality}</p>
                    </div>
                </div>
            ))}   
        </div>
        </div>
    )

}

export default RelatedDoctors