import Countdown from "@/components/ui/countdown";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Calendar() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-pink-500">
          Event Schedule
        </h1>
        <p className="schedule-icon">
          <FontAwesomeIcon icon={faCalendarDays} /> When: April 24 - 27, 2025
        </p>
        <p className="schedule-icon">
          <FontAwesomeIcon icon={faLocationDot} /> Where: The American School of
          Bangkok Green Valley
        </p>
      </div>

      {/* <!-- Download Schedule Button --> */}
      <div className="text-center mb-43">
          <Link href="https://asb.to/pdf/schedule.pdf" target="_blank">
              <button
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition-transform transform hover:scale-105">
                  Download Schedule
              </button>
          </Link>

      </div>

        <Countdown/>

        {/* <!-- Schedule Image --> */}
        <div className="flex justify-center">
            <img
                src="./image/schedule.jpg"
                alt="schedule"
          className="w-full lg:w-1/2"
        />
      </div>
    </section>
  );
}
