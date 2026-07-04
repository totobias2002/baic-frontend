import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Textarea, Button } from '../components/ui/index.js'
import { submitContact, selectContactStatus } from '../features/contact/index.js'
import { useToast } from '../toast/ToastContext.jsx'

export default function ContactPage() {
  const dispatch = useDispatch()
  const status = useSelector(selectContactStatus)
  const { showToast } = useToast()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(submitContact(form)).unwrap()
      showToast('Consulta enviada', 'success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      showToast('No pudimos enviar tu consulta (el backend todavía no está disponible)', 'error')
    }
  }

  return (
    <div className="container contact-page">
      <h1>Contacto</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <Input id="name" label="Nombre" value={form.name} onChange={set('name')} required />
        <Input id="email" label="Email" type="email" value={form.email} onChange={set('email')} required />
        <Textarea id="message" label="Mensaje" rows={5} value={form.message} onChange={set('message')} required />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
        </Button>
      </form>
    </div>
  )
}
