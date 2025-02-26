'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const formData = JSON.stringify({ name, message });
  
    try {
      
      const response = await fetch('/api/index.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setShowThankYou(true);
        setTimeout(() => {
          setName('');
          setMessage('');
          setShowThankYou(false);
          router.push('/'); 
        }, 3000);
      } else {
        console.error('Failed to submit form data');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <section className="text-secondary">
        <h1 className="text-3xl text-center">Contact Me</h1>
        <p className="p-2 text-2xl text-center">
          Feel free to contact me on any of the platforms below or by using the ocntact form to send me an email directly.
        </p>

        <form onSubmit={handleSubmit} className="p-4 bg-primary flex flex-col gap-4 w-5/6 m-auto rounded-lg border">

          <label htmlFor="name" className="block">
              Name:
          </label>

          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="border rounded-lg text-primary h-12 p-2" />

          <label htmlFor="message" className="block">
            Message:
          </label>

          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-lg text-primary p-2 h-32"
          />
        
          <button type="submit" className="bg-blue-500 text-white rounded-lg h-12 text-3xl">
            Submit
          </button>

        </form>

        {showThankYou && (
          <>
            <h1>Thank you for submitting</h1>
            <p>I will respond to your inquiry promptly.</p>
          </>
        )}

      </section>
    </>
  )
}

  //const [submitted, setSubmitted] = useState(false);
  //setSubmitted(true);