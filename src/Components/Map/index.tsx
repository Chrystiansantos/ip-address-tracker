import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { ChangeView } from './ChangedView';

interface IMapProps {
  position: LatLngExpression;
  visibleMarker: boolean;
}

export function Map({ position, visibleMarker }: IMapProps) {

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <ChangeView center={position} zoom={13}></ChangeView>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {visibleMarker && <Marker position={position} />}
    </MapContainer>
  );
}