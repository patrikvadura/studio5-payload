'use client'

import React, { ElementType } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

import { useBackgroundColor } from '../BackgroundColor'

import classes from './index.module.scss'

export type Props = {
  label?: string
  appearance?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'hero'
    | 'dynamic'
    | 'arrowOnly'
    | 'none'
    | null
  el?: any
  onClick?: () => void
  href?: string | null
  newTab?: boolean | null
  className?: string | null
}

export const Button: React.FC<Props> = ({
  el = 'button',
  label,
  newTab,
  href,
  appearance,
  className: classNameFromProps,
}) => {
  const backgroundColor = useBackgroundColor()
  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  const className = [
    classNameFromProps,
    classes[`appearance--${appearance}`],
    classes[`${appearance}--${backgroundColor}`],
    classes.button,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <div className={classes.content}>
      <span className={classes.label}>{label}</span>
    </div>
  )

  if (el === 'link') {
    return (
      <Link {...newTabProps} href={href || ''} className={className}>
        {appearance === 'dynamic' ? (
          <>
            <span>{content}</span>
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                fill="currentColor"
              />
            </svg>
          </>
        ) : appearance === 'arrowOnly' ? (
          <>
            <span>
              <Icon icon="material-symbols-light:arrow-outward" />
            </span>
            <span>
              <Icon icon="material-symbols-light:arrow-outward" />
            </span>
          </>
        ) : (
          <span>{content}</span>
        )}
      </Link>
    )
  }

  const Element: ElementType = el

  return (
    <Element href={href} className={className} {...newTabProps}>
      {content}
    </Element>
  )
}
