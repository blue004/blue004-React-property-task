import { Map, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';

class Googlemaprender extends Component {
    render() {
         const style = this.props.style;
        return (
            <Map
                zoom={16}
                google={this.props.google}
                initialCenter={{  lat: 13.082680,
                lng: 80.270721, }}
                containerStyle={style}
                >         
            </Map>
          
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCA_KEgg4J5A3iQp435wTIGt5RR7Gb6fos')
})(Googlemaprender);