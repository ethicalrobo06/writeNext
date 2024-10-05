'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from 'react-share'

interface ShareButtonProps {
  url: string
  title: string
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
  return (
    <div className="flex space-x-2">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      {/* Add more share buttons for other platforms as needed */}
    </div>
  )
}

export default ShareButton
