import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const tFooter = useTranslations('Footer')
  const tHeader = useTranslations('Header')
  const tHome = useTranslations('Home')

  return (
    <footer>
      <div className="container">
        <Link href="/" className="logo-font">
          {tHeader('app-name')}
        </Link>
        <span className="attribution">{tHome('description')}</span>
        <span className="attribution">{tFooter('licence')}</span>
      </div>
    </footer>
  )
}
export default Footer
