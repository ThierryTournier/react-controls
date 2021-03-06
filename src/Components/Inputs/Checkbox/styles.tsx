// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import remStringFromPX from '../../../Common/utils'
import { UpCheckboxStyledProps } from './UpCheckBox'
import ThemeColorMap from '../../../Common/theming/index'
import SvgIcon from '../../Display/SvgIcon'
import * as classNames from 'classnames'
import {CommonCheckableStyle} from '../_Common/Styled' 
import { ThemeInterface } from "../../../Common/theming/types";

const BaseCheckBox: React.StatelessComponent<UpCheckboxStyledProps> = (props) => {
    const { children, checked, className, text, name, value, iconName, onChange } = props;

    return (
      <label className={classNames("up-control", "up-checkbox", className)}>
        <input checked={checked} onChange={onChange} name={name} type="checkbox" value={value} />
        <span className="up-control-indicator"></span>
        {text}
      </label>
    )
}

export const StyledCheckBox = styled<UpCheckboxStyledProps>(BaseCheckBox)`
${(props: UpCheckboxStyledProps) => CommonCheckableStyle(props)}
`

export const CheckboxGroup = styled.div`
  margin-top:8px;
`