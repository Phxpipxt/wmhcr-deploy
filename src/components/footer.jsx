"use client";

import React, { useState } from "react";
import Modal from "./modal";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    content: null,
  });

  const openModal = (title, content) => {
    setModalData({
      isOpen: true,
      title,
      content,
    });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: "", content: null });
  };

  return (
    <footer className="footer">
      <div className="footer-div">
        <p className="text-center md:text-left">
          © 2025 World Mental Health Conference. All rights reserved.
        </p>
        {/* <!-- Social Links --> */}
        <div className="footer-info">
          <Link
            href="https://www.instagram.com/asb_gv/"
            target="_blank"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            href="https://www.facebook.com/americanschoolbkk"
            target="_blank"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            href="https://www.youtube.com/@asbgreenvalley"
            target="_blank"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
        <div className="footer-info">
          <Link href="/contact" className="footer-info">
            Contact
          </Link>
          <button
            onClick={() =>
              openModal(
                "Privacy Policy",
                <>
                  <h1 className="policy-head">
                    Effective Date: January 13, 2025
                  </h1>
                  <p>
                    At World Mental Health Conference, we value your privacy and
                    are committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, and safeguard
                    your data when you interact with our website, services, or
                    events.
                  </p>
                  <h1 className="policy-head">1. Information We Collect</h1>
                  <p>We may collect the following types of information:</p>
                  <p>
                    1. Personal Information: Your name, email address, phone
                    number, or other details you provide when registering or
                    contacting us.
                  </p>
                  <p>
                    2. Usage Data: Information about how you interact with our
                    website, such as pages viewed, time spent, and click
                    activity, collected via cookies and analytics tools.
                  </p>
                  <p>
                    3. Event Data: Information you provide when registering for
                    events, such as dietary preferences or accessibility
                    requirements.
                  </p>
                  <h1 className="policy-head">
                    2. How We Use Your Information
                  </h1>
                  <p>
                    We use your information to provide, maintain, and improve
                    our services, communicate with you, and personalize your
                    experience. We may also use your data for legal or
                    contractual obligations, or with your consent.
                  </p>
                  <h1 className="policy-head">3. Sharing Your Information</h1>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. However, we may share your information with
                  </p>
                  <ul>
                    <li>
                      Service Providers: Trusted partners who assist in hosting
                      events, managing emails, or analyzing website usage.
                    </li>
                    <li>
                      Legal Authorities: If required by law or to protect the
                      safety of our users.
                    </li>
                  </ul>
                  <h1 className="policy-head">4. Your Rights</h1>
                  <p>You have the right to:</p>
                  <ul>
                    <li>
                      Access, update, or delete your personal information.
                    </li>
                    <li>
                      Opt-out of receiving marketing emails by clicking
                      “unsubscribe” in the email footer.
                    </li>
                    <li>Disable cookies through your browser settings.</li>
                  </ul>
                  <h1 className="policy-head">5. Security</h1>
                  <p>
                    We implement industry-standard security measures to protect
                    your personal information. However, no method of
                    transmission over the internet is 100% secure, and we cannot
                    guarantee absolute security.
                  </p>
                  <h1 className="policy-head">6. Third-Party Links</h1>
                  <p>
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    these sites. Please review their policies before providing
                    personal information.
                  </p>
                  <h1 className="policy-head">7. Updates to This Policy</h1>
                  <p>
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted on this page with the updated
                    effective date.
                  </p>
                  <h1 className="policy-head">8. Contact Us</h1>
                  <p>
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at
                  </p>
                  <ul>
                    <li>Email : support@asb.ac.th</li>
                    <li>Tel : 02 430 8888</li>
                  </ul>
                </>
              )
            }
            className="footer-link"
          >
            Privacy Policy
          </button>
          <button
            onClick={() =>
              openModal(
                "Development Team",
                <>
                  <p className="modal-dev-head">Project Leader</p>
                  <p className="modal-dev-name">Thanakorn Sangsuk</p>
                  <p className="modal-dev-head">Designer</p>
                  <p className="modal-dev-name">Phupipat Jimjuan</p>
                  <p className="modal-dev-head">Developer</p>
                  <p className="modal-dev-name">Phupipat Jimjuan</p>
                  <p className="modal-dev-head">Co-Developer</p>
                  <p className="modal-dev-name">Taspong Prasertsilp</p>
                </>
              )
            }
            className="footer-link"
          >
            Development
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        content={modalData.content}
      />
    </footer>
  );
}
