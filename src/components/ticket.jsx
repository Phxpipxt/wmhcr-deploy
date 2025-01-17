"use client";
import { useState } from "react";

export default function Tickets() {
    const pricing = {
        THB: {
            1: { earlyBird: "฿3,900", regular: "฿4,200" },
            2: { earlyBird: "฿7,000", regular: "฿7,700" },
            3: { earlyBird: "฿10,200", regular: "฿11,000" },
            4: { earlyBird: "฿12,700", regular: "฿13,900" },
        },
        USD: {
            1: { earlyBird: "$112", regular: "$120" },
            2: { earlyBird: "$200", regular: "$220" },
            3: { earlyBird: "$290", regular: "$315" },
            4: { earlyBird: "$365", regular: "$400" },
        },
    };

    const [currency, setCurrency] = useState("THB");
    const [days, setDays] = useState(1);

    const price = pricing[currency][days];

    return (
        <div className="text-center my-6">
            <h1 className="text-4xl font-bold text-pink-500">Tickets</h1>
            <p className="text-gray-500 mt-2">Choose the best option for you.</p>

            {/* Currency Toggle */}
            <div className="mt-4 flex justify-center space-x-2">
                <button
                    onClick={() => setCurrency("THB")}
                    className={`px-4 py-2 rounded-lg ${
                        currency === "THB"
                            ? "bg-pink-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    THB
                </button>
                <button
                    onClick={() => setCurrency("USD")}
                    className={`px-4 py-2 rounded-lg ${
                        currency === "USD"
                            ? "bg-pink-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    USD
                </button>
            </div>

            {/* Day Selection */}
            <div className="mt-4 flex justify-center space-x-2">
                {[1, 2, 3, 4].map((day) => (
                    <button
                        key={day}
                        onClick={() => setDays(day)}
                        className={`px-4 py-2 rounded-lg ${
                            days === day
                                ? "bg-pink-500 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                    >
                        {day} {day === 1 ? "Day" : "Days"}
                    </button>
                ))}
            </div>

            {/* Responsive Flexbox Container */}
            <div className="mt-6 flex flex-col items-center gap-y-4 lg:flex-row lg:justify-center lg:gap-x-6 lg:gap-y-4">
                {/* Individual Booking Card */}
                <div
                    className="relative border-4 border-pink-300 rounded-lg p-6 shadow-lg bg-white flex flex-col justify-between w-full max-w-lg lg:min-h-[500px]">
                    <div className="flex flex-col items-center text-center space-y-4 flex-1">
                        {/* Early Bird Badge */}
                        <div
                            className="early-bird ">
                            Early Bird Price
                        </div>

                        <h3 className="text-pink-500 font-bold text-2xl">Individual</h3>

                        <p className="text-gray-500">Perfect for a deeper experience tailored just for you!</p>
                        <div className="text-4xl font-bold text-gray-900">{price.earlyBird}</div>
                        <div className="text-sm text-gray-500">
                            <span>Regular: </span>
                            <del>{price.regular}</del>
                        </div>
                        <p className="font-semibold text-pink-500">Early bird Date: Now - Mar 15, 2025</p>

                        {/* Feature List */}
                        <ul className="space-y-2 text-gray-700">
                            <li><span className="text-green-500 font-bold">✔</span> Access to all sessions</li>
                            <li><span className="text-green-500 font-bold">✔</span> Free conference kit</li>
                            <li><span className="text-green-500 font-bold">✔</span> Lunch & refreshments</li>
                            <li><span className="text-green-500 font-bold">✔</span> Event participation certificate</li>
                        </ul>
                    </div>

                    {/* Button */}
                    <a
                        href={`https://asbgv.fillout.com/wmhcr?cur_code=${currency}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 text-center block"
                    >
                        Book Now
                    </a>


                </div>

                {/* Group Booking Card */}
                <div
                    className="relative border-4 border-green-400 rounded-lg p-6 shadow-lg bg-white flex flex-col justify-between w-full max-w-lg lg:min-h-[500px]">
                    <div className="flex flex-col items-center text-center space-y-6 flex-1">
                        <h3 className="text-green-500 font-bold text-2xl">Group</h3>
                        <p className="text-gray-500">Best for group attendees</p>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">Contact Us</div>
                            <div className="text-4xl font-bold text-gray-900">for Pricing</div>
                        </div>
                        
                        <p className="font-semibold text-green-500">Early bird Date: Now - Mar 15, 2025</p>

                        {/* Feature List */}
                        <ul className="space-y-2 text-gray-700">
                            <li><span className="text-green-500 font-bold">✔</span> Access to all sessions</li>
                            <li><span className="text-green-500 font-bold">✔</span> Free conference kit</li>
                            <li><span className="text-green-500 font-bold">✔</span> Lunch & refreshments</li>
                            <li><span className="text-green-500 font-bold">✔</span> Event participation certificate</li>
                        </ul>
                    </div>

                    {/* Button */}

                    <a
                        href={`https://asbgv.fillout.com/custom`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                        Request a Quote
                    </a>
                </div>
            </div>
        </div>
    );
}