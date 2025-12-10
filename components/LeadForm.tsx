import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, CheckCircle } from 'lucide-react';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose, source }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-2xl transition-all border-t-4 border-europe-gold">
                <div className="flex justify-between items-start mb-6">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-serif font-bold text-europe-navy"
                  >
                    {step === 'form' ? 'Start Your Journey' : 'Thank You!'}
                  </Dialog.Title>
                  <button onClick={handleClose} className="text-gray-400 hover:text-europe-navy transition-colors">
                    <X size={24} />
                  </button>
                </div>

                {step === 'form' ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-gray-600 mb-4 text-sm">
                      Share your details, and our expert counselors will reach out with a personalized plan. No spam, just guidance.
                    </p>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-europe-gold focus:ring-2 focus:ring-europe-gold/20 outline-none transition-all" placeholder="e.g. Jane Doe" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-europe-gold focus:ring-2 focus:ring-europe-gold/20 outline-none transition-all" placeholder="jane@example.com" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-europe-gold focus:ring-2 focus:ring-europe-gold/20 outline-none transition-all" placeholder="+1 234 567 890" />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Country of Interest</label>
                      <select id="interest" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-europe-gold focus:ring-2 focus:ring-europe-gold/20 outline-none transition-all bg-white">
                        <option>Germany</option>
                        <option>Poland</option>
                        <option>France</option>
                        <option>Czech Republic</option>
                        <option>Other / Unsure</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-europe-navy text-white font-bold py-3 rounded-lg hover:bg-europe-blue transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
                      >
                        Get Free Consultation
                      </button>
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-4">
                      By submitting, you agree to our friendly privacy policy. We protect your data.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-europe-navy mb-2">Request Received</h4>
                    <p className="text-gray-600 mb-6">
                      We have received your details. One of our senior counselors will contact you within 24 hours via WhatsApp or Email.
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-gray-100 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LeadForm;