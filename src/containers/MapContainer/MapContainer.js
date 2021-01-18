import { React, Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import { ReactBingmaps } from 'react-bingmaps';

const containerStyle = {
    width: '100%',
    height: '500px',
    position: 'relative',
}

export class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pins: [],
        };

        this.AddPushPinOnClick = this.AddPushPinOnClick.bind(this);
    }
    AddPushPinOnClick(location) {

        //this.state.pins.push(location)
        var currenPins = { ...this.state.pins };
        var loc = [];
        loc.push(location.latitude);
        loc.push(location.longitude);
        currenPins = new Array();
        currenPins.push({
            "location": [13.0827, 80.2707], "option": { color: 'red' }, "addHandler": { "type": "click", callback: this.callBackMethod }
        });

        /*this.setState({
            pins: currenPins
        })*/
    }

    render() {
        return (
            <div className="map-container" style={containerStyle}>
                {/* <Map
                    google={this.props.google}
                    zoom={14}
                    center=
                    {
                        {
                            lat: 47.444,
                            lng: -122.176
                        }
                    }
                /> */}
                <ReactBingmaps
                    bingmapKey="Ap7yV6JvNe1end6H5u_eYQiKXQbBpC_U5EdQU6GNA_29KGHml2RlpObCYDw3EWMf"
                    getLocation={
                        { addHandler: "click", callback: this.AddPushPinOnClick }

                    }
                //pushPins={this.props.pins}
                >
                </ReactBingmaps>
            </div >
        );
    }
}
export default GoogleApiWrapper({

    apiKey: ("AIzaSyDEMqlqoAWwQ8WV2cdnhN-OfjjLvf9Xuw4")

})(MapComponent);