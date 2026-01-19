import { useEffect } from "react";
import { useCart } from "@/context/cartContext";
export default function TermsCom({ backFunction2 }) {
  const { setOpen, cart } = useCart();

    // 🔒 HARD SCROLL LOCK (mobile + desktop safe)
  useEffect(() => {
    const scrollY = window.scrollY;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, []);


  return (
    <div className="w-full h-screen bg-white text-black fixed top-0 left-0 z-20 flex flex-col px-4 py-5 sm:p-5 overflow-y-auto">
      {/* Header */}
      <div className="flex flex-row justify-between items-center p-5 mb-5">
        <img
          onClick={backFunction2}
          className="w-5 cursor-pointer"
          src="/icons8-back-50 (1).png"
        />
        <button onClick={() => setOpen(true)} className="relative">
          <img
            className="w-6"
            src="/icons8-shopping-bag-32.png"
            alt="Cart"
          />

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-5 max-w-3xl mx-auto font-mono text-[15px] uppercase leading-7 tracking-widest space-y-4">
        <h1 className="text-xl font-bold uppercase">Terms of Service</h1>

        <p>Last Updated: December 23, 2025</p>

        <p>
          INTRODUCTION This website, located at www.yeezy.com, is operated by
          Yeezy, LLC ("Yeezy," "we," "us," or "our"). These Terms of Service
          ("Terms") govern your access to and use of the website and any related
          online, digital, or mobile services, content, and features provided by
          Yeezy (collectively, the "Service").
        </p>

        <p>
          PLEASE READ THESE TERMS CAREFULLY. THESE TERMS CONTAIN IMPORTANT
          INFORMATION REGARDING YOUR LEGAL RIGHTS, AND OBLIGATIONS, AS WELL AS
          CONDITIONS, LIMITATIONS, AND EXCLUSIONS THAT MIGHT APPLY TO YOU.
        </p>

        <p>
          THESE TERMS REQUIRE THE USE OF ARBITRATION TO RESOLVE DISPUTES, RATHER
          THAN JURY TRIALS OR CLASS ACTIONS, SUBJECT TO YOUR RIGHT TO OPT-OUT AS
          DESCRIBED BELOW. BY ACCESSING OUR WEBSITE, YOU AGREE THAT ANY DISPUTE
          OR CLAIM RELATING IN ANY WAY TO YOUR USE OF OUR SERVICE, OR TO ANY
          PRODUCTS SOLD OR DISTRIBUTED BY YEEZY WILL BE RESOLVED THROUGH BINDING
          ARBITRATION, RATHER THAN IN COURT, UNLESS YOU EXERCISE YOUR OPT-OUT
          RIGHT WITHIN THIRTY (30) DAYS.
        </p>

        <p>
          By accessing or using the Service, including by browsing the Website or
          placing an order, you ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND, AND
          AGREE TO BE BOUND BY THESE TERMS AND OUR PRIVACY POLICY, WHICH IS
          INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE, DO NOT USE THE SERVICE.
        </p>

        <p>
          ELIGIBILITY AND USE OF THE SERVICE You may not use the Service or place
          an order if you (a) do not agree to these Terms, (b) are under 18
          years of age, or (c) are prohibited from accessing or using the Service
          under applicable law. By using the Service, you represent and warrant
          that you are purchasing products for personal or household use only,
          and not for resale, redistribution, or export. If you access or place an
          order on behalf of an entity, you represent that you have authority to
          bind that entity to these Terms.
        </p>

        <p>
          CHANGES TO TERMS We reserve the right to modify these Terms at any
          time. Material changes will be effective fifteen (15) days after posting
          notice of such changes to the Website or sending notice to your email
          address on file. Changes to the arbitration provisions will require your
          affirmative consent. Your continued use of the Service after the notice
          period constitutes acceptance of the revised Terms. It is your
          responsibility to review these Terms regularly.
        </p>

        <p>
          DESCRIPTION OF THE SERVICE The Service provides an online platform
          through which users may browse, purchase, and receive Yeezy branded
          products, access customer support, and receive communications related
          to orders, promotions, and updates. We reserve the right to modify,
          suspend, or discontinue any aspect of the Service, including product
          offerings, pricing, availability, or features, at any time and without
          notice.
        </p>

        <p>
          PRODUCTS, AVAILABILITY, AND ACCURACY Certain products may be available
          in limited quantities. All product descriptions, images, and pricing
          are subject to change at any time without notice. We do not guarantee
          that product images or colors displayed on your device are accurate.
          We reserve the right to limit the sale of products to any person,
          geographic region, or jurisdiction, and to discontinue any product at
          any time.
        </p>

        <p>
          ORDER ACCEPTANCE, PRICING, AND PAYMENT Your order constitutes an offer
          to purchase products under these Terms. All orders are subject to our
          acceptance, and we may refuse or cancel any order at our discretion,
          including due to suspected fraud, unauthorized activity, pricing
          errors, or product availability. Prices are subject to change without
          notice. In the event of pricing errors, we reserve the right to cancel
          affected orders. By submitting payment information, you authorize us
          and our third-party payment processors to charge the full amount of
          your order, including all applicable taxes and shipping. You represent
          that all payment information is accurate and that you are authorized
          to use the payment method provided.
        </p>

        <p>
          SHIPPING, RISK OF LOSS, FINAL SALE, AND RETURNS We will arrange shipment
          of products to the address provided at checkout. Shipping and delivery
          dates are estimates only and are not guaranteed. Title and risk of loss
          pass to you upon your receipt of the products. We are not responsible
          for delays caused by shipping carriers. However, if products are lost
          or damaged in transit before delivery to you, we will work with you to
          resolve the issue, which may include replacement or refund at our
          discretion. All sales are final except where required by applicable
          law. California consumers have the right to cancel orders within a
          reasonable time before shipment. We do not accept returns or exchanges
          for products that have been shipped, except for defective products or
          as otherwise required by law. If you receive a defective product,
          please contact us within thirty (30) days of receipt for a replacement
          or refund.
        </p>

        <p>
          CHARGEBACKS AND FRAUD PREVENTION We reserve the right to investigate
          and dispute any chargebacks or claims of unauthorized transactions.
          Fraudulent, abusive, or bad-faith chargebacks constitute a material
          breach of these Terms and may result in permanent restriction from the
          Service, order refusal, and legal action to recover losses, costs of
          goods, collection costs, arbitration costs, and attorneys' fees.
        </p>

        <p>
          COMMUNICATIONS (EMAIL AND SMS) By providing your email address or
          phone number, you consent to receive transactional communications
          related to your orders. You may separately opt-in to receive marketing
          communications, including via SMS, by providing your express written
          consent through our opt-in mechanism. Message and data rates may apply.
          Consent to receive marketing messages is not a condition of purchase.
          You may revoke consent and opt-out of marketing communications at any
          time by replying STOP to any message, following in-message unsubscribe
          links, or by contacting us at contact@yeezy.com. Additional details are
          provided in our Privacy Policy.
        </p>

        <p>
          INTELLECTUAL PROPERTY All content, designs, logos, trademarks, text,
          graphics, images, and other materials on the Service are owned by or
          licensed to Yeezy and are protected by intellectual property laws. You
          are granted a limited, non-exclusive, non-transferable, revocable
          license to access and use the Service for personal, non-commercial
          purposes only. Any unauthorized use is strictly prohibited and may
          result in legal action.
        </p>

        <p>
          PERSONAL INFORMATION Your submission of personal information through
          the Service is governed by our Privacy Policy.
        </p>

        <p>
          PROHIBITED USES You agree not to use the Service to: (a) violate any
          law or regulation; (b) infringe intellectual property rights or
          privacy rights; (c) scrape, crawl, or use automated tools to access
          the Service; (d) introduce malware or interfere with security
          features; or (e) engage in abusive, fraudulent, or deceptive conduct.
          We reserve the right to suspend or terminate access for violations,
          provided that we will give you notice and an opportunity to cure where
          reasonable and legally required.
        </p>

        <p>
          THIRD-PARTY SERVICES AND LINKS The service may rely on or include links
          to third-party services (including payment processors, carriers,
          analytics, and advertising tools). WE DISCLAIM ALL LIABILITY ARISING
          FROM THIRD-PARTY SERVICES, INCLUDING OUTAGES, ERRORS, OR DATA ISSUES
          TO THE EXTENT PERMITTED BY LAW. More information related to our
          third-party services is described in our Privacy Policy.
        </p>

        <p>
          DISCLAIMERS THE SERVICE AND ALL PRODUCTS ARE PROVIDED "AS IS" AND "AS
          AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.
          WE DO NOT GUARANTEE UNINTERRUPTED, ERROR-FREE, OR SECURE OPERATION.
          Some jurisdictions do not allow certain disclaimers, so portions of
          this section may not apply to you.
        </p>

        <p>
          LIMITATION OF LIABILITY TO THE MAXIMUM EXTENT PERMITTED BY LAW, YEEZY
          SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL,
          SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO
          THE SERVICE OR PRODUCTS. THIS LIMITATION DOES NOT APPLY TO DAMAGES
          ARISING FROM DEFECTIVE PRODUCTS OR PERSONAL INJURY CAUSED BY YEEZY'S
          GROSS NEGLIGENCE, FRAUD, OR WILLFUL MISCONDUCT. EXCEPT AS PROHIBITED BY
          LAW, YEEZY'S TOTAL LIABILITY FOR CLAIMS RELATING TO THE SERVICE
          (EXCLUDING PRODUCT DEFECTS, PERSONAL INJURY, OR VIOLATIONS OF LAW)
          SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE ORDER GIVING RISE TO THE
          CLAIM IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
        </p>

        <p>
          INDEMNIFICATION You agree to indemnify, defend, and hold harmless Yeezy
          and its affiliates, officers, directors, employees, and agents from
          any claims, damages, losses, liabilities, and expenses (including
          reasonable attorneys' fees) arising out of your violation of these
          Terms, misuse of the Service, or violation of law.
        </p>

        <p>
          DISPUTE RESOLUTION, BINDING ARBITRATION, AND CLASS ACTION WAIVER
          PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS AND
          REQUIRES MOST DISPUTES TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION AND
          NOT IN COURT. Informal Resolution Requirement Before initiating
          arbitration, you agree to first attempt to resolve any dispute, claim,
          or controversy arising out of or relating to these Terms, the Service,
          or any products sold by Yeezy (each, a "Dispute") by contacting us at
          contact@yeezy.com with a written description of the Dispute and your
          contact information. If the Dispute is not resolved within thirty (30)
          days after receipt of your notice, either party may initiate
          arbitration as set forth below.
        </p>

        <p>
          Agreement to Arbitrate Except for disputes that qualify for small-claims
          court (as set forth below), any Dispute shall be resolved exclusively
          by final and binding arbitration, rather than in court, and you waive
          any right to a jury trial. The arbitration shall be administered by the
          American Arbitration Association ("AAA") in accordance with its
          Consumer Arbitration Rules, as modified by these Terms. The AAA rules
          are available at www.adr.org. This arbitration agreement is governed by
          the Federal Arbitration Act ("FAA") and evidences a transaction
          involving interstate commerce.
        </p>

        <p>
          Location and Procedure Unless otherwise required by applicable law,
          arbitration shall take place in Los Angeles County, California. The
          arbitration may be conducted in person, by telephone, by video
          conference, or based solely on written submissions, as determined by
          the arbitrator.
        </p>

        <p>
          Small Claims Exception Either party may bring an individual claim in
          small claims court located in Los Angeles County, California, if the
          claim qualifies and remains in that court. If a claim is filed in small
          claims court, it may not be removed to arbitration unless appealed.
        </p>

        <p>
          Class Action and Representative Waiver YOU AND YEEZY AGREE THAT ALL
          DISPUTES MUST BE BROUGHT IN AN INDIVIDUAL CAPACITY ONLY. YOU EXPRESSLY
          WAIVE THE RIGHT TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY
          CLASS, COLLECTIVE, PRIVATE ATTORNEY GENERAL, OR REPRESENTATIVE ACTION
          OR PROCEEDING. The arbitrator may not consolidate claims, preside over
          any form of class or representative proceeding, or award relief to
          anyone other than the individual party seeking relief. If this class
          action waiver is found unenforceable, the entire arbitration agreement
          shall be null and void.
        </p>

        <p>
          Delegation Clause The arbitrator shall have exclusive authority to
          resolve any dispute relating to the interpretation, applicability,
          enforceability, or formation of this arbitration agreement, including
          any claim that all or part of this agreement is void or voidable.
        </p>

        <p>
          Arbitration Fees and Costs Payment of arbitration fees will be governed
          by the AAA Consumer Arbitration Rules. Yeezy will not seek to recover
          arbitration fees from you unless the arbitrator determines your claim
          is frivolous or brought for an improper purpose.
        </p>

        <p>
          Opt-Out Right You have the right to opt-out of this arbitration agreement
          by sending written notice to contact@yeezy.com within thirty (30) days
          of first accepting these Terms. Your notice must include your full
          name, mailing address, and a clear statement that you wish to opt-out of
          arbitration. Opting out of arbitration will not affect any other
          provision of these Terms. Survival This arbitration agreement shall
          survive termination of these Terms and your use of the Service.
        </p>

        <p>
          GOVERNING LAW These Terms are governed by the laws of the State of
          California, without regard to conflict-of-law rules.
        </p>

        <p>
          FORCE MAJEURE We shall not be liable for failure or delay due to
          events beyond our reasonable control, including acts of God, war,
          terrorism, pandemics, labor disputes, carrier failures, or governmental
          actions.
        </p>

        <p>
          SEVERABILITY If any provision of these Terms is determined to be
          unlawful, void or unenforceable, such provision shall nonetheless be
          enforceable to the fullest extent permitted by applicable law, and the
          unenforceable portion shall be deemed to be severed from these Terms,
          such determination shall not affect the validity and enforceability of
          any other remaining provisions.
        </p>

        <p>
          TERMINATION The obligations and liabilities of the parties incurred
          prior to the termination date shall survive the termination of these
          Terms for all purposes. These Terms are effective unless and until
          terminated by us. If in our sole judgment you fail, or we suspect that
          you have failed, to comply with any term or provision of these Terms,
          we may terminate these Terms at any time without notice and you will
          remain liable for all amounts due up to and including the date of
          termination; and/or accordingly may deny you access to our Service (or
          any part thereof).
        </p>

        <p>
          WAIVER AND ENTIRE AGREEMENT The failure of us to exercise or enforce
          any right or provision of these Terms shall not constitute a waiver of
          such right or provision. These Terms and any policies or operating
          rules posted by us on the Service constitutes the entire agreement and
          understanding between you and us and govern your use of the Service,
          superseding any prior or contemporaneous agreements, communications
          and proposals, whether oral or written, between you and us (including,
          but not limited to, any prior versions of the Terms). Any ambiguities in
          the interpretation of these Terms shall not be construed in favor of
          the drafting party.
        </p>

        <p>
          CONTACT INFORMATION To ask questions or comment about this Service or
          these Terms, contact us by email at contact@yeezy.com or by mail using
          the details provided below:
        </p>

        <p>Yeezy, LLC</p>
        <p>8025 Melrose Ave</p>
        <p>Los Angeles, CA 90046</p>
      </div>
    </div>
  );
}







