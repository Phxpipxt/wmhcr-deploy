"use client";

import {useState} from "react";

export default function Schedule() {


    // Event data structured by date
    const scheduleData = {
        "April 24": [
            { time: "08:00 - 09:00", detail: "Registration" },
            { time: "09:00 - 10:30", detail: "Grand Opening: Opening Remarks by Special Guest Speaker" },
            { time: "10:30 - 10:45", detail: "Break" , break: true  },
            { time: "10:45 - 12:00", detail: "Mindful and Wise Leadership at the University of Richmond, Virginia B. Toulmin Scholarship, NYPD" },
            { time: "12:00 - 01:00", detail: "Lunch Break" , break: true },
            { time: "01:00 - 02:30", detail: "Student and Adult Led - Conferences: Various topics for delegates to attend" },
            { time: "02:30 - 03:30", detail: "Mindfulness in Golf, Mindfulness in Basketball" },
            { time: "03:30", detail: "Day Ends" }
        ],
        "April 25": [
            { time: "09:30 - 10:30", detail: "Keynote Presentation 2: Mindfulness Boosts High Performance in School" },
            { time: "10:30 - 10:45", detail: "Break" , break: true },
            { time: "10:45 - 12:00", detail: "Panel Discussion: Revolutionizing Mental Health Curriculum in Education Part II" },
            { time: "12:00 - 01:00", detail: "Lunch" , break: true },
            { time: "01:00 - 02:30", detail: "Student and Adult Led - Conferences: Pressure from High Academic Achievements, Mindfulness in Sports Psychology, Mental Well-being for Teens, Overcoming Family Pressure" },
            { time: "02:30 - 03:30", detail: "Mindfulness in Movement, Mindfulness in the Arts" },
            { time: "03:30", detail: "Day Ends" }
        ],
        "April 26": [
            { time: "09:00 - 10:00", detail: "ME 101 Mindfulness: Mindful Walking, Mindful Movement and Mindful Listening" },
            { time: "10:30 - 10:45", detail: "Break", break: true  },
            { time: "10:45 - 12:00", detail: "ME 102 Research Meditation: The Law of Nature: Law of Cause & Effect and The Law of Impermanence" },
            { time: "12:00 - 01:00", detail: "Lunch" , break: true },
            { time: "01:00 - 02:30", detail: "Discussion: Well-being in the Workplace" },
            { time: "02:30 - 03:30", detail: "Mindfulness in Movement, Mindfulness in the Arts" },
            { time: "03:30", detail: "Day Ends" }
        ],
        "April 27": [
            { time: "09:00 - 10:00", detail: "ME 101 Mindfulness: Mindful Walking, Mindful Movement and Mindful Listening" },
            { time: "10:15 - 12:30", detail: "ME 103 Research Meditation: Who Am I? What Am I? Reflection - MAA Curriculum" },
            { time: "12:45", detail: "Departure for Sightseeing Tour to The Emerald Buddha Temple (Wat Prakaew) & The Reclining Buddha Temple (Wat Pho)" },
            { time: "05:00", detail: "Tour Ends" }
        ]
    };
    const [selectedDate, setSelectedDate] = useState("April 24");

    return (
        <section className="bg-white text-black antialiased">
            <div className="max-w-screen-xl px-4 py-12 mx-auto lg:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-pink-500 ">
                        Event Schedule
                    </h2>

                    {/* Date Selection Buttons */}
                    <div className="mt-6 flex justify-center gap-4">
                        {Object.keys(scheduleData).map((date) => (
                            <button
                                key={date}
                                onClick={() => setSelectedDate(date)}
                                className={`px-4 py-2 border rounded-lg ${
                                    selectedDate === date
                                        ? "bg-pink-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                }`}
                            >
                                {date}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4">

                    </div>
                </div>

                {/* Schedule Display */}
                <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                    <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                        {scheduleData[selectedDate].map((event, index) => (
                            <div key={index} className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                <p className={`w-32 text-lg ${event.break ? 'font-bold text-green-600' : 'font-normal text-pink-500'} sm:text-right shrink-0`}>
                                    {event.time}
                                </p>
                                <h3 className={`text-lg font-semibold ${event.break ? 'text-green-600' : 'text-gray-900'}`}>
                                    <a href="#" className="hover:underline">{event.detail}</a>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

