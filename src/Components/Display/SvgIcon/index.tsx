import * as React from 'react';
import { SvgProps } from './types';
import styled from '../../../Common/theming/themedComponents';

import Icons from './icons';

export interface SvgIconWrapperProps {
  className:string;
  color:string;
  height:any;
  width:any;
  position:string;
  dangerouslySetInnerHTML:any;
  dataFor?:string;
}

const SvgIconWrapper = styled.div`
    float: ${(props:SvgIconWrapperProps) => props.position ? props.position : "left"};
    display: inline;
    width: ${ (props:SvgIconWrapperProps) => props.width}px ;
    height:${ (props:SvgIconWrapperProps) => props.height}px ;
    margin: 1px;
    svg {
      fill:${ (props:SvgIconWrapperProps) => props.color} ;
    }
`
export type Props = SvgProps & React.HTMLProps<typeof SvgIcon>;

export default function SvgIcon({
  children,
  viewBox,
  iconName,
  className,
  color,
  position,
  dataFor,
  ...others
}: Props): JSX.Element {

  const height = others.height || 20 ;
  const width = others.height || 20 ;
   
  if(iconName) {
    const SvgIconElement = () => <SvgIconWrapper position={position} className={className} color={color} height={height} width={width}
      //{...others}
      dangerouslySetInnerHTML={{__html: Icons[iconName]}}
    ></SvgIconWrapper> ;

    if(dataFor != null) {
      return (
        <div style={{display:"inline-block"}} data-for={dataFor} data-tip={"tooltip"}>
          <SvgIconElement />
        </div>
        );
    } else {
      return (
          <SvgIconElement />
      );
    }
  } else {
    const defaultViewBox = `0 0 ${width} ${height}` ;
    const viewBoxProps = viewBox || defaultViewBox;

    return (
      <svg
        //{...others}
        fill={color}
        viewBox={viewBoxProps}>
        {children}
      </svg>);
  }
}
