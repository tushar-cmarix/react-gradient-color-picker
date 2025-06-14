import React from 'react'
import Hue from './Hue.js'
import Inputs from './Inputs.js'
import Square from './Square.js'
import Opacity from './Opacity.js'
import Presets from './Presets.js'
import Controls from './Controls.js'
import { usePicker } from '../context.js'
import GradientBar from './GradientBar.js'
import { LocalesProps } from '../shared/types.js'

const Picker = ({
  locales,
  presets,
  hideHue,
  hideInputs,
  hidePresets,
  hideOpacity,
  hideEyeDrop,
  hideControls,
  hideInputType,
  hideColorGuide,
  hidePickerSquare,
  hideGradientType,
  hideGradientStop,
  hideGradientAngle,
  hideColorTypeBtns,
  hideAdvancedSliders,
  hideGradientControls,
}: PickerProps) => {
  const { isGradient, pickerIdSuffix } = usePicker()

  return (
    <div
      style={{ userSelect: 'none' }}
      id={`rbgcp-color-picker${pickerIdSuffix}`}
    >
      {!hidePresets && <Presets presets={presets} />}
      {!hideControls && (
        <Controls
          locales={locales}
          hideEyeDrop={hideEyeDrop}
          hideInputType={hideInputType}
          hideColorGuide={hideColorGuide}
          hideGradientType={hideGradientType}
          hideGradientStop={hideGradientStop}
          hideColorTypeBtns={hideColorTypeBtns}
          hideGradientAngle={hideGradientAngle}
          hideAdvancedSliders={hideAdvancedSliders}
          hideGradientControls={hideGradientControls}
        />
      )}
      {isGradient && <GradientBar />}
      {!hideOpacity && <Opacity />}
      {!hideHue && <Hue />}
      {!hideInputs && <Inputs />}
      {!hidePickerSquare && <Square />}
    </div>
  )
}

export default Picker

type PickerProps = {
  hideControls?: boolean
  hideInputs?: boolean
  hidePresets?: boolean
  hideOpacity?: boolean
  hideHue?: boolean
  presets?: string[]
  hideEyeDrop?: boolean
  hideAdvancedSliders?: boolean
  hideColorGuide?: boolean
  hideInputType?: boolean
  hideColorTypeBtns?: boolean
  hideGradientType?: boolean
  hideGradientAngle?: boolean
  hideGradientStop?: boolean
  hideGradientControls?: boolean
  locales?: LocalesProps
  hidePickerSquare?: boolean
}
