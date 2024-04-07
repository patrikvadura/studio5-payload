import React from 'react'
import { Slide, SliderProvider } from '@faceless-ui/slider'

import { Page } from '../../../payload-types'
import SliderContent from './SliderContent'

type Slide = {
  title: string
  subtitle: string
  richText: string
  media: any
}

type Props = Extract<Page['layout'][0], { blockType: 'slider' }> & {
  slides: Slide[]
}
export const Slider: React.FC<
  Props & {
    id?: string
  }
> = ({ slides }) => {
  return (
    <>
      <SliderProvider slidesToShow={1} scrollSnap={true} autoPlay={true} autoplaySpeed={5000}>
        <SliderContent slides={slides} />
      </SliderProvider>
    </>
  )
}
