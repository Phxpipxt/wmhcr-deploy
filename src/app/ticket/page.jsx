"use client";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Ticket() {
  const [currency, setCurrency] = useState("THB");

  const prices = {
    THB: { original: "฿4,200", discounted: "฿3,900" },
    USD: { original: "$120", discounted: "$112" },
  };

  return (
    <div className="font-sans">
      <div id="header"></div>
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <h1 className="ticket-head">Tickets</h1>
          <p className="font-semibold text-gray-600">
            Don’t miss out! Grab your spot now and choose the option that suits
            you best.
          </p>

          {/* Currency btn*/}
          <div className="price-sec">
            <p className="text-sm text-gray-500 mb-2">
              Select your preferred currency
            </p>
            <div className="text-center mb-2">
              <button
                onClick={() => setCurrency("THB")}
                className={`currency-btn ${
                  currency === "THB" ? "bg-pink-500 text-white" : "bg-gray-200"
                }`}
              >
                THB
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`currency-btn mx-2 ${
                  currency === "USD" ? "bg-pink-500 text-white" : "bg-gray-200"
                }`}
              >
                USD
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {/* <!-- Individual Ticket --> */}
          <div className="ticket-card border-pink-300">
            {/* <!-- Header --> */}
            <div className="text-center px-8 py-6 ">
              <h3 className="ticket-type text-pink-500">Individual</h3>
              <p className="ticket-detail">Best for solo attendees</p>
            </div>

            {/* <!-- Pricing Section --> */}
            <div className="price-sec">
              <div className="early-bird">Early Bird Price</div>
              <div className="text-center">
                <span className="line-through text-lg text-gray-400">
                  {prices[currency].original}
                </span>
                <div className="ticket-price text-gray-800">
                  {prices[currency].discounted}
                </div>
                <p className="ticket-detail">Jan 13 - Mar 15, 2025</p>
              </div>
            </div>

            {/* <!-- Features Section --> */}
            <div className="feature-div">
              <p className="feature-text">Includes:</p>
              <ul className="feature-list">
                <li>
                  <FontAwesomeIcon icon={faCheck} className="ticket-icon" />{" "}
                  Access to all sessions
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="ticket-icon" />{" "}
                  Free conference kit
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="ticket-icon" />{" "}
                  Lunch & refreshments
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="ticket-icon" />{" "}
                  Participation certificate
                </li>
              </ul>
            </div>

            {/* <!-- Book Button --> */}
            <div className="text-center px-8 py-6 ">
              {/* Fix link later */}
              <Link
                href="https://form.fillout.com/t/eTVTXt4wvius"
                target="_blank"
              >
                <button className="book-btn bg-pink-500 hover:bg-pink-600">
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          {/* <!-- Group Ticket --> */}
          <div className="ticket-card border-blue-300">
            {/* <!-- Header --> */}
            <div className="book-btn-div">
              <h3 className="ticket-type text-blue-500">Group</h3>
              <p className="ticket-detail">Best for group attendees</p>
            </div>

            {/* <!-- Pricing Section --> */}
            <div className="price-sec">
              <div className="early-bird">Early Bird Price</div>
              <div className="text-center">
                <div className="ticket-price text-green-600 ">SAVE</div>
                <p className="ticket-detail">2-5 Persons : 10% Discount</p>
                <p className="ticket-detail">
                  6 Persons or more : 20% Discount
                </p>
              </div>
            </div>

            {/* <!-- Features Section --> */}
            <div className="feature-div">
              <p className="feature-text ">Includes:</p>
              <ul className="feature-list">
                <li>
                  <FontAwesomeIcon icon={faCheck} className="ticket-icon" />{" "}
                  Access to all sessions
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="ticket-icon" />{" "}
                  Free conference kit for all
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="ticket-icon" />{" "}
                  Lunch & refreshments
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className="ticket-icon" />{" "}
                  Exclusive group benefits
                </li>
              </ul>
            </div>

            {/* <!-- Book Button --> */}
            <div className="text-center px-8 py-6 ">
              {/* Fix link later */}
              <Link
                href="https://forms.fillout.com/t/6UQ8umZMRDus"
                target="_blank"
              >
                <button className="book-btn bg-blue-500 hover:bg-blue-600">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
