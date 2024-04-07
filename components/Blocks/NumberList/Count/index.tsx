'use client'

import { useState } from 'react'
import CountUp from 'react-countup'
import { InView } from 'react-intersection-observer'

interface CountType {
  number: number | null | undefined
  text?: string | null | undefined
  className?: string
}

const Count = ({ number, text, className }: CountType) => {
  const [focus, setFocus] = useState<boolean>(false)
  const visibleChangeHandler = (isVisible: boolean) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true)
      }
    }
  }

  return (
    <>
      {/*@ts-ignore*/}
      <CountUp start={focus ? 0 : undefined} end={number} duration={2}>
        {({ countUpRef }) => (
          <div className={`${className} space-x-4`}>
            <strong ref={countUpRef} />
            <InView as="span" onChange={(inView: any) => visibleChangeHandler(inView)}>
              {text && <span>{text}</span>}
            </InView>
          </div>
        )}
      </CountUp>
    </>
  )
}

export default Count
