import BackgroundPattern from "../components/BackgroundPattern";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-[#f4f7ff]">
        <BackgroundPattern variant="grid" opacity={0.18} className="text-primary/20" />
        <div className="page-container relative py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Privacy</p>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              PAYBAYGO – PRIVACY POLICY
            </h1>
          </div>
        </div>
      </section>

      <section className="page-container py-10 md:py-14">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="space-y-10 text-base leading-8 text-slate-700 sm:text-lg">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">1. Introduction</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>This Privacy Policy describes how PayBayGO, operated by RIM Solutions Private Limited, collects, stores, uses, discloses and protects personal information when Users access or interact with the PayBayGO digital platform. The platform includes the PayBayGO mobile application, website, backend systems and all ancillary technological services provided by or on behalf of RIM Solutions Private Limited.</li>
                <li>PayBayGO operates as a digital intermediary that enables Users to locate, reserve and pay for parking spaces offered by independent third party Operators. PayBayGO does not own or control the parking facilities listed on the platform, and it does not undertake physical parking related operations. This Privacy Policy therefore applies strictly to information collected and processed through the PayBayGO technological interface, and not to any offline data processing activities conducted by Operators or third parties outside the platform.</li>
                <li>By accessing or using PayBayGO, creating an account, submitting personal or vehicle information, initiating a booking, loading the PayBayGO wallet, or engaging with any component of the service, the User acknowledges and consents to the collection and processing of personal data as outlined in this Privacy Policy. If the User does not agree with the terms of this Privacy Policy, the User must not access or use the platform.</li>
                <li>This Privacy Policy is to be read in conjunction with the PayBayGO Terms and Conditions, Payment Terms, Cancellation Policy and any supplemental contractual documents that PayBayGO may publish. In the event of inconsistency, the terms that afford PayBayGO the highest level of legal protection shall prevail, to the maximum extent permitted by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">2. Scope of This Privacy Policy</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>This Privacy Policy applies to all Users of PayBayGO, including customers searching or reserving parking spaces, Operators listing or managing parking spaces through PayBayGO and any third parties engaging with the platform in a permitted capacity.</li>
                <li>This Privacy Policy governs the handling of all categories of personal information collected by PayBayGO. This includes identifiers, contact information, financial information, vehicle related information, parking activity data, device information, location information, behavioral data, user communications and any other personal information provided voluntarily by the User or generated automatically through the User’s interaction with the platform.</li>
                <li>This Privacy Policy does not govern, control or regulate the data handling practices of independent Operators. Operators may independently collect or process information at their parking locations, for example CCTV footage or visitor logs. Such data handling is outside PayBayGO’s control, and the User must contact the Operator directly for any privacy related requests concerning Operator collected data.</li>
                <li>This Privacy Policy applies irrespective of whether the User accesses the platform via the mobile app, mobile browser, desktop browser or All access routes fall within the scope of this Policy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">3. Definitions</h2>
              <p className="mt-5">For the purposes of this Privacy Policy:</p>
              <ul className="mt-4 list-disc space-y-4 pl-6 sm:pl-8">
                <li>“Company” refers to RIM Solutions Private Limited, operating the PayBayGO</li>
                <li>“User” refers to any person who creates an account, accesses the platform, reserves a parking space, loads the PayBayGO wallet, uses the parking pass system or engages in any transaction facilitated by PayBayGO.</li>
                <li>“Operator” refers to any third-party entity that owns or controls a parking facility and makes it available through the PayBayGo platform.</li>
                <li>“Personal Information” refers to any information that can identify, relate to, describe or be associated with an identifiable individual. This includes names, email addresses, phone numbers, payment information, wallet activity, parking history, license plate data, device identifiers, IP addresses, geolocation and any other information defined as personal information under Indian law.</li>
                <li>“Processing” refers to any operation performed on Personal Information, including collection, storage, use, transmission, retention, deletion and disclosure.</li>
                <li>“Retention Period” refers to the length of time PayBayGO stores Personal Information, determined by operational needs, legal requirements and compliance considerations.</li>
                <li>“Consent” means an action by the User that signifies a clear and voluntary agreement for PayBayGO to collect and process Personal Information. Consent includes clicking acceptance boxes, continuing platform use after being presented with this Policy or providing information voluntarily.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">4. Categories of Personal Information Collected</h2>
              <p className="mt-5">PayBayGO collects the following categories of Personal Information, each of which is processed in accordance with the purposes and legal bases described throughout the Policy:</p>
              <ul className="mt-4 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Account Information: This includes the User’s name, email address, mobile number, password credentials and any other details required to create and maintain a PayBayGO account.</li>
                <li>Vehicle and Parking Information: This includes license plate numbers, vehicle descriptions, parking booking data, parking session timing, entry and exit timestamps, ANPR data, Operator confirmation data and any other information needed to administer parking reservations.</li>
                <li>Financial and Transaction Information: This includes PayBayGO wallet loads, debits, transaction history, payment confirmations, subscription details and refund records. PayBayGO does not store card or UPI credentials. These are processed exclusively through Razorpay.</li>
                <li>Location Information: PayBayGO may collect approximate or precise location information to facilitate the discovery of nearby parking facilities. The User may disable location access within device settings, although certain features may not function without it.</li>
                <li>Device and Network Information: This includes IP address, device identifiers, mobile device model, operating system, crash logs, diagnostic data and interaction logs. This information enables security monitoring and improves platform performance.</li>
                <li>Communications and Interaction Data: This includes all communications transmitted through the PayBayGO platform, including support requests, chat interactions, in app notifications and WhatsApp reminders relating to subscription renewals.</li>
                <li>Behavioral and Analytics Data: This includes data generated through User interaction with the platform, including session durations, click patterns, navigation paths and service usage behavior.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">5. Data Governance Framework</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>PayBayGO maintains a structured data governance model that regulates how Personal Information is collected, stored, retained and All Personal Information is stored within secure infrastructure environments that include encryption in transit and encryption at rest.</li>
                <li>PayBayGO operates under a consent-based processing model. The User’s continued access to the platform and the voluntary submission of information constitute valid consent under Indian law.</li>
                <li>PayBayGO follows a strict retention Information is retained only for as long as required to fulfil platform functions, enforce contractual rights, maintain security, satisfy regulatory requirements and defend against legal claims. Once retention objectives are met, information is securely deleted.</li>
                <li>PayBayGO does not sell or commercially exploit User PayBayGO uses Personal Information solely to deliver, maintain, secure and enhance the platform, and to comply with legal obligations.</li>
                <li>Access to Personal Information is restricted Employees, contractors or agents may access information only to the minimum extent required to perform their roles.</li>
                <li>PayBayGO implements continuous monitoring to detect unauthorized access attempts, anomalies in system behavior, or potential breaches of Any breach will be handled in accordance with applicable Indian law and internal incident management protocols.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">6. Information We Collect</h2>
              <p className="mt-5">PayBayGO collects information that is reasonably necessary for the operation, security and lawful administration of its digital parking services. Information is collected directly from Users, automatically through technology, or indirectly through Operators, partners or service providers. All collection occurs subject to User consent wherever required by Indian law.</p>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Categories of Personal Information Collected: PayBayGO collects the categories of information listed below. These categories are illustrative, and the precise data collected may vary depending on the User’s use of features, Wallet functions or parking integrations.</li>
                <li>Identity and Account Information:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Name, phone number, email address, password and User identifiers created during</li>
                <li>Verification records, authentication logs and metadata associated with login</li>
                <li>Vehicle ownership documents or declarations submitted for verification where</li>
                <li>Operator or Vendor information for onboarding and platform</li>
              </ol>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Contact and Communication Information:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Mobile numbers, email IDs and communications sent to PayBayGO through support</li>
                <li>WhatsApp identifiers for service alerts, pass renewals and cancellation</li>
                <li>Device information used to receive operational messages, receipts</li>
              </ol>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Vehicle and Parking Information:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Vehicle registration numbers, model details and vehicle-type</li>
                <li>Parking history such as entry and exit times, duration of stay, booked slots and Pass</li>
                <li>ANPR capture data or sensor-derived information confirming a vehicle’s</li>
                <li>Operator-specific confirmations that validate a parking session or</li>
              </ol>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Location and Device Information:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Device IP address, time zone, browser type, mobile operating system and device</li>
                <li>Approximate geolocation data when required to identify nearby lots, prevent fraud or enhance platform performance.</li>
                <li>Access timestamps and activity logs used for preventing misuse or unauthorized</li>
              </ol>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Financial and Transaction Information:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Wallet balance, load history, deduction records and payment</li>
                <li>Parking Session charges, Pass purchase history and cancellation or refund</li>
                <li>Razorpay transaction confirmations, failure codes, risk flags and settlement</li>
                <li>No card numbers or sensitive payment credentials are stored on PayBayGO</li>
              </ol>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Operator and Vendor Information:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Business identifiers, representative details and contractual</li>
                <li>Bank account details provided for settlement, subject to PayBayGO’s closed-loop</li>
                <li>Incident reports, parking availability inputs and operational interactions recorded for platform governance.</li>
              </ol>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Automatically Collected Technical Data:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Diagnostic logs used to detect security breaches, fraud, system failures or unauthorized</li>
                <li>Cookies, analytics tags and operational telemetry that support platform</li>
                <li>Error reports and latency measurements submitted automatically by User</li>
              </ol>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Sensitive Information: PayBayGO does not require or request government identification numbers unless necessary for KYC compliance with Razorpay or legal investigations. Sensitive information is processed only where mandated by law, strictly limited to the intended purpose and retained under enhanced protection.</li>
                <li>Information Collected from Third Parties: PayBayGO may collect or validate personal information from external entities as part of its operations. These include:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Razorpay, which supplies confirmation data for payments, refund status, settlement information and fraud detection signals.</li>
                <li>Operators or Vendors who share parking availability, incident data, complaints or confirmations required to validate Parking Sessions or cancellations.</li>
                <li>Third-party analytics tools that provide aggregated and anonymized usage</li>
              </ol>

              <p className="mt-5">All collection from third parties aligns with User consent obligations and Indian data protection principles.</p>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Information Collected Through Automated Means: PayBayGO relies on system automation to preserve accuracy, security and operational continuity. This includes:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>ANPR systems capturing vehicle identifiers at participating</li>
                <li>Sensors transmitting entry or exit events to trigger billing or confirm</li>
                <li>System timestamps used for Parking Session computation and audit</li>
                <li>Automated systems monitoring Wallet usage patterns for fraud Automated collection is essential to verify parking usage, resolve disputes and maintain operational integrity.</li>
              </ol>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Information You Provide Voluntarily: Users may voluntarily provide additional information, including:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Documents or evidence submitted during dispute resolution or error</li>
                <li>Preferences for notifications or Pass</li>
                <li>Additional vehicle details for fleet or multivehicle</li>
                <li>Content submitted to support, feedback channels or operator communication Voluntary information becomes part of the User’s account record and is processed according to this Policy.</li>
              </ol>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Information Required by Law or Public Authority: Certain information may be collected or disclosed if:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>mandated by competent courts or law enforcement,</li>
                <li>required for tax compliance,</li>
                <li>necessary for fraud prevention or cyber-security audit,</li>
                <li>demanded under legal obligation imposed on Razorpay or</li>
              </ol>

              <p className="mt-5">Such disclosures occur strictly on a need-to-know basis.</p>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Information Related to Children: PayBayGO does not offer services to minors under applicable law. If information belonging to a minor is discovered, it will be deleted promptly upon verification unless retention is required by law.</li>
                <li>Accuracy of Information Provided: Users must ensure that all information submitted is accurate, complete and current. PayBayGO is not responsible for losses arising from inaccurate or outdated information. PayBayGO may suspend services until discrepancies are resolved.</li>
                <li>Consequences of Withholding Information: Failure to provide mandated information may result in:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>denial of Wallet services,</li>
                <li>inability to process Parking Sessions,</li>
                <li>inability to resolve disputes,</li>
                <li>termination of the User</li>
              </ol>

              <p className="mt-5">PayBayGO may continue to retain minimal data required for compliance even after account closure.</p>

              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Summary of Information Categories: Information collected falls under six principal classes:</li>
              </ul>

              <ol className="mt-4 list-decimal space-y-3 pl-8 sm:pl-10">
                <li>Identity and authentication data,</li>
                <li>Contact and communication data,</li>
                <li>Parking and operations data,</li>
                <li>Wallet and transaction data,</li>
                <li>Device and technical data,</li>
                <li>Operator or Vendor administrative</li>
              </ol>

              <p className="mt-5">This classification guides how data is stored, accessed, secured and deleted.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">7. How We Use Your Information</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Operational Uses: PayBayGO uses the information described in Clause 6 to operate the Platform, verify identity, authenticate access, process wallet transactions, enable parking bookings, monitor compliance, support automated entry and exit, administer subscriptions, and facilitate communication with Users. These uses are strictly limited to purposes that are necessary for the functioning of PayBayGO as a digital intermediary.</li>
                <li>Service Optimization: PayBayGO processes technical and behavioral data to improve system reliability, enhance speed, strengthen fraud detection models, refine automated billing mechanisms, and optimize location-based features. Such processing is always tied to legitimate operational interests.</li>
                <li>Security and Risk Management: Information may be processed for breach detection, anomaly detection, automated blocking of suspicious activities, confirming the authenticity of device fingerprints, enforcing account security and ensuring continuity of service. Password based authentication is mandatory for account access. Additional safeguards may be introduced if threats emerge.</li>
                <li>Compliance with Law: PayBayGO may use or retain information where required to comply with tax, audit, accounting, consumer protection, information technology, data governance or lawful enforcement obligations. Disclosure under lawful requests is strictly reviewed to prevent over breadth.</li>
                <li>Communications: PayBayGO may contact Users through email or WhatsApp or in app notifications regarding transactions, bookings, renewals, cancellations, wallet status, policy changes or security alerts. Marketing communications are sent only if the User consents, and the User may withdraw consent at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">8. Sharing And Disclosure of Information</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Sharing with Parking Operators: PayBayGO shares limited and necessary information with third party parking Operators who manage the physical parking spaces. Such information may include booking details, vehicle information, timestamps and compliance related data. Operators receive no access to payment credentials or sensitive identifiers.</li>
                <li>Sharing with Service Providers: PayBayGO engages vendors and partners for hosting, analytics, authentication, communication, verification and complaint handling. Each vendor operates under binding confidentiality and data protection commitments. Razorpay acts as the Payment Gateway and handles all payment credentials independently under its own compliance standards.</li>
                <li>Legal and Regulatory Disclosure: Information may be shared with competent authorities if required by applicable law. PayBayGO reviews each request for legality, scope and necessity before making any disclosure.</li>
                <li>Corporate Transactions: If PayBayGO, or its operating entity RIM Solutions Private Limited, undergoes a merger, acquisition, investment or restructuring, User information may be transferred to the successor entity subject to continuity of privacy protections.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">9. Data Retention and Deletion</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Retention Periods: Information is retained for the duration necessary for the purposes described in this Policy. Retention includes compliance with tax laws, audit obligations, fraud detection requirements, and service continuity needs. Operational data such as bookings, wallet transactions and session logs may be retained for statutory or contractual durations.</li>
                <li>User Initiated Deletion: Users may request deletion of their personal information through designated channels. PayBayGO will delete or anonymize such data unless retention is required by applicable law. Certain residual logs may persist in backups for a limited period until technical overwrite occurs.</li>
                <li>Preservation for Disputes: If a dispute, investigation or legal process is active, PayBayGO may preserve relevant data until the matter is fully resolved.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">10. Data Security</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Technical Measures: PayBayGO implements encryption, controlled access systems, isolation of transaction logs, and hardened authentication mechanisms. Password authentication is mandatory and Users are responsible for preserving the confidentiality of their passwords.</li>
                <li>Administrative Safeguards: Access to User data within PayBayGO is restricted to authorised personnel based on operational necessity. Staff undergo structured confidentiality commitments and periodic compliance training.</li>
                <li>Incident Management: PayBayGO maintains procedures to identify, contain and remediate potential security incidents. Users will be notified where required by law if a breach materially affects their personal information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">11. User Rights</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Access and Correction: Users may request a copy of the personal information held about them. Users may also request corrections of inaccuracies.</li>
                <li>Withdrawal of Consent: Where processing is based on consent, Users may withdraw consent through the Platform or via written request. Withdrawal does not affect prior lawful processing.</li>
                <li>Objection and Restriction: Users may object to certain processing activities that are not mandatory for service delivery. PayBayGO may decline objections where processing is required by law or contract.</li>
                <li>Portability: Users may request a structured summary of essential account related information. PayBayGO will provide such records where technically feasible.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">12. Cross Border Transfers</h2>
              <p className="mt-5">PayBayGO stores and processes information primarily in India. If information must be transferred outside India for operational reasons, PayBayGO ensures appropriate contractual and technical safeguards consistent with applicable laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">13. Children’s Data</h2>
              <p className="mt-5">PayBayGO does not knowingly collect data from minors under legal majority thresholds. If data is inadvertently collected, PayBayGO will delete it upon identification.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">14. Changes to this Privacy Policy</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Updates: PayBayGO may revise this Privacy Policy periodically. Updated versions will be posted on the Platform, and Users are encouraged to review changes regularly.</li>
                <li>Material Changes: If PayBayGO makes significant modifications to the scope of data processing, a notice may be provided via email or in app communication. Continued use of the Platform indicates acceptance of the revised terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">15. Contact Information</h2>
              <ul className="mt-5 list-disc space-y-4 pl-6 sm:pl-8">
                <li>Data Controller: RIM Solutions Private Limited 47, Kumara Krupa Towers, 2nd Cross, 1st Block, Dr Kumars Layout, Nagayanapalya, Maruthisevanagar, Bangalore – 560033.</li>
                <li>Queries: Users may contact PayBayGO regarding privacy matters using the support channels listed on the Platform.</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
