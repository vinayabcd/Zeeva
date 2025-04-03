import { Link } from 'react-router-dom';
import 'tailwindcss';
import Carousel from './Carousel.jsx';

function Home() {
    return (
        <div className="w-full bg-white">
            <Carousel/>
            

            {/* Services Overview - Grid Layout */}
            <div className="mt-2 container mx-auto p-6">
                <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Fire Risk Assessments", icon: "🔥" },
                        { title: "Smart Fire Alarm Systems", icon: "🚨" },
                        { title: "Fire Extinguisher Installation", icon: "🧯" },
                        { title: "Fire Suppression Systems", icon: "💦" },
                        { title: "Emergency Planning & Training", icon: "📋" },
                    ].map((service, index) => (
                        <div key={index} className="bg-white shadow-lg p-6 text-center rounded-lg">
                            <div className="text-5xl">{service.icon}</div>
                            <h3 className="text-2xl font-sans mt-4">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
                <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
                    <h1 className="text-5xl font-sans">Your Trusted Fire Safety Partner</h1>
                    <p className="text-xl mt-4 font-serif">Protecting lives and property with cutting-edge of <strong>ZEEVA</strong> fire safety solutions.</p>
                    <Link to="/services" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Explore Our Solutions</Link>
                </div>
            </div>

            {/* Products Overview */}
            <div className="container mx-auto p-6 bg-gray-100 text-center rounded-lg">
                <h2 className="text-4xl font-sans">Fire Safety Products</h2>
                <p className="text-xl font-serif mt-4">High-quality fire safety equipment tailored to your needs.</p>
                <ul className="text-xl font-serif mt-4 list-disc list-inside space-y-2">
                    <li>✔ Fire Extinguishers (ABC, CO₂, Foam & More)</li>
                    <li>✔ Smart Smoke Detectors & Fire Alarms</li>
                    <li>✔ Fire-Resistant Doors & Emergency Exit Signs</li>
                </ul>
                <Link to="/products" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Browse Products</Link>
            </div>

            {/* Testimonials Section
            <div className="container mx-auto p-6 text-center">
                <h2 className="text-4xl font-bold">What Our Clients Say</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { quote: "ZEEVA's fire alarm system saved our office!", name: "John Doe" },
                        { quote: "Their training sessions were invaluable for our staff.", name: "Jane Smith" },
                        { quote: "Excellent service and top-notch products!", name: "Michael Lee" }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                            <p className="text-xl italic">“{testimonial.quote}”</p>
                            <p className="mt-4 font-semibold">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div> */}


            {/* Contact Section */}
            <div className=" mt-2 container mx-auto p-6 text-center bg-gray-200 rounded-lg">
                <h2 className="text-4xl font-sans">Get in Touch</h2>
                <p className="text-xl font-serif mt-4">Have questions? Contact us today!</p>
                <Link to="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Contact Us</Link>
            </div>

            {/* Call to Action */}
            <div className="text-2xl font-bold text-red-600 text-center mt-6 p-6 animate-pulse">
                🚨 Prevention is better than cure – Take action today!
            </div>
        </div>
    );
}

export default Home;


