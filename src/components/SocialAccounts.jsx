import React, { useContext } from 'react'
import { SocialAccountContext } from '../contexts/SocialAccountContext'

const SocialAccounts = () => {

  const {socialAccounts} = useContext(SocialAccountContext);

  return (
    <div className="social-icons">
      {
        socialAccounts.map(account => <a className="social-icon" href={`${account?.webUrl}/${account?.userName}`} key={account?.id} target='_blank'><i className={account?.icon} /></a>)
      }
        </div>
  )
}

export default SocialAccounts