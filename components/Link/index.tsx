import React from 'react'
import Link from 'next/link'

import { Page } from '../../payload-types'
import { Button } from '../Button'

type CMSLinkType = {
  type?: ('reference' | 'custom') | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages'
    value: string | Page
  } | null
  url?: string | null | undefined
  label: string
  appearance?: ('default' | 'hero' | 'dynamic' | 'arrowOnly' | 'primary' | 'secondary') | null
  children?: React.ReactNode
  className?: string
}

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  url,
  newTab,
  reference,
  label,
  appearance,
  children,
  className,
}) => {
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `/${reference.value.slug}`
      : url

  if (!appearance) {
    const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}

    if (type === 'custom') {
      return (
        // @ts-ignore
        <a href={url} {...newTabProps} className={className}>
          {label && label}
          {children && children}
        </a>
      )
    }

    if (href) {
      return (
        <Link href={href} className={className} {...newTabProps}>
          {label && label}
          {children && children}
        </Link>
      )
    }
  }

  const buttonProps = {
    newTab,
    href,
    appearance,
    label,
  }

  return <Button className={className} {...buttonProps} el="link" />
}
