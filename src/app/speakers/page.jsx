"use client";
import React, { useState } from "react";

// Speaker Profile Data
const speakerProfiles = {
  1: {
    title: "AJARN HARTANTO GUNAWAN",
    content: `Ajarn Hartanto Gunawan, a former Buddhist monk and social worker, has gained international recognition for his remarkable efforts in combating human trafficking and domestic abuse, rescuing over 400 young girls. With more than 25 years of experience in social work and dharma teaching, he has imparted lessons on mental well-being to diverse audiences, including government officials, university students, and incarcerated individuals.
Ajarn Hartanto is the founder of Research Meditation, a transformative approach that aids individuals in overcoming trauma and mental illness. This method integrates key principles such as the Law of Nature, Cause and Effect, and Impermanence to enhance mental health and overall well-being.
A passionate advocate for Mental Education (ME) in schools, Ajarn Hartanto emphasizes the importance of teaching mental well-being alongside Physical Education (PE). He believes that equipping children with the skills to manage their mental states can prevent mental illnesses, fostering healthier, wiser individuals who live in the present with peace and happiness.`,
  },
  2: {
    title: "NISANART DHARMAGEISIRATTANA",
    content: `Master's Degree in Education Administration from Columbia University (2013). As the Director of The American School of Bangkok Green Valley, she has been instrumental in integrating mindfulness into education. She also founded the Mindfulness Academy of Asia to promote well-being in schools across the region.
Her mindfulness training programs have reached educators, students, doctors, and healthcare professionals worldwide. In 2018, she authored The Mindful Way, a book designed to help teachers and administrators implement mindfulness practices in schools.
The American School of Bangkok Green Valley serves as a model for mindfulness education, fostering well-being and happiness among its teachers and students. Its successful initiatives have led to collaborations with educational institutions in Thailand, Indonesia, Bangladesh, the United States, and South Korea. These practices are proven to enhance well-being, mental health, academic performance, and success in sports and the arts.
In the post-pandemic era, the school has developed a strong mindfulness culture to help its community navigate challenges such as anxiety and difficulties with focus. Using effective and proven techniques, these practices have inspired adoption by other organizations, further amplifying their positive impact.`,
  },
  3: {
    title: "DR. MONTI DATTA",
    content: `Dr. Monti Datta, raised in Los Angeles and educated at UC Berkeley and Georgetown University, gained valuable international teaching experience in South Korea and Japan before earning his PhD in Political Science at UC Davis. Since meeting Ajarn Hartanto in 2016, he has been instrumental in introducing meditation programs at the University of Richmond to help students gain deeper insights into their minds and enhance their college experience.
A passionate advocate for travel and social justice, Dr. Monti actively promotes these causes on campus, integrating them into his teaching and initiatives.
The mindfulness programs he has developed at the University of Richmond, in collaboration with Ajarn Hartanto, aim to improve the well-being of both students and the broader Richmond community. Among his contributions is a course titled Mindful and Wise Leadership for first-year students. This course introduces the principles of Research Meditation and encourages students to apply these techniques in their academic and personal lives.`,
  },
  4: {
    title: "WILLIAM VILLAFRANCO",
    content: `William Villafranco serves as a Trustee at the Virginia B. Toulmin Foundation and is a dedicated entrepreneur and philanthropist. With a strong commitment to fostering positive social change, he has contributed to numerous humanitarian projects worldwide. His passion lies in supporting sustainable community development initiatives that create lasting impacts on communities in need.`,
  },
};

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 transform transition-transform duration-300 scale-100">
        <h3 className="modal-title">{title}</h3>
        <div className="text-gray-600 mb-6 overflow-y-auto max-h-[70vh] leading-relaxed text-justify">
          {content}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default function SpeakersPage() {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    content: "",
  });

  const openModal = (speakerId) => {
    const profile = speakerProfiles[speakerId];
    if (profile) {
      setModalData({
        isOpen: true,
        title: profile.title,
        content: profile.content,
      });
    }
  };

  const closeModal = () => {
    setModalData({
      ...modalData,
      isOpen: false,
    });
  };

  const speakers = [
    {
      id: 1,
      name: "AJARN HARTANTO GUNAWAN",
      role: "Director, Foundation for Human Development",
      buttonColor: "pink",
      image: "./image/speaker1.jpg",
    },
    {
      id: 2,
      name: "NISANART DHARMAGEISIRATTANA",
      role: "Director of The American School of Bangkok",
      buttonColor: "pink",
      image: "./image/speaker2.jpg",
    },
    {
      id: 3,
      name: "DR. MONTI DATTA",
      role: "Associate Professor of Political Science",
      buttonColor: "pink",
      image: "./image/speaker3.jpg",
    },
    {
      id: 4,
      name: "WILLIAM VILLAFRANCO",
      role: "Trustee Virginia B. Toulmin Foundation, Entrepreneur and Philanthropist",
      buttonColor: "pink",
      image: "./image/speaker4.jpg",
    },
  ];

  return (


    <div className="bg-white pb-36 pt-7">
      <section className="py-6">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-center text-pink-500 mb-12">
            Speakers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="speaker-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img
                  src={speaker.image}
                  alt={`${speaker.name}`}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{speaker.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{speaker.role}</p>
                  <div className="mt-auto flex justify-center">
                    <button
                      onClick={() => openModal(speaker.id)}
                      className={`bg-${speaker.buttonColor}-500 hover:bg-${speaker.buttonColor}-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition`}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        content={modalData.content}
      />
    </div>
  );
}
