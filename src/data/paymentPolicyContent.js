export const paymentPolicySections = [
  {
    heading: "1.1 PayBayGO Payment Services",
    blocks: [
      { type: "number", text: "1.1.1. PayBayGO provides a proprietary digital payment and settlement framework that enables Users to load prepaid value into an internal closed loop Wallet, conduct parking related transactions, purchase time based Passes, and settle fees that arise during the use of PayBayGO services." },
      { type: "number", text: "1.1.2. PayBayGO acts solely as an intermediary that facilitates the acceptance of payments from Users for parking transactions. PayBayGO does not act as a trustee, custodian, escrow agent, fiduciary or payment aggregator within the meaning of applicable RBI regulations." },
      { type: "number", text: "1.1.3. All funds loaded into the Wallet are recorded as prepaid balance available exclusively for transactions conducted within the PayBayGO environment. Such funds do not represent deposits or stored value instruments that can be withdrawn externally." },
      { type: "number", text: "1.1.4. PayBayGO does not accept liability for delays, disruptions, holds or verification procedures initiated by the Payment Gateway, banking channels or regulatory bodies that influence the completion of User payments." },
      { type: "number", text: "1.1.5. PayBayGO reserves the right to monitor all transactions for compliance, operational risks, fraud detection and verification without prior notice to the User." }
    ]
  },
  {
    heading: "1.2 Third Party Services (Razorpay and Other Payment Providers)",
    blocks: [
      { type: "number", text: "1.2.1. PayBayGO integrates with Razorpay to provide Users with the ability to load Wallet balances and make direct payments for transactions." },
      { type: "number", text: "1.2.2. All payment instruments, authentication flows, settlement cycles and operational safeguards are governed by Razorpay’s terms and conditions, which the User agrees to automatically when initiating a payment on PayBayGO." },
      { type: "number", text: "1.2.3. Razorpay remains solely responsible for all authentication, processing, risk scoring, reversals, chargebacks, settlement timelines and compliance norms applicable to payment intermediaries under Indian law." },
      { type: "number", text: "1.2.4. PayBayGO does not exercise control over Razorpay. As such, PayBayGO cannot guarantee uninterrupted or error free payment processing and does not accept liability for delays or failures arising from the Payment Gateway." }
    ]
  },
  {
    heading: "1.3 Verification Process",
    blocks: [
      { type: "number", text: "1.3.1. PayBayGO may conduct identity, vehicle, account or payment verification procedures to ensure lawful use of its Payment Services." },
      { type: "number", text: "1.3.2. PayBayGO may request additional documentation such as proof of identity, vehicle registration numbers, address verification or financial details to satisfy compliance and fraud prevention obligations." },
      { type: "number", text: "1.3.3. PayBayGO may suspend Wallet access, restrict payment capabilities or place holds on balance during ongoing verification processes." },
      { type: "number", text: "1.3.4. Failure to provide accurate information may result in account limitations, cancellation of transactions or permanent suspension of Payment Services." }
    ]
  },
  {
    heading: "1.4 Additional Terms",
    blocks: [
      { type: "number", text: "1.4.1. PayBayGO may publish separate terms for specific features such as Pass renewals, bulk corporate accounts, integrated parking solutions or promotional pricing." },
      { type: "number", text: "1.4.2. In the event of a conflict between these Payment Terms and any additional terms, the additional terms shall prevail for that specific service." },
      { type: "number", text: "1.4.3. PayBayGO may update or modify these Payment Terms at any time. Continued use constitutes acceptance of the revised terms." }
    ]
  },
  {
    heading: "2. GUEST TERMS",
    blocks: [
      { type: "subheading", text: "2.1 Adding a Payment Method" },
      { type: "number", text: "2.1.1. Users may add payment instruments supported by Razorpay, including credit cards, debit cards, UPI handles, net banking credentials or other approved methods." },
      { type: "number", text: "2.1.2. The User authorizes PayBayGO and Razorpay to store masked payment instrument details for future transactions." },
      { type: "number", text: "2.1.3. Users are responsible for ensuring the accuracy and validity of all payment instruments added to the Platform." },
      { type: "subheading", text: "2.2 Payment Method Verification" },
      { type: "number", text: "2.2.1. Razorpay may perform micro charge verification, UPI validation or card tokenization as part of its compliance mandate." },
      { type: "number", text: "2.2.2. Verification failures may result in the rejection of a payment instrument until corrected by the User." },
      { type: "subheading", text: "2.3 Payment Authorization" },
      { type: "number", text: "2.3.1. By initiating any transaction on the Platform, the User consents to PayBayGO debiting the selected payment method for transaction value, taxes and any associated fees." },
      { type: "number", text: "2.3.2. Users authorize PayBayGO to conduct automatic debits from the Wallet for Session Fees, Pass renewals, overstay penalties and Operator directed charges." },
      { type: "number", text: "2.3.3. Payments may be automatically triggered based on parking entry and exit logs, sensor data, time stamps or system computations." },
      { type: "subheading", text: "2.4 Currency" },
      { type: "number", text: "2.4.1. All transactions are denominated in Indian Rupees." },
      { type: "number", text: "2.4.2. PayBayGO does not support foreign currency instruments or conversions." },
      { type: "subheading", text: "2.5 Payment Restrictions" },
      { type: "number", text: "2.5.1. PayBayGO may refuse a transaction if fraud, suspicious activity or regulatory concerns are detected." },
      { type: "number", text: "2.5.2. PayBayGO may restrict Wallet loading limits to comply with closed loop system guidelines." },
      { type: "number", text: "2.5.3. PayBayGO may suspend or terminate a User’s payment privileges for repeated failures, misuse or policy violations." }
    ]
  },
  {
    heading: "3. HOST TERMS (PAYBAYGO AS HOST)",
    blocks: [
      { type: "subheading", text: "3.1 Payment Collection" },
      { type: "number", text: "3.1.1. PayBayGO collects parking fees from Users into its Wallet system for internal accounting and billing." },
      { type: "number", text: "3.1.2. PayBayGO does not hold funds on behalf of Operators. Fees collected are treated as PayBayGO’s internal commercial receipts." },
      { type: "subheading", text: "3.2 Valid Payout Method (Operators)" },
      { type: "number", text: "3.2.1. Operators must provide valid bank account details to receive contractual payouts from PayBayGO." },
      { type: "number", text: "3.2.2. PayBayGO is not responsible for delays or failures caused by incorrect Operator bank information." },
      { type: "subheading", text: "3.3 Timing of Payout" },
      { type: "number", text: "3.3.1. PayBayGO issues payouts to Operators based on internal accounting cycles." },
      { type: "number", text: "3.3.2. PayBayGO does not guarantee real time or on demand payouts to Operators." },
      { type: "subheading", text: "3.4 Payout" },
      { type: "number", text: "3.4.1. PayBayGO processes payouts through offline transfers, including NEFT, RTGS or IMPS." },
      { type: "number", text: "3.4.2. PayBayGO retains authority to adjust payout amounts for refunds, operator penalties, dispute deductions, system corrections or reconciliation discrepancies." },
      { type: "subheading", text: "3.5 Payout Restrictions" },
      { type: "number", text: "3.5.1. PayBayGO may withhold payout amounts in cases of unresolved disputes, incomplete verification or operational irregularities." },
      { type: "number", text: "3.5.2. PayBayGO may suspend payout flows if it detects fraudulent activity or material policy violations by an Operator." },
      { type: "subheading", text: "3.6 Currency Conversion" },
      { type: "number", text: "3.6.1. Payouts to Operators occur only in Indian Rupees." },
      { type: "number", text: "3.6.2. No conversion services are offered." },
      { type: "subheading", text: "3.7 Payment Service Providers" },
      { type: "number", text: "3.7.1. PayBayGO may engage additional service providers for settlement or reconciliation." },
      { type: "number", text: "3.7.2. Operators consent to the use of such providers when receiving payouts." }
    ]
  },
  {
    heading: "4. GENERAL TERMS",
    blocks: [
      { type: "subheading", text: "4.1 Fees" },
      { type: "number", text: "4.1.1. PayBayGO may charge fees for parking, Pass usage, Billable Events, convenience services or optional features." },
      { type: "number", text: "4.1.2. All fee schedules are subject to change at PayBayGO’s discretion." },
      { type: "subheading", text: "4.2 Payment Authorization" },
      { type: "number", text: "4.2.1. Users grant PayBayGO continuing authority to charge for Parking Sessions, Pass renewals or penalties once triggered by system computations." },
      { type: "subheading", text: "4.3 Collections" },
      { type: "number", text: "4.3.1. Unpaid dues may be collected through multiple attempts at Wallet deduction or direct charging from stored payment methods." },
      { type: "number", text: "4.3.2. PayBayGO may suspend access until dues are cleared." },
      { type: "subheading", text: "4.4 Payment Processing Errors" },
      { type: "number", text: "4.4.1. Users must notify PayBayGO of incorrect billing within a reasonable period." },
      { type: "number", text: "4.4.2. PayBayGO will investigate and make corrections if errors are verified." },
      { type: "subheading", text: "4.5 Refunds" },
      { type: "number", text: "4.5.1. Wallet loads are refundable only in cases of system errors or regulatory requirements." },
      { type: "number", text: "4.5.2. Refunds for parking disputes depend on verification through system logs and Operator cooperation." }
    ]
  },
  {
    heading: "5. DAMAGE CLAIMS AND DAMAGE AMOUNTS",
    blocks: [
      { type: "number", text: "5.1. Users acknowledge that parking facilities are controlled by Operators and PayBayGO is not responsible for theft, fire, vandalism, environmental hazards, structural failures or any damage occurring on Operator premises." },
      { type: "number", text: "5.2. Users agree to indemnify PayBayGO against claims arising from misuse of parking facilities, vehicle damage caused by the User or violations of parking protocols." },
      { type: "number", text: "5.3. Users must pursue claims for property damage directly with the Operator." }
    ]
  },
  {
    heading: "6. PROHIBITED ACTIVITIES",
    blocks: [
      { type: "number", text: "6.1. Users shall not interfere with sensors, ANPR systems, timestamps or automated billing." },
      { type: "number", text: "6.2. Users shall not manipulate Wallet balances, exploit billing algorithms or circumvent system processes." }
    ]
  },
  {
    heading: "7. FORCE MAJEURE",
    blocks: [
      { type: "number", text: "7.1. PayBayGO is not liable for obligations that cannot be performed due to events outside its control, including but not limited to natural events, regulatory interventions, outages, pandemics or cyberattacks." }
    ]
  },
  {
    heading: "8. DISCLAIMERS",
    blocks: [
      { type: "number", text: "8.1. Payment Services are provided on an as is basis." },
      { type: "number", text: "8.2. PayBayGO does not guarantee uninterrupted or error free payment processing." }
    ]
  },
  {
    heading: "9. LIABILITY",
    blocks: [
      { type: "number", text: "9.1. PayBayGO’s total aggregate liability is limited to the value of the disputed transaction." },
      { type: "number", text: "9.2. PayBayGO will not be liable for indirect, consequential, punitive or special damages." }
    ]
  },
  {
    heading: "10. INDEMNIFICATION",
    blocks: [
      { type: "number", text: "10.1. Users shall indemnify PayBayGO against all losses arising from improper use, fraudulent payments, system misuse or violation of these terms." }
    ]
  },
  {
    heading: "11. MODIFICATIONS AND TERMINATIONS",
    blocks: [
      { type: "number", text: "11.1. PayBayGO may modify Payment Services at any time. Continued use indicates acceptance." },
      { type: "number", text: "11.2. PayBayGO may terminate a User’s access for breach, fraud or misuse." }
    ]
  },
  {
    heading: "12. GOVERNING LAW",
    blocks: [
      { type: "number", text: "12.1. These Payment Terms are governed by the laws of India." },
      { type: "number", text: "12.2. Bengaluru courts have exclusive jurisdiction." }
    ]
  },
  {
    heading: "13. MISCELLANEOUS",
    blocks: [
      { type: "number", text: "13.1. If any clause is held invalid, the remainder remains enforceable." },
      { type: "number", text: "13.2. These Payment Terms constitute the entire legal understanding between PayBayGO and the User with respect to payments." }
    ]
  }
];
