import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import { NavBar } from "@/components/navbar";

export default function PrivacyPolicy() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div
        className="m-10 p-5 text-2xl sm:text-3xl md:text-4xl"
        style={{ fontFamily: "var(--maxima-nouva-extra-bold)" }}
      >
        PRIVACY POLICY
      </div>

      <div
        className="m-10 p-5"
        style={{ fontFamily: "var(--maxima-nouva-normal)" }}
      >
        <div className="p-2">Privacy Policy - Berri Life</div>
        <div className="p-2">Scope</div>
        <div className="p-2">
          This Privacy Policy applies to services provided by Berri Life via its
          website (https://www.berri.life) and mobile app. It explains how we
          collect, use, and protect personal information, including any
          Identifiable Personal Information (IPI) such as your name, email, or
          other identifying data.
        </div>
        <div className="p-2">Information We Collect</div>
        <ul className="p-4">
          <li>• Name</li>
          <li>• Email address (required for account creation and verification)</li>
          <li>• Phone number (required for OTP verification)</li>
          <li>• Profile picture (optional)</li>
          <li>• Details about mental health services or advice you seek</li>
          <li>• Feedback on services, interest in mental health resources</li>
          <li>• Any information shared during sessions, stored confidentially</li>
          <li>
          • Additionally, we collect non-personally identifiable information (browser type, device identifier, IP address) through cookies to enhance your experience.
          </li>
        </ul>
        <div className="p-2">Use of Information</div>
        <ul className="p-4">
          <li>• Provide and personalize mental health services</li>
          <li>• Manage account and customer service</li>
          <li>• Communicate important updates and offers</li>
          <li>• Ensure compliance with legal obligations</li>
        </ul>
        <div className="p-2">
          Berri is exclusively for corporate users aged 18 and over. We do not knowingly collect data from those under 18.
        </div>
        <div className="p-2">Data Security</div>
        <div className="p-2">
          Berri ensures your data is fully encrypted and stored securely. All
          conversations and information are private and inaccessible to
          unauthorized parties. Despite using industry-standard security
          measures, absolute protection against breaches cannot be guaranteed.
        </div>
        <div className="p-2">Sharing Your Information</div>
        <ul className="p-4">
          <li>• With service providers who assist in delivering services</li>
          <li>• To comply with legal obligations, law enforcement, or protect user safety</li>
          <li>• During business mergers or transfers (while maintaining the same privacy standards)</li>
        </ul>
        <div className="p-2">Data Retention</div>
        <div className="p-2">
          Your information is stored for as long as needed to provide services
          or comply with legal requirements. Upon request for account deletion,
          all data will be removed except where legally required.
        </div>
        <div className="p-2">Cookies</div>
        <div className="p-2">
          We use cookies to improve your experience and website functionality.
          You can adjust your browser settings to control cookies, though this
          may limit certain features.
        </div>
        <div className="p-2">Your Choices</div>
        <div className="p-2">
          You have the right to control your information. You can unsubscribe
          from communications, delete your account, or withdraw consent by
          contacting our support team.
        </div>
        <div className="p-2">Changes to This Policy</div>
        <div className="p-2">
          Berri reserves the right to update this policy. Major changes will be
          communicated through our website or app.
        </div>
        <div className="p-2">Contact Us</div>
        <div className="p-2">
          For questions regarding this policy or your data, please reach out to:
        </div>
        <div className="p-2">
            <ul>
              <li>• Berri</li>
              <li>• Berri Life Private Limited</li>
              <li>• Email: support@berri.life</li>
            </ul>
        </div>
      </div>

      <div className="mt-24">
        <GetStarted />
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
