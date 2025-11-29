"use client";

import { FormEvent, useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus('error');
      setStatusMessage('Nama, email, dan pesan wajib diisi.');
      return;
    }

    try {
      setSubmitting(true);
      setStatus('idle');
      setStatusMessage('');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Gagal mengirim pesan.');
      }

      setStatus('success');
      setStatusMessage('Pesan Anda berhasil dikirim. Tim BSB City akan segera menghubungi Anda.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      setStatus('error');
      setStatusMessage('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti atau hubungi via WhatsApp/telepon.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-6 md:p-7 shadow-[0_18px_70px_rgba(15,23,42,0.85)] backdrop-blur-sm">
      <h2 className="text-base md:text-lg font-semibold text-slate-50 mb-4">Kirim Pesan</h2>
      <form className="space-y-4 text-sm md:text-base" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label htmlFor="name" className="block text-slate-200 text-xs md:text-sm">
            Nama Lengkap
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            placeholder="Masukkan nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="block text-slate-200 text-xs md:text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-slate-200 text-xs md:text-sm">
            Nomor Telepon / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            placeholder="08xxxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="block text-slate-200 text-xs md:text-sm">
            Pesan
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 resize-none"
            placeholder="Tulis pertanyaan atau kebutuhan Anda di sini"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
        {statusMessage && (
          <p
            className={`text-[0.7rem] mt-1 ${
              status === 'success' ? 'text-emerald-300' : status === 'error' ? 'text-red-400' : 'text-slate-400'
            }`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
