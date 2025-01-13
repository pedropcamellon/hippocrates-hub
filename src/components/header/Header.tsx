'use client'

import { Link } from '@/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LocaleSelector from '@/components/common/LocaleSelector'
import { useAuth } from '@/components/common/AuthProvider'

const Header = () => {
  const t = useTranslations('Header')
  const { currentUser } = useAuth()

  return (
    <nav className="navbar navbar-light">
      <div className="container py-2 flex justify-between">
        <Link href={'/'} className="navbar-brand my-auto text-xl font-semibold">
          {t('app-name')}
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link href={'/'} className="nav-link">
              {t('home')}
            </Link>
          </li>
          {currentUser ? (
            <>
              <li className="nav-item">
                <Link href={'/editor'} className="nav-link">
                  <i className="ion-compose"></i>&nbsp;{t('new-post')}
                </Link>
              </li>
              <li className="nav-item">
                <Link href={'/settings'} className="nav-link">
                  <i className="ion-gear-a"></i>&nbsp;{t('settings')}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href={`/profile/@${currentUser.username}`}
                  className="nav-link"
                >
                  <Image
                    src={currentUser.image || ''}
                    alt={currentUser.username}
                    width={26}
                    height={26}
                    className="user-pic"
                  />
                  {currentUser.username}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link href={'/login'} className="nav-link">
                  {t('sign-in')}
                </Link>
              </li>
              <li className="nav-item">
                <Link href={'/register'} className="nav-link">
                  {t('sign-up')}
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <LocaleSelector />
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
