import React from 'react'

import { Page } from '../../../payload-types'
import { CMSLink } from '../../Link'
import { Media } from '../../Media'
import RichText from '../../RichText'

import classes from './index.module.scss'

export const HighImpactHero: React.FC<Page['hero']> = ({
  title,
  subtitle,
  richText,
  media,
  links,
}) => {
  return (
    <div className={`${classes.hero} flex justify-center items-center`}>
      <div className={classes.background}>
        {media && typeof media === 'object' && <Media resource={media} priority />}
      </div>
  <div className={classes.wrapper}>
        <div>
          <div className="flex flex-row items-center text-lg leading-loose mb-0">
            <svg
              width="120"
              height="12"
              viewBox="0 0 134 12"
              fill="#101010"
              className="pr-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z" />
            </svg>
            {subtitle}
          </div>

          <h1 className={classes.title}>
            {title}
          </h1>

          <div className="mt-8 md:mt-12 md:pl-[52%]">
            <RichText className="mb-12" content={richText} />

            {Array.isArray(links) && links.length > 0 && (
            <div className="p-0 md:p-3 -m-3 flex justify-center md:justify-start md:inline-block">
                {links.map(({ link }, i) => {
                  return (
                    <div key={i}>
                      <CMSLink className="!text-primary" {...link} />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
