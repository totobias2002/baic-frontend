import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Textarea, Select, Button } from '../components/ui/index.js'
import { submitContact, selectContactStatus } from '../features/contact/index.js'
import { useToast } from '../toast/ToastContext.jsx'
import { dealers } from '../data/dealers.js'

const dealerOptions = [
  { value: '', label: 'Seleccione un concesionario' },
  ...dealers.map((d) => ({ value: d.id, label: `${d.name} - ${d.province.toUpperCase()}` }))
]

export default function ContactPage() {
  const dispatch = useDispatch()
  const status = useSelector(selectContactStatus)
  const { showToast } = useToast()
  const [form, setForm] = useState({ name: '', email: '', phone: '', dealerId: '', message: '' })

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(submitContact(form)).unwrap()
      showToast('Consulta enviada', 'success')
      setForm({ name: '', email: '', phone: '', dealerId: '', message: '' })
    } catch {
      showToast('No pudimos enviar tu consulta (el backend todavía no está disponible)', 'error')
    }
  }

  return (
    <div className="container contact-page">
      <h1>Envíenos su Consulta</h1>
      <p className="contact-page__lead">Nos comunicaremos a la brevedad.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <Input id="name" label="Nombre" value={form.name} onChange={set('name')} required />
        <Input id="email" label="Email" type="email" value={form.email} onChange={set('email')} required />
        <Input id="phone" label="Teléfono" type="tel" value={form.phone} onChange={set('phone')} />
        <Select id="dealerId" label="Concesionario" options={dealerOptions} value={form.dealerId} onChange={set('dealerId')} />
        <Textarea id="message" label="Mensaje" rows={5} value={form.message} onChange={set('message')} required />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
        </Button>
      </form>
    </div>
  )
}
