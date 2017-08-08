
import * as React from "react"
import './UpTile.css'
import './bootstrap-grid.css'
import * as $ from 'jquery'


import UpPanel from "../Panel/index"

export interface UpTileProps {
    Title?: string
}

export interface UpTileState {

}

export default class UpTile extends React.Component<UpTileProps, UpTileState>{
    public static defaultProps: UpTileProps = {
    };

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var style = {
            margin: 0,
            float: "left",
            width: "33%",
            minHeight: 1,
            paddingRight: 15,
            paddingLeft: 15,
            display: "block"
        }

        return <div style={null} className="col-md-4">
            <div className="box box-up box-home">
                <div className="box-header with-border">
                    <h3 className="box-title">
                        {this.props.Title}
                    </h3>
                    <div className="box-tools pull-right"><span data-toggle="tooltip" title="" className="badge bg-red" data-original-title="4 messages non lus">4</span><button data-widget="collapse" type="button" className="btn btn-box-tool"><i className="pe pe-7s-less"></i></button></div>
                </div>

                <div className="box-body" style={{}}>
                    {this.props.children}
                </div>
                <div className="box-footer text-center">
                    <a href="#" className="col-md-10">Voir tous les messages</a>
                    <div className="btnAjoutMessage col-md-2"><a href="#"><i className="pe pe-7s-plus fa-2x"></i></a></div>
                </div>
            </div>
        </div>
    }
}