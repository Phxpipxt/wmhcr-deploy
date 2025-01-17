"use client";
import Countdown from "@/components/ui/countdown";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import Tickets from "@/components/ticket";

export default function Home() {
  const [currency, setCurrency] = useState("THB");

  const prices = {
    THB: { original: "฿4,200", discounted: "฿3,900" },
    USD: { original: "$120", discounted: "$112" },
  };
  return (
    <div className="body">
      {/* <!-- Main Section --> */}
      <main className="container-div">
        <div className="main-div">
          {/* <!-- Video Section --> */}
          <div className="w-full lg:w-2/3">
            <div className="video-div">
              <div className="relative w-full h-0 pb-[56.25%] rounded-xs overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/S7Zj6n8tw_I?si=bb200ktmlhnXgIc6&autoplay=1&mute=1&loop=1"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* <!-- Countdown Section --> */}

            <Countdown />
          </div>
          <div className="container w-full lg:w-1/2 bg-green-600 p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-yellow-300">
              World Mental Health <br />
              Conference & Retreat
            </h1>
            <p className="mt-1 text-white font-semibold text-sm">
              Better Mental Health, Better Well-being, Better World
            </p>
            <p className="mt-4 text-white text-justify">
              Aims to educate parents, children, educators, professionals, and individuals from all walks of life on the application of mindfulness and research meditation techniques into schools, homes, and workplaces to help manage the stress of daily life, which often leads to anxiety, depression, andger, sadness, and other forms of mental suffering.
              To guide companies, government agencies, and businesses in adopting mindfulness and research meditation practices. By doing so, leaders can cultivate wisdom and mindfulness while training employees to perform efficiently and effectively under stress, thereby reducing the risk of mental health challenges that can significantly impact organizational productivity and financial health.
              To empower social workers, doctors, nurses, and other healthcare professionals with mindfulness techniques for their personal well-being and to better support their patients. This approach emphasizes preventing mental illness in children, students, and patients, recognizing that untreated physical suffering often exacerbates mental distress, creating a cycle of both physical and mental suffering.
            </p>
            <Link
              href="https://asb.to/world-mental-health-proposal"
              target="_blank"
            >
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 mt-6 transition-transform transform hover:scale-105">
                Download Brochure
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* <!-- Event Schedule Section --> */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-500">
            Event Schedule & Speakers
          </h1>
          <p className="text-pink-500">
            <FontAwesomeIcon icon={faCalendarDays} /> When: April 24 - 27, 2025
          </p>
          <p className="text-pink-500">
            <FontAwesomeIcon icon={faLocationDot} /> Where: The American School
            of Bangkok Green Valley
          </p>
        </div>

        {/* <!-- Download Schedule Button --> */}
        <div className="text-left mb-8">
          <Link href="https://asb.to/pdf/schedule.pdf" target="_blank">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition-transform transform hover:scale-105">
              Download Schedule
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
          {/* <!-- Schedule Image --> */}
          <img
            src="/image/schedule.jpg"
            alt="schedule"
            className="w-full lg:w-1/2 mb-6 lg:mb-0"
          />

          {/* <!-- Speaker Section --> */}
          <div className="flex flex-col lg:w-1/2 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {/* <!-- Speaker 1 --> */}
              <div className="flex flex-col items-center">
                <img
                  className="speaker border-4 border-yellow-400"
                  src="./image/speaker1.jpg"
                  alt="speaker1"
                />
                <h3 className="mt-4 text-center text-lg font-bold text-yellow-500">
                  Ajarn Hartanto Gunawan
                </h3>
              </div>

              {/* <!-- Speaker 2 --> */}
              <div className="flex flex-col items-center">
                <img
                  className="speaker border-4 border-pink-500"
                  src="./image/speaker2.jpg"
                  alt="speaker2"
                />
                <h3 className="mt-4 text-center text-lg font-bold text-pink-500">
                  Nisanart Dharmageisirattana
                </h3>
              </div>

              {/* <!-- Speaker 3 --> */}
              <div className="flex flex-col items-center">
                <img
                  className="speaker border-4 border-purple-500"
                  src="./image/speaker3.jpg"
                  alt="speaker3"
                />
                <h3 className="mt-4 text-center text-lg font-bold text-purple-500">
                  Associate Professor Monti Datta
                </h3>
              </div>

              {/* <!-- Speaker 4 --> */}
              <div className="flex flex-col items-center">
                <img
                  className="speaker border-4 border-blue-400"
                  src="./image/speaker4.jpg"
                  alt="speaker4"
                />
                <h3 className="mt-4 text-center text-lg font-bold text-blue-400">
                  William Villafranco
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        {/* <!-- Powered By Section --> */}
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-green-600 mb-4 text-center">
            Organized by
          </h1>
          <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto font-semibold">
            This mindfulness journey is made possible by the support of these
            remarkable organizations. Their commitment helps us create a space
            for reflection, awareness, and collective growth
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="./image/ASB.png"
              alt="Powered Logo 1"
              className="w-32 h-32 object-contain"
            />
            <img
              src="./image/MINDFULL.png"
              alt="Powered Logo 2"
              className="w-32 h-32 object-contain"
            />
            <img
              src="./image/FFHD.png"
              alt="Powered Logo 3"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        {/* <!-- Organized By Section --> */}
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-4 text-center">
          Powered by
        </h1>
        <p className="text-gray-600 text-center mb-6 max-w-xl mx-auto font-semibold">
          We are honored to have the support of these incredible organizations.
          Their collaboration ensures a successful and impactful event.
        </p>

        {/* <!-- Partner Sections --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* <!-- Education Partners --> */}
          <div className="partner-div">
            <h2 className="text-2xl font-semibold text-yellow-500 mb-4 text-center uppercase">
              Education Partners
            </h2>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              <img
                src="./image/SU.png"
                alt="Education Logo 1"
                className="w-24 h-20 object-contain"
              />
              <img
                src="./image/Northwestern.png"
                alt="Education Logo 7"
                className="w-32 h-20 object-contain"
              />
              <img
                src="./image/UR.jpg"
                alt="Education Logo 3"
                className="w-24 h-20 object-contain"
              />
              <img
                src="./image/OSU.jpg"
                alt="Education Logo 2"
                className="w-24 h-16 object-contain"
              />
              <img
                src="./image/GU.png"
                alt="Education Logo 6"
                className="w-36 h-20 object-contain"
              />
            </div>
          </div>

          {/* <!-- Organization Partners --> */}
          <div className="partner-div">
            <h2 className="text-2xl font-semibold text-yellow-500 mb-4 text-center uppercase">
              Organization Partners
            </h2>
            <div className="grid grid-cols-4 gap-4 justify-items-center">
              <img
                src="./image/WHO.png"
                alt="Organization Logo 1"
                className="partner-logo"
              />
              <img
                src="./image/MET.png"
                alt="Organization Logo 2"
                className="w-24 h-16 object-contain"
              />
              <img
                src="./image/MPH.png"
                alt="Organization Logo 3"
                className="partner-logo"
              />
              <img
                src="./image/MSD.png"
                alt="Organization Logo 4"
                className="w-24 h-16 object-contain"
              />
              <img
                src="./image/NHK.jpg"
                alt="Organization Logo 5"
                className="partner-logo"
              />
              <img
                src="./image/Japan.png"
                alt="Organization Logo 6"
                className="partner-logo"
              />
              <img
                src="./image/RTG_0.png"
                alt="Organization Logo 7"
                className="partner-logo"
              />
              <img
                src="./image/NYPD.png"
                alt="Organization Logo 8"
                className="partner-logo"
              />
              <img
                src="./image/USA_0.png"
                alt="Organization Logo 9"
                className="partner-logo"
              />
              <img
                src="./image/princ.png"
                alt="Organization Logo 10"
                className="partner-logo"
              />
              <img
                src="./image/VBTF.png"
                alt="Organization Logo 11"
                className="w-36 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/*<section className="container mx-auto px-4 py-8">*/}
      {/*  <div className="text-center mb-8">*/}
      {/*    <h1 className="ticket-head">Tickets</h1>*/}
      {/*    <p className="text-gray-600 font-semibold">*/}
      {/*      Secure your spot now! Choose the option that works best for you.*/}
      {/*    </p>*/}
      {/*    /!* Currency btn*!/*/}
      {/*    <div className="price-sec">*/}
      {/*    <p className="text-sm text-gray-500 mb-2">*/}
      {/*        Select your preferred currency*/}
      {/*      </p>*/}
      {/*      <div className="text-center mb-2">*/}
      {/*        <button*/}
      {/*          onClick={() => setCurrency("THB")}*/}
      {/*          className={`currency-btn ${*/}
      {/*            currency === "THB" ? "bg-pink-500 text-white" : "bg-gray-200"*/}
      {/*          }`}*/}
      {/*        >*/}
      {/*          THB*/}
      {/*        </button>*/}
      {/*        <button*/}
      {/*          onClick={() => setCurrency("USD")}*/}
      {/*          className={`currency-btn mx-2 ${*/}
      {/*            currency === "USD" ? "bg-pink-500 text-white" : "bg-gray-200"*/}
      {/*          }`}*/}
      {/*        >*/}
      {/*          USD*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="flex flex-wrap justify-center gap-8">*/}
      {/*    /!* Individual Ticket *!/*/}
      {/*    <div className="ticket-main-div border-pink-300">*/}
      {/*      <div className="px-6 py-4 text-center">*/}
      {/*        <h3 className="text-xl font-bold text-pink-500">Individual</h3>*/}
      {/*        <p className="ticket-detail">Best for solo attendees</p>*/}
      {/*      </div>*/}
      {/*      <div className="relative px-6 py-4">*/}
      {/*        <div className="early-bird">Early Bird Price</div>*/}
      {/*        <div className="text-center">*/}
      {/*          <span className="text-gray-400 line-through text-sm">*/}
      {/*            {prices[currency].original}*/}
      {/*          </span>*/}
      {/*          <div className="text-gray-800 text-5xl font-extrabold">*/}
      {/*            {prices[currency].discounted}*/}
      {/*          </div>*/}
      {/*          <p className="ticket-detail">Jan 13 - Mar 15, 2025</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="ticket-btn-div">*/}
      {/*        /!* Book Now button *!/*/}
      {/*        <Link*/}
      {/*          href="https://form.fillout.com/t/eTVTXt4wvius"*/}
      {/*          target="_blank"*/}
      {/*        >*/}
      {/*          <button className="book-btn-main bg-pink-500 hover:bg-pink-600">*/}
      {/*            Book Now*/}
      {/*          </button>*/}
      {/*        </Link>*/}

      {/*        /!* More Info button *!/*/}
      {/*        <Link href="/ticket">*/}
      {/*          <button className="more-btn-main border-2 border-pink-500 text-pink-500">*/}
      {/*            More Info*/}
      {/*          </button>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    /!* Group Ticket *!/*/}
      {/*    <div className="ticket-main-div border-blue-300">*/}
      {/*      <div className="px-6 py-4 text-center">*/}
      {/*        <h3 className="text-xl font-bold text-blue-500">Group</h3>*/}
      {/*        <p className="ticket-detail">Best for group attendees</p>*/}
      {/*      </div>*/}
      {/*      <div className="relative px-6 py-4">*/}
      {/*        <div className="early-bird">Early Bird Price</div>*/}
      {/*        <div className="text-center">*/}
      {/*          <div className="text-green-600 text-5xl font-extrabold">*/}
      {/*            SAVE*/}
      {/*          </div>*/}
      {/*          <p className="ticket-detail">2-5 Persons : 10% Discount</p>*/}
      {/*          <p className="ticket-detail">*/}
      {/*            6 Persons or more : 20% Discount*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="ticket-btn-div">*/}
      {/*        /!* Book Now button *!/*/}
      {/*        <Link href="/" target="_blank">*/}
      {/*          <button className="book-btn-main bg-blue-500 hover:bg-blue-600">*/}
      {/*            Book Now*/}
      {/*          </button>*/}
      {/*        </Link>*/}

      {/*        /!* More Info button *!/*/}
      {/*        <Link href="/ticket">*/}
      {/*          <button className="more-btn-main text-blue-500 border-2 border-blue-500">*/}
      {/*            More Info*/}
      {/*          </button>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*Price Section*/}
    <Tickets/>


      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* <!-- Google Maps --> */}
          <div className="contact-card">
            <h2 className="contact-header">Find Us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4882.499331750054!2d100.7220609!3d13.6136376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5c3dbd1f5cd5%3A0x3a37590a67e9bff7!2sThe%20American%20School%20Of%20Bangkok%20Green%20Valley!5e1!3m2!1sen!2sth!4v1733979915132!5m2!1sen!2sth"
              className="w-full h-80 rounded-lg border-2 border-gray-300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="mt-6">
              <div className="flex items-center space-x-4 mb-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-blue-700 text-2xl"
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  Our Address
                </h3>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-blue-700 text-2xl"
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  02 430 8888
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                The American School Of Bangkok Green Valley
                <br />
                Moo 3 Bangna-Trad Road Km.15
                <br />
                Bangplee, Samutprakarn 10540, Thailand
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
