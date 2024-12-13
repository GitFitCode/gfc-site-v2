import { supabase } from '../../services/supabaseClient';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function ContactSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    confirmEmail: '',
    phone: '',
    budget: '',
    synopsis: '',
    documentation: false,
    designs: false,
    codeBase: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(5); // Countdown timer for redirect

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Form validation
  const isValidForm = () => {
    return formData.name && formData.email && formData.confirmEmail && formData.phone && formData.budget;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation before submitting
    if (!isValidForm()) {
      setError('Please fill out all required fields');
      return;
    }

    if (formData.email !== formData.confirmEmail) {
      setError('Email addresses do not match');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Insert form data into Supabase table
      const { error } = await supabase
        .from('contact_form_submissions')
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            confirm_email: formData.confirmEmail,
            phone: formData.phone,
            budget: formData.budget,
            synopsis: formData.synopsis,
            documentation: formData.documentation,
            designs: formData.designs,
            code_base: formData.codeBase,
          },
        ]);

      if (error) throw error;

      // Show thank you message and start countdown for redirection
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Countdown effect for redirecting to home page after submission
  useEffect(() => {
    if (isSubmitted && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Clear interval and navigate to home when countdown ends
      if (countdown === 1) {
        navigate('/');
      }

      return () => clearInterval(timer);
    }
  }, [isSubmitted, countdown, navigate]);

  return (
    <div className="flex flex-col items-center justify-between px-4 lg:px-20 gap-8 py-16 pt-24">
      {/* Contact Form Section */}
      <div className="w-full lg:w-2/3 flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold py-8">Let’s Start Building Together</h2>
          {!isSubmitted && (
            <p className="text-sm lg:text-base mt-2">
              Have a project in mind or need advice on your next big idea? 
              Please fill out the basics in the form below to get in touch with us.
              We would love to hear from you! 
              If you don't like filling out forms, just send an email to <a href='mailto:dom@gitfitcode.com' className="border-b-gfc-accent box-border m-0 min-w-0 inline-block border-b text-gfc-accent font-bold">dom@gitfitcode.com</a> to start discussing your project with our team!
            </p>
          )}
        </div>

        {isSubmitted ? (
          <div className="text-center">
            <p className="text-gfc-accent text-lg font-semibold mb-4">Thank you for your message! We'll get back to you soon.</p>
            <p className="text-gray-700">
              Redirecting you to the home page in <strong>{countdown}</strong> seconds.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Name and Company */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-semibold">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold">Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Company Name"
                />
              </div>
            </div>

            {/* Email and Confirm Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold">Confirm Email</label>
                <input
                  name="confirmEmail"
                  type="email"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            {/* Phone and Project Budget */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-semibold">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="(555) 000-0000"
                  required
                />
                <small className="text-gray-500 text-xs">Include your phone # so we can reach you ASAP!</small>
              </div>
              <div className="flex-1">
                <label className="block font-semibold">Total Project Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-3.5 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>Select your budget</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $150,000">$100,000 - $150,000</option>
                  <option value="$150,000+">$150,000+</option>
                </select>
              </div>
            </div>

            {/* Project Synopsis */}
            <div>
              <label className="block font-semibold">Project Synopsis</label>
              <textarea
                name="synopsis"
                value={formData.synopsis}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Tell us a little about your project"
                rows={3}
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="documentation"
                  checked={formData.documentation}
                  onChange={handleChange}
                  className="mr-2"
                />
                I have existing documentation.
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="designs"
                  checked={formData.designs}
                  onChange={handleChange}
                  className="mr-2"
                />
                I have existing designs.
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="codeBase"
                  checked={formData.codeBase}
                  onChange={handleChange}
                  className="mr-2"
                />
                I have an existing code base.
              </label>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-gfc-accent text-white font-medium rounded-md hover:bg-gfc-primary-100  hover:text-gfc-primary transition"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}