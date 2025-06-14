import React from 'react';
import { LocalesProps } from '../shared/types.js';
declare const Picker: ({ locales, presets, hideHue, hideInputs, hidePresets, hideOpacity, hideEyeDrop, hideControls, hideInputType, hideColorGuide, hidePickerSquare, hideGradientType, hideGradientStop, hideGradientAngle, hideColorTypeBtns, hideAdvancedSliders, hideGradientControls, }: PickerProps) => React.JSX.Element;
export default Picker;
type PickerProps = {
    hideControls?: boolean;
    hideInputs?: boolean;
    hidePresets?: boolean;
    hideOpacity?: boolean;
    hideHue?: boolean;
    presets?: string[];
    hideEyeDrop?: boolean;
    hideAdvancedSliders?: boolean;
    hideColorGuide?: boolean;
    hideInputType?: boolean;
    hideColorTypeBtns?: boolean;
    hideGradientType?: boolean;
    hideGradientAngle?: boolean;
    hideGradientStop?: boolean;
    hideGradientControls?: boolean;
    locales?: LocalesProps;
    hidePickerSquare?: boolean;
};
