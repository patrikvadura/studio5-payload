import React from 'react'
import { Slide, SliderButton, SliderTrack, SliderProgress, useSlider } from '@faceless-ui/slider'
import { Icon } from '@iconify/react'

import { Media } from '../../Media'
import RichText from '../../RichText'

import classes from './index.module.scss'

const SliderContent = ({ slides }) => {
  const { currentSlideIndex } = useSlider()

  return (
    <>
      <SliderTrack className={classes.track}>
        {slides.map((slide, index) => (
          <Slide index={index} key={index}>
            <div className={classes.about}>
              {slide.media && typeof slide.media === 'object' && (
                <Media resource={slide.media} className={classes.background} priority />
              )}
              <div className="container">
                <div className={classes.textWrapper}>
                  <div className={classes.subtitle}>{slide.subtitle}</div>
                  <h2 className={classes.title}>{slide.title}</h2>
                  <RichText className="mb-0" content={slide.richText} />
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </SliderTrack>

      <div className="container">
        <div className={classes.sliderControll}>
          <div className={`sliderPagination ${classes.sliderPagination}`}>
            <span>{`${currentSlideIndex + 1}/${slides.length}`}</span>
          </div>

          <SliderButton direction="prev">
            <div style={{ cursor: 'pointer' }} className={`${classes.sliderPrev} sliderPrev`}>
              <Icon icon="material-symbols-light:arrow-left-alt" className="text-5xl" />
            </div>
          </SliderButton>

          <SliderButton direction="next">
            <div style={{ cursor: 'pointer' }} className={`${classes.sliderNext} sliderNext`}>
              <Icon icon="material-symbols-light:arrow-right-alt" className="text-5xl" />
            </div>
          </SliderButton>
        </div>
      </div>

      <SliderProgress
        className={classes.progress}
        indicator={{
          className: classes.progressIndicator,
        }}
      />
    </>
  )
}

export default SliderContent
