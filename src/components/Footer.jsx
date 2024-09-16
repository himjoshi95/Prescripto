import { assets } from "../assets/assets"

const Footer = () => (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* Left Section */}
            <div>
                <img className="mb-5 w-40" src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 text-gray-600 leading-6">Prescripto is your go-to solution for seamless doctor appointments, managing your prescriptions, and staying on top of your health needs. Our goal is to provide quality healthcare services at your convenience.</p>
    
            </div>

            {/* Center Section */}
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            {/* Right Section */}
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>+1-212-324-6666</li>
                    <li>presciptodocs@gmail.com</li>
                </ul>

            </div>
        </div>
        {/* copyright */}
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@ Prescripto - All Rights Reserved.</p>

        </div>
    </div>
)

export default Footer