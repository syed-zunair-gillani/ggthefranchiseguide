"use client"
import React, { useState } from 'react';
import DownloadAndSurveyForm from '@/components/download-and-survey-form';
import { useRouter } from 'next/navigation';

const SurveyForm = () => {
    const [step, setStep] = useState(1);
    const router = useRouter();
    const [formData, setFormData] = useState({
        leapTime: '',
        provenSystem: '',
        investmentReadiness: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        consent: false,
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        setError('');
        if (
            name === 'provenSystem' && value === 'I prefer to have complete control over my business operations.' ||
            name === 'investmentReadiness' && value === 'No'
        ) {
            router.push('/free-book-form');
            return
        }
    };

    const validateStep = () => {
        switch (step) {
            case 1:
                if (!formData.leapTime) return 'Please select a time for your franchise ownership.';
                break;
            case 2:
                if (!formData.provenSystem) return 'Please select your preference for following a system.';
                break;
            case 3:
                if (!formData.investmentReadiness) return 'Please indicate your investment readiness.';
                break;
            case 4:
                if (!formData.firstName.trim()) return 'First name is required.';
                break;
            case 5:
                if (!formData.lastName.trim()) return 'Last name is required.';
                break;
            case 6:
                if (!formData.email.trim()) return 'Email is required.';
                break;
            case 7:
                if (!formData.phone.trim()) return 'Phone number is required.';
                break;
            case 8:
                if (!formData.consent) return 'You must consent to continue.';
                break;
            default:
                return '';
        }
        return '';
    };

    const nextStep = () => {
        const validationError = validateStep();
        if (validationError) {
            setError(validationError);
        } else {
            setError('');
            setStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        setError('');
        setStep((prev) => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateStep();
        if (validationError) {
            setError(validationError);
            return;
        }
        console.log('Form Data:', formData);
        window.location.replace('/calendar');

    };

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-[560px] mx-auto space-y-4 my-20">
                {error && (
                    <div className="bg-red-100 text-red-700 p-2 rounded">
                        {error}
                    </div>
                )}

                {step === 1 && (
                    <div>
                        <h2 className="font-medium mb-2">
                            When are you looking to make your leap into franchise ownership? *
                        </h2>
                        {['Within 3 months', '3-6 months', '6-12 months', "I'm not sure"].map((option) => (
                            <label key={option} className="block">
                                <input
                                    type="radio"
                                    name="leapTime"
                                    value={option}
                                    checked={formData.leapTime === option}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="font-medium mb-2">
                            In franchising, success often comes from following a proven system.
                            Are you comfortable working within established guidelines and processes? *
                        </h2>
                        {[
                            'Absolutely, I see the value in a proven framework.',
                            "I'm open to it, but I'd also like some room for flexibility and creativity.",
                            'I prefer to have complete control over my business operations.',
                        ].map((option) => (
                            <label key={option} className="block">
                                <input
                                    type="radio"
                                    name="provenSystem"
                                    value={option}
                                    checked={formData.provenSystem === option}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="font-medium mb-2">
                            Do you currently have at least $50,000 readily available and assets totaling at least $100,000? *
                        </h2>
                        {['Yes', 'No'].map((option) => (
                            <label key={option} className="block">
                                <input
                                    type="radio"
                                    name="investmentReadiness"
                                    value={option}
                                    checked={formData.investmentReadiness === option}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <label className="block">
                            First Name *
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                    </div>
                )}

                {step === 5 && (
                    <div>
                        <label className="block">
                            Last Name *
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                    </div>
                )}

                {step === 6 && (
                    <div>
                        <label className="block">
                            Email *
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                    </div>
                )}

                {step === 7 && (
                    <div>
                        <label className="block">
                            Phone Number *
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-2 border rounded"
                            />
                        </label>
                    </div>
                )}

                {step === 8 && (
                    <div>
                        <label className="block">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                required
                                className="mr-2"
                            />
                            I Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from GG The Franchise Guide. Message frequency varies. Message & data rates may apply. You can reply STOP to unsubscribe at any time.
                        </label>
                    </div>
                )}

                <div className="flex justify-between bg-[#0C73B0] !rounded-md !mt-12">
                    {step > 1 && (
                        <button type="button" onClick={prevStep} className="px-6 py-4 text-gray-300">
                            Previous
                        </button>
                    )}
                    {step < 8 ? (
                        <div className='flex justify-end w-full'>
                            <button type="button" onClick={nextStep} className="bg-[#0B6BA4] text-white px-10 py-4 rounded">
                                Next
                            </button>
                        </div>
                    ) : (
                        <button type="submit" className="bg-green-600 text-white px-10 py-4 rounded">
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </>
    );
};

export default SurveyForm;
