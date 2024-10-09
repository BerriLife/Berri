/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import { NavBar } from "@/components/navbar";

export default function TermsAndConditions() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div
        className="m-10 p-5 text-2xl sm:text-3xl md:text-4xl"
        style={{ fontFamily: "var(--maxima-nouva-extra-bold)" }}
      >
        TERMS OF USAGE/SERVICE
      </div>

      <div
        className="m-10 p-5"
        style={{ fontFamily: "var(--maxima-nouva-normal)" }}
      >
        <div className="p-2">Terms and Conditions</div>
        <div className="p-2">
          These Terms and Conditions ("Terms") govern your use of the services
          offered by Berri Life Pvt. Ltd. ("Service," "Berri," "we," or "us") 
          through our mobile application ("App") or website ("Web")
          (collectively referred to as the "Platform"). By accessing and using
          the Platform, you agree to comply with and be bound by these Terms. If
          you do not agree with any part of these Terms, you must not use the
          Service.
        </div>
        <ol className="p-4">
          <li className="p-2">
            <strong>1. Cookies and Privacy</strong>
            <p>
              By using the Platform, you consent to our use of cookies in
              accordance with our Privacy Policy. The use of cookies helps
              enhance your experience, and you agree to the collection of
              certain personal data as described in our Privacy Policy.
            </p>
          </li>
          <li className="p-2">
            <strong>2. Acceptance of Terms</strong>
            <p>
              Your use of the Platform is also governed by any policies, rules,
              or guidelines we may notify you of from time to time, collectively
              referred to as "Related Agreements." If you do not agree to these
              Terms or are under the age of 18, you may not use the Service.
            </p>
          </li>
          <li className="p-2">
            <strong>3. License to Use the Platform</strong>
            <p>
              Berri grants you a limited, non-exclusive, non-transferable
              license to use the Platform for personal purposes only. All
              content and materials on the Platform, including but not limited
              to software, text, music, video, and graphics, are protected by
              intellectual property laws and are owned by Berri or its
              licensors.
            </p>
            <p>
              You may not reverse engineer, decompile, or modify the Platform in
              any way. Any unauthorized use of the Platform or its materials is
              strictly prohibited.
            </p>
          </li>
          <li className="p-2">
            <strong>4. User Content</strong>
            <p>
              You are responsible for any content you post or share on the
              Platform. By posting content, you grant Berri a perpetual,
              worldwide, royalty-free, sublicensable license to use, modify, and
              distribute your content as necessary to provide the Service.
            </p>
            <p>
              You agree that your content will not violate any laws or
              third-party rights and will not be offensive or harmful. Berri
              reserves the right to remove any content that violates these Terms
              and to suspend accounts engaged in such violations.
            </p>
          </li>
          <li className="p-2">
            <strong>5. Account Setup and Security</strong>
            <p>
              When creating an account, you must provide accurate and complete
              information. You are responsible for safeguarding your password
              and all actions taken under your account. Berri is not liable for
              any unauthorized use of your account. If you discover any
              unauthorized activity, you must notify us immediately at
              support@berrilife.com.
            </p>
          </li>
          <li className="p-2">
            <strong>6. Teleconsultation Services</strong>
            <p>
              Berri allows you to connect with mental health professionals, such
              as licensed therapists, for teleconsultations. While we facilitate
              these sessions, Berri is not responsible for the medical services
              provided by practitioners. You acknowledge that Berri is not
              involved in the direct provision of healthcare.
            </p>
          </li>
          <li className="p-2">
            <strong>7. Payments and Bookings</strong>
            <p>
              All bookings for therapy sessions or other services on the
              Platform must be made through the Platform, with payments
              processed via third-party providers. Berri does not store your
              payment details and will not be liable for any payment issues
              beyond our control. However, we will assist in resolving any
              concerns.
            </p>
          </li>
          <li className="p-2">
            <strong>8. Account Termination</strong>
            <p>
              You may terminate your account at any time by contacting us at
              support@berrilife.com. Berri reserves the right to terminate or
              suspend your account if you breach these Terms or engage in
              illegal or harmful activities.
            </p>
          </li>
          <li className="p-2">
            <strong>9. Acceptable Use</strong>
            <p>
              You agree not to use the Platform for any unlawful or harmful
              purposes, including but not limited to data mining, spamming, or
              distributing malware. You also agree not to impair the operation
              or availability of the Platform.
            </p>
          </li>
          <li className="p-2">
            <strong>10. Data Privacy and Security</strong>
            <p>
              Berri complies with applicable data protection laws, including the
              Indian Information Technology Act, 2000. We use appropriate
              security measures to protect your data. Please review our Privacy
              Policy to understand how your personal information is handled.
            </p>
          </li>
          <li className="p-2">
            <strong>11. Dispute Resolution</strong>
            <p>
              All disputes arising from the use of Berri's services shall be
              resolved through arbitration in Delhi, as governed by Indian law.
              The courts in Delhi shall have exclusive jurisdiction over any
              claims or disputes arising from the Service.
            </p>
          </li>
          <li className="p-2">
            <strong>12. Indemnity</strong>
            <p>
              You agree to indemnify and hold Berri and its affiliates harmless
              from any claims, damages, or legal costs arising from your use of
              the Platform or any breach of these Terms.
            </p>
          </li>
          <li className="p-2">
            <strong>13. Limitation of Liability</strong>
            <p>
              Berri will not be liable for any direct or indirect damages
              arising from your use of the Platform. Our liability is limited to
              the amount you have paid for the Service, up to a maximum of
              ₹1,000.
            </p>
          </li>
          <li className="p-2">
            <strong>14. Changes to Terms</strong>
            <p>
              We reserve the right to modify these Terms at any time. By
              continuing to use the Platform after changes are made, you accept
              the new Terms. You are encouraged to review these Terms
              periodically.
            </p>
          </li>
          <li className="p-2">
            <strong>15. Entire Agreement</strong>
            <p>
              These Terms, along with our Privacy Policy and any other
              agreements referenced herein, constitute the entire agreement
              between you and Berri regarding your use of the Platform.
            </p>
          </li>
        </ol>
        For any inquiries, please contact us at: Email: support@berrilife.com
      </div>

      <div>
        <GetStarted />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
