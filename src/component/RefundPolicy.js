import React from 'react';
import './refundPolicy.css';
import NavHeader from './NavHeader';
import Footer from './Footer';

const RefundPolicyPage = () => {
    return (
        <div>
            <NavHeader />
            
            <div className="refund-policy-container">
                <h1 className='refund-policy-heading-h1'>Refund Policy</h1>

                <h2 className='refund-policy-heading-h2'>Subscription & Lifetime Purchase Policy</h2>
                <p className='refund-policy-text'>Civil Hand Notes - GATE Exam Preparation App offers users two types of access models:</p>
                <ul className='refund-policy-list'>
                    <li className='refund-policy-list-item'><strong>Subscription-Based Access:</strong> Users can subscribe on a monthly or yearly basis to access all notes within the app.</li>
                    <li className='refund-policy-list-item'><strong>Lifetime Access:</strong> Users can make a one-time payment to gain lifetime access to all the study materials available in the app.</li>
                </ul>

                <h2 className='refund-policy-heading-h2'>Refund Eligibility</h2>
                <p className='refund-policy-text'>We strive to ensure user satisfaction, and our refund policy is as follows:</p>
                <ul className='refund-policy-list'>
                    <li className='refund-policy-list-item'><strong>No refunds</strong> will be provided if a user has subscribed to any model.</li>
                    <li className='refund-policy-list-item'>Refunds will only be offered in cases of <strong>payment failure</strong>, where the amount has been deducted but access has not been granted.</li>
                    <li className='refund-policy-list-item'>If a user faces issues accessing content after payment, they must first contact our support team for resolution.</li>
                </ul>

                <h2 className='refund-policy-heading-h2'>How to Request a Refund</h2>
                <p className='refund-policy-text'>To request a refund, please follow these steps:</p>
                <ul className='refund-policy-list'>
                    <li className='refund-policy-list-item'>Email us at <a href="mailto:civilhandnotes@gmail.com">civilhandnotes@gmail.com</a> with your purchase details and reason for the refund request.</li>
                    <li className='refund-policy-list-item'>Provide a screenshot of the payment receipt.</li>
                    <li className='refund-policy-list-item'>Our support team will review your request within <strong>5 business days</strong> and respond accordingly.</li>
                </ul>

                <h2 className='refund-policy-heading-h2'>Processing Time</h2>
                <p className='refund-policy-text'>If your refund request is approved, the amount will be credited to your original payment method within <strong>7-10 business days</strong>.</p>

                <h2 className='refund-policy-heading-h2'>Contact Us</h2>
                <p className='refund-policy-text'>If you have any questions regarding our refund policy, please contact us at:</p>
                <ul className='refund-policy-list'>
                    <li className='refund-policy-list-item'>Email: <a href="mailto:civilhandnotes@gmail.com">civilhandnotes@gmail.com</a></li>
                    <li className='refund-policy-list-item'>WhatsApp: <a href='https://wa.me/918609522792' target='_blank' rel='noopener noreferrer'>+918609522792</a></li>
                </ul>
            </div>

            <Footer currentPath={'refund'} />
        </div>
    );
}

export default RefundPolicyPage;
