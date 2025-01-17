"use client"
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots, faEnvelope, faGlobe, faMapMarkerAlt, faPhone, faPhoneAlt, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css";


export default function ContactPage() {
    return (
            <div className="flex-1 flex items-start justify-center">
                <div className="bg-white p-2 sm:p-12 w-full max-w-2xl">
                    <FilloutStandardEmbed filloutId="cSXicaNMa5us" dynamicResize={true}/>
                </div>
            </div>

    );
}


// export default function ContactPage() {
//   return (
//     <div className="bg-gray-100 pb-36">
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//
//             {/* <!-- Contact Form --> */}
//             <div className="contact-card">
//               <h1 className="contact-header">
//                 Contact Us
//               </h1>
//               <form className="space-y-6">
//
//                 {/* <!-- First & Last Name --> */}
//                 <div className="field-div">
//                   <div className="relative">
//                     <FontAwesomeIcon icon={faUser} className="form-i" />
//                     <input type="text" placeholder="First Name" className="form-input" />
//                   </div>
//                   <div className="relative">
//                     <FontAwesomeIcon icon={faUser} className='form-i' />
//                     <input type="text" placeholder="Last Name" className="form-input" />
//                   </div>
//                 </div>
//
//                 {/* <!-- Email & Phone --> */}
//                 <div className="field-div">
//                   <div className="relative">
//                     <FontAwesomeIcon icon={faEnvelope} className="form-i" />
//                     <input type="email" placeholder="Email" className="form-input" />
//                   </div>
//                   <div className="relative">
//                     <FontAwesomeIcon icon={faPhoneAlt} className='form-i' />
//                     <input type="tel" placeholder="Phone" className="form-input" />
//                   </div>
//                 </div>
//
//                 {/* <!-- Subject --> */}
//                 <div className="relative">
//                   <i className="fas fa-tag form-i"></i>
//                   <FontAwesomeIcon icon={faTag} className='form-i' />
//                   <input type="text" placeholder="Subject" className="text-area" />
//                 </div>
//
//                 {/* <!-- Message --> */}
//                 <div className="relative">
//                   <FontAwesomeIcon icon={faCommentDots} className='absolute left-3 top-5 transform -translate-y-1/2 text-blue-500 text-lg' />
//                   <textarea placeholder="Message" rows="5" className="text-area"></textarea>
//                 </div>
//
//                 <div className="flex justify-center space-x-4">
//                   <Link href="https://www.instagram.com/asb_gv/" target="_blank" className="social-logo">
//                     <FontAwesomeIcon icon={faInstagram} />
//                   </Link>
//                   <Link href="https://www.facebook.com/americanschoolbkk" target="_blank" className="social-logo">
//                     <FontAwesomeIcon icon={faFacebook} />
//                   </Link>
//                   <Link href="https://www.youtube.com/@asbgreenvalley" target="_blank" className="social-logo">
//                     <FontAwesomeIcon icon={faYoutube} />
//                   </Link>
//                   <Link href="https://asbgv.ac.th" target="_blank" className="social-logo">
//                     <FontAwesomeIcon icon={faGlobe} />
//                   </Link>
//                 </div>
//
//                 {/* <!-- Submit Button --> */}
//                 <button type="submit" className="form-btn">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//
//             {/* <!-- Google Maps --> */}
//             <div className="contact-card">
//               <h2 className="contact-header">
//                 Find Us
//               </h2>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4882.499331750054!2d100.7220609!3d13.6136376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5c3dbd1f5cd5%3A0x3a37590a67e9bff7!2sThe%20American%20School%20Of%20Bangkok%20Green%20Valley!5e1!3m2!1sen!2sth!4v1733979915132!5m2!1sen!2sth"
//                 className="w-full h-80 rounded-lg border-2 border-gray-300" allowFullScreen="" loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"></iframe>
//               <div className="mt-6">
//                 <div className="flex items-center space-x-4 mb-4">
//                   <FontAwesomeIcon icon={faMapMarkerAlt} className='text-blue-700 text-2xl' />
//                   <h3 className="text-xl font-semibold text-gray-700">Our Address</h3>
//                   <FontAwesomeIcon icon={faPhone} className='text-blue-700 text-2xl' />
//                   <h3 className="text-xl font-semibold text-gray-700">02 430 8888</h3>
//                 </div>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   The American School Of Bangkok Green Valley<br />
//                   Moo 3 Bangna-Trad Road Km.15<br />
//                   Bangplee, Samutprakarn 10540, Thailand
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }