import * as React from 'react';

export interface UpContextMenuItemDividerProps {
    size?:number;
    color?:string;
}

export interface UpContextMenuItemDividerState {
    
}

export default class UpContextMenuItemDivider extends React.PureComponent<UpContextMenuItemDividerProps, UpContextMenuItemDividerState> {
    
    public static defaultProps = {
        size: 1,
        color:"black"
    };

    render() {
        const { size, color } = this.props;
        
        return (
            <div style={{color:color, height:size, backgroundColor:color, display:'inline-block', margin:"6px 0",width:"100%"}}></div>
        );
    }
}