import React from 'react';

function About() {
    return (
        <div className=" mt-18 h-auto w-auto p-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16 text-center pt-20">

            <h2 className="text-5xl font-bold">About ZEEVA</h2>
            <p className="text-lg mt-4 px-6 max-w-3xl mx-auto">
            Welcome to Zeeva – Your Trusted Fire Safety Solutions Provider.

                    At Zeeva, we specialize in delivering top-quality fire safety equipment and comprehensive fire protection services for residential, commercial, and industrial clients.

                    Our extensive range includes fire extinguishers, cabinets, stands, fire blankets, safety signs, and other essential fire protection products. Every product we offer meets the highest safety standards, ensuring you receive the best fire safety solutions for your home, business, or industrial facility.

                    Whether you need fire safety equipment for an office, factory, or any other commercial space, Zeeva has the perfect solutions to meet your needs. With competitive pricing, flexible payment options, and fast, reliable delivery, we make fire safety accessible and hassle-free.

                    Don’t compromise on safety—protect your business and employees with Zeeva. Contact us today to explore our fire safety products and find the right solution for your needs.
            </p>
            </div>
           
            {/* Our Story */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-xl  hover:shadow-orange-600 hover:cursor-pointer shadow-orange-100 transition duration-100">
                <h3 className="text-3xl font-sans text-center">Our Story</h3>
                <p className="text-xl font-serif mt-4 p-2">
                ZEEVA: Revolutionizing Fire Safety with Innovation

ZEEVA was founded with a clear mission: to provide cutting-edge fire safety solutions that prevent disasters before they happen. As a startup driven by innovation and expertise, we began with a passionate team of engineers committed to making fire protection more accessible and effective.

Today, we are rapidly growing, serving residential, commercial, and industrial clients with high-quality fire safety products and services. With a focus on reliability, technology, and customer satisfaction, Zeeva is set to redefine fire safety standards worldwide.
                </p>
            </div>

            {/* Our Mission & Vision */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-xl  hover:shadow-orange-600 hover:cursor-pointer shadow-orange-100 transition duration-100">
                <h3 className="text-3xl font-sans text-center">Our Mission & Vision</h3>
                <p className="text-xl font-serif mt-4 p-2">
                <strong>Mission:</strong><br/>
                At Zeeva, our mission is to provide advanced, reliable, and fully compliant fire safety solutions that protect lives, property, and businesses. We are committed to equipping residential, commercial, and industrial spaces with the highest-quality fire protection products and services. Through continuous innovation and adherence to the strictest safety standards, we aim to create safer environments and reduce the risk of fire-related incidents.
<br/>
                <strong>Vision:</strong><br/>
                We envision a future where fire-related disasters are entirely preventable, and fire safety is a fundamental right rather than a privilege. Zeeva strives to become a global leader in fire protection technology, ensuring that every home, workplace, and industry has access to state-of-the-art fire safety solutions. By promoting awareness, developing cutting-edge products, and fostering a culture of safety, we are shaping a world where fire hazards are minimized, and lives are saved.
                    </p>
            </div>

            {/* Why Choose Us? */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-xl  hover:shadow-orange-600 hover:cursor-pointer shadow-orange-100 transition duration-100">
                <h3 className="text-3xl font-sans text-center">Why Choose ZEEVA?</h3>
                <p className="text-xl font-serif mt-4 p-2">
                At ZEEVA, we are committed to delivering fire safety solutions that meet and exceed global standards, ensuring maximum reliability, efficiency, and compliance. Our products are rigorously tested and certified by leading authorities, including:
                <ul className="space-y-4">
        {[
          { icon: "✅", title: "Industry-Certified Fire Protection Solutions:", description: "Our products meet the highest safety standards, ensuring compliance and reliability." },
          { icon: "✅", title: "Cutting-Edge Fire Detection & Suppression Technology", description: "We leverage the latest advancements to provide fast and effective fire protection." },
          { icon: "✅", title: "Tailored Solutions for Homes, Businesses & Industries", description: "Every space is unique, and we offer customized fire safety plans to meet your specific needs." },  
          { icon: "✅", title: "Rapid Response & Emergency Support", description: "Fire emergencies require immediate action, and our team is always ready to assist when it matters most." },
          { icon: "✅", title: "Sustainable & Eco-Friendly Fire Safety Products", description: "We prioritize green technology, offering environmentally responsible fire protection solutions." }

        
        ].map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="text-2xl mr-3">{item.icon}</span>
            <span>
              <strong>{item.title}</strong> – {item.description}
            </span>
          </li>
        ))}
      </ul>


where innovation meets safety, and prevention saves lives.
</p>


            </div>

            {/* Our Technology */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-xl  hover:shadow-orange-600 hover:cursor-pointer shadow-orange-100 transition duration-100">
                <h3 className="text-3xl font-sans text-center">Cutting-Edge Fire Safety Technology</h3>
                <p className="text-xl font-serif mt-4 p-2">
                At ZEEVA, we are committed to delivering fire safety solutions that meet and exceed global standards, ensuring maximum reliability, efficiency, and compliance. Our products are rigorously tested and certified by leading authorities, including:
                <ul className="space-y-4">
        {[
          { icon: "🔥", title: "Smart Fire Alarms", description: "AI-powered sensors provide early fire detection, instantly alerting users for quick action." },
          { icon: "🛠️", title: "Automatic Fire Suppression Systems", description: "Intelligent, self-activating fire suppression systems minimize damage and prevent escalation." },
          { icon: "📡", title: "Remote Monitoring", description: "Stay in control with real-time fire safety status, accessible from your phone anytime, anywhere." },
          { icon: "♻", title: "Eco-Friendly Extinguishing Agents", description: "We use non-toxic, environmentally safe fire suppressants that protect both people and the planet." }
        ].map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="text-2xl mr-3">{item.icon}</span>
            <span>
              <strong>{item.title}</strong> – {item.description}
            </span>
          </li>
        ))}
      </ul>
                </p>
            </div>

            

             {/* Founder Section */}
             <div
             className='mt-12 p-6 bg-white rounded-lg shadow-xl shadow-orange-100  flex flex-col md:flex-row
            transition-all duration-300 ease-in-out  
            hover:shadow-2xl hover:shadow-orange-600 hover:cursor-pointer'
             >
                <img 
                    src="/images/founder.jpg" // Replace with actual image path
                    alt="Founder of ZEEVA" 
                    className="w-48 h-48 rounded-full shadow-lg m-5"
                />
                <div>
                    <h3 className="text-3xl font-sans text-center md:text-left">Meet Our Founder</h3>
                    <p className="text-xl font-serif mt-4 text-center md:text-left">
                    Mic, the visionary behind ZEEVA, brings over 10 years of expertise in fire safety and emergency management. With a strong background in Fire Protection Engineering, he has dedicated his career to advancing fire safety technologies and ensuring safer environments.
<br/>
                    His passion for saving lives and protecting property led to the foundation of ZEEVA, where he continues to drive research, innovation, and fire safety education. Under his leadership, ZEEVA is making a significant impact in fire prevention and safety solutions, shaping the future of fire protection.
                    </p>
                </div>
            </div>

            {/* Contact Us */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-xl  hover:shadow-orange-600 hover:cursor-pointer shadow-orange-100 transition duration-100">
                <p className="text-xl font-light">
                    Have questions? Get in touch with our fire safety experts today!
                </p>
                <a href="/contact" className="text-blue-600 font-semibold mt-4 inline-block">Contact Us →</a>
            </div>
        </div>
    );
}

export default About;
