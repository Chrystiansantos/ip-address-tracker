import { LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";

interface IChangeView {
  center: LatLngExpression,
  zoom: number
}

export function ChangeView({ center, zoom }: IChangeView) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}