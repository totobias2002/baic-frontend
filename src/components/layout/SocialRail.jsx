import { ChevronUpIcon, InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon, WhatsappIcon } from '../icons/index.js'
import { socialLinks } from '../../data/dealers.js'

export default function SocialRail() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <div className="social-rail">
        <button className="social-rail__item social-rail__top" onClick={scrollTop} aria-label="Volver arriba">
          <ChevronUpIcon size={18} />
        </button>
        <a className="social-rail__item" href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramIcon size={18} />
        </a>
        <a className="social-rail__item" href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
          <FacebookIcon size={18} />
        </a>
        <a className="social-rail__item" href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="Youtube">
          <YoutubeIcon size={18} />
        </a>
        <a className="social-rail__item" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
          <LinkedinIcon size={18} />
        </a>
      </div>
      <a className="whatsapp-float" href={socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsappIcon size={26} />
      </a>
    </>
  )
}
