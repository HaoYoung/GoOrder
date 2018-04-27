import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from 'react-google-maps';
//const FaAnchor = require("react-icons/lib/fa/anchor");

const MyMapComponent = compose(
	withStateHandlers(() => ({
	    isOpen: false,
	  }), {
	    onToggleOpen: ({ isOpen }) => () => ({
	      isOpen: !isOpen,
	    })
	  }),
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC2_6cHHogy3l3GxGB-bJzdy9gi29g92sg&v=3.exp&libraries=geometry,drawing,places,callback',
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <div style={{ height: '700px' }} />,
        mapElement: <div style={{ height: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap
 )((props) => 
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 41.6596790, lng: -91.5367510 }}
    >
    {props.markers.map(marker => (
            <Marker
              key={marker.r_id}
              position={{ lat: marker.r_latitude, lng: marker.r_longitude }}
              onClick={props.onToggleOpen}
            >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>Hello There!</div>
            </InfoWindow>}
          </Marker>
          ))}
    </GoogleMap>
  );


class Map extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isMarkerShown: false
        }
    }
	
	componentWillMount() {
		this.setState({ markers: [] })
	}

    componentDidMount() {
    	const url = "https://go-order-api.herokuapp.com/get_all_r_addr";

    	    fetch(url)
    	      .then(res => res.json())
    	      .then(data => {
    	        this.setState({ markers: data });
    	      });
    }
    
     render(){
         return (
                 <MyMapComponent 
                 	markers={this.state.markers}
                 />
         );
     }
}
export default Map;