import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitContact, selectContactStatus } from '../features/contact/index.js'
import { useToast } from '../toast/ToastContext.jsx'
import { contactBg } from '../data/contactBg.js'

export default function ContactPage() {
  const dispatch = useDispatch()
  const status = useSelector(selectContactStatus)
  const { showToast } = useToast()
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(submitContact(form)).unwrap()
      showToast('Consulta enviada', 'success')
      setForm({ name: '', phone: '', email: '', message: '' })
    } catch {
      showToast('No pudimos enviar tu consulta (el backend todavía no está disponible)', 'error')
    }
  }

  return (
    <section className="contact-hero" style={contactBg ? { backgroundImage: `url(${contactBg})` } : undefined}>
      {!contactBg && <div className="ph">Foto BAIC BJ30</div>}
      <div className="contact-hero__overlay" />
      <div className="contact-hero__inner">
        <h1>Envíenos su Consulta</h1>
        <p>Nos comunicaremos a la brevedad.</p>
        <form className="service-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" value={form.name} onChange={set('name')} required />
          <input type="tel" placeholder="Teléfono" value={form.phone} onChange={set('phone')} required />
          <input type="email" placeholder="Email" value={form.email} onChange={set('email')} required />
          <textarea placeholder="Mensaje" rows={5} value={form.message} onChange={set('message')} required />
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : 'ENVIAR'}
          </button>
        </form>
      </div>
    </section>
  )
}
