// import React, { useState } from 'react'
// import 'tailwindcss'
// function Contact() {
  
//     const [FormData,setFormData]=useState({
//       name:'',mail:'',phoneno:'',message:''
//     })
    
//     const handleChange=(e)=>{
//       setFormData({...FormData,[e.target.name]:e.target.value})
//       console.log(FormData);
//     }

//     function handlesubmit(e){
//       e.preventDefault()
//       console.log("name:"+FormData.name);
//       console.log("email:"+FormData.mail);
//       console.log("phone:"+FormData.phoneno);
//       console.log("message:"+FormData.message);

//       setFormData({
//         name:'',email:'',phoneno:'',message:''
//       })

//     }

//   return (
//     <>
//     <div className='mt-40 pl-5'>
//     <h1>Contact Us – ZEEVA Fire Solutions</h1>
//             <p className='text-xl font-light'>We’re Here to Help!
//             Have questions about fire safety solutions? Need a consultation or a quote? Contact us, and our team will assist you promptly.
//             </p>
//             </div>
//     <div className=''>
//       <div>
      
//       </div>
            
//             <br/>

//             <div className='w-fit h-fit shadow-lg rounded-b-lg md:w-1/4 items-center pt-10'>
//                 <h4>Get a Free Consultation!</h4>
//                 <br/>
//                 <form className='pl-2' onSubmit={handlesubmit}>
//                   <label htmlFor="text">Name:</label>
//                   <input type="text" placeholder='Enter Your Name' className='border-2' name='name' value={FormData.name} onChange={handleChange}/><br/><br/>
//                   <label htmlFor='text' >Email:</label>
//                   <input type='text' placeholder='Enter Your Email' className='border-2' name='email' value={FormData.email} onChange={handleChange}/><br/><br/>
//                   <label htmlFor='Number' >Phone:</label>
//                   <input type="text" placeholder='Phone Number' className='border-2' name='phoneno' value={FormData.phoneno} onChange={handleChange}/><br/><br/>
//                   <label htmlFor='text' >Your Message:</label>
//                   <textarea 
//                       id="message" 
//                       name="message" 
//                       placeholder="Your Message" 
//                       className="border-2 w-full p-2 rounded-md focus:ring-2 focus:outline-none" 
//                       value={FormData.message} 
//                       onChange={handleChange} 
//                       rows="4">
//                   </textarea><br/><br/>
//                   <div className='pl-30'>
//                   <button className='border-2 bg-blue-400 rounded-b-sm justify-center'>Submit</button>
//                   </div>
//                   <br/>
//                 </form>
//                 </div> 

//                 <br/><br/>
//                 <div className='w-full h-fit shadow-lg  md:w-1/4 items-center pt-10 pr-15'>
//             <h4> 📍 Our Office</h4><br/>
//             <p className='text-xl pl-5'>
//             <b> ZEEVA Fire Solutions</b><br/>
//               Vijayawada,AndhraPradesh<br/>
//             📞 Phone: 9885542524<br/>
//             📧 Email: zeevainfo@gamil.com<br/>
//             🕒 Business Hours:<br/>

//             <b>Monday - Friday</b>:<br/> 9:00 AM – 6:00 PM<br/>
//             <b>Saturday</b>:<br/>10:00 AM – 4:00 PM<br/>
//             <b>Sunday: Closed</b>
            
//           </p>
//           </div>
//     </div>
//     </>
//   )

// }
// export default Contact



import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneno: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", formData.name);
        console.log("Email:", formData.email);
        console.log("Phone:", formData.phoneno);
        console.log("Message:", formData.message);

        setFormData({ name: '', email: '', phoneno: '', message: '' });
    };

    return (
        <div className="container mx-auto p-6">
            {/* Contact Heading */}
            <div className="text-center mt-20">
                <h1 className="text-4xl font-sans">Contact Us – ZEEVA Fire Solutions</h1>
                <p className="text-xl text-gray-600 mt-3 font-serif">
                    Have questions about fire safety solutions? Need a consultation or a quote? 
                    Contact us, and our team will assist you promptly.
                </p>
            </div>

            {/* Contact Form & Office Info Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
                
                {/* Contact Form */}
                <div className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-center mb-4">Get a Free Consultation!</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-semibold">Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Enter Your Name" 
                                className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                value={formData.name} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold">Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter Your Email" 
                                className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                value={formData.email} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold">Phone:</label>
                            <input 
                                type="text" 
                                name="phoneno" 
                                placeholder="Phone Number" 
                                className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                value={formData.phoneno} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold">Your Message:</label>
                            <textarea 
                                name="message" 
                                placeholder="Your Message" 
                                className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                value={formData.message} 
                                onChange={handleChange} 
                                rows="4"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Office Details */}
                <div className="w-full md:w-1/3 bg-white shadow-lg p-6 rounded-lg">
                    <h3 className="text-2xl font-sans text-center mb-4">📍 Our Office</h3>
                    <p className="text-lg font-serif text-gray-700">
                        <b>ZEEVA Fire Solutions</b><br />
                        Vijayawada, Andhra Pradesh<br /><br />
                        📞 <b>Phone:</b> 9885542524<br />
                        📧 <b>Email:</b> zeevainfo@gmail.com<br /><br />
                        🕒 <b>Business Hours:</b><br />
                        <b>Monday - Friday:</b> 9:00 AM – 6:00 PM<br />
                        <b>Saturday:</b> 10:00 AM – 4:00 PM<br />
                        <b>Sunday: Closed</b>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
