import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC2_6cHHogy3l3GxGB-bJzdy9gi29g92sg&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <div style={{ height: '700px' }} />,
        mapElement: <div style={{ height: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap
 )((props) => 
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 41.6588036, lng: -91.5380813 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 41.6588036, lng: -91.5380813 }} onClick={props.onMarkerClick}/> }
    </GoogleMap>
  )


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMarkerShown: false
        }
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 500)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }
    
     render(){
         return (
             <div>
                 <MyMapComponent 
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                 />
             </div>
         );
     }
}

export default Map;