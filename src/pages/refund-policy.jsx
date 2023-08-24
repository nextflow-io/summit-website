import React from 'react';
import { Link } from 'website-components';

import Seo from '../components/Seo';

const RefundPolicy = () => {
  return (
    <>
      <Seo title="Nextflow SUMMIT: Refund Policy" />
      <div className="container-sm text-white py-20">
        <h1 className="typo-h3 text-green-300">Refund Policy</h1>
        <p className="typo-body mt-4">
          We understand that circumstances can change, and we want to ensure a fair and transparent refund process for
          our attendees. Please carefully review our refund policy below:
        </p>
        <h2 className="typo-h5 mt-8">Refund Eligibility:</h2>
        <p className="typo-body">
          We will only process refund requests for canceled registrations received on or before September 9, 2023 for
          registrations received for the Nextflow Hackathon and Summit in Barcelona, and October 30, 2023 for the
          registrations received for the Nextflow Hackathon and Summit in Boston. Any requests received after this date
          will not be eligible for a refund.
        </p>
        <h2 className="typo-h5 mt-8">Refund Amount:</h2>
        <p className="typo-body">
          If you decide to cancel your registration before the dates listed under the Refund Eligibility, we will
          provide a full refund of the registration fee paid. However, any applicable processing fees or administrative
          charges associated with the payment may not be refundable.
        </p>
        <h2 className="typo-h5 mt-8">Cancellation Process:</h2>
        <p className="typo-body">
          To initiate a refund request, please contact our team at help.summit@nextflow.io with the subject line{' '}
          {`"Refund Request"`}. In your email, include your full name, registration details, and the reason for the
          cancellation.
        </p>
        <h2 className="typo-h5 mt-8">Processing Time:</h2>
        <p className="typo-body">
          Once we receive your refund request, please allow up to 21 days for us to process your request and for the
          refund to be issued. Refunds will be processed using the original payment method used during registration.
        </p>
        <h2 className="typo-h5 mt-8">Non-Transferable:</h2>
        <p className="typo-body">
          Refunds are issued only to the original registrant and are not transferable to another person or event. Event
          Changes: In the unlikely event that the Summit is canceled or rescheduled by the organizers, registrants will
          be entitled to a full refund of the registration fee. However, we will not be responsible for any additional
          expenses incurred, such as travel or accommodation costs.
        </p>
        <h2 className="typo-h5 mt-8">Force Majeure:</h2>
        <p className="typo-body">
          We reserve the right to make exceptions to this refund policy in cases of unforeseen and exceptional
          circumstances, such as force majeure events. Such cases will be evaluated on a case-by-case basis.{' '}
        </p>
        <p className="typo-body mt-4">
          By registering for the Nextflow Summit, you acknowledge that you have read, understood, and agreed to the
          terms of this refund policy.
        </p>
        <p className="typo-body mt-4">
          Please direct any questions or concerns regarding the refund policy to our customer support team at{' '}
          <Link to="mailto:help.summit@nextflow.io">mailto:help.summit@nextflow.io</Link>. We are here to assist you and
          ensure your experience at the Nextflow Summit is as smooth as possible.
        </p>
      </div>
    </>
  );
};

export default RefundPolicy;
