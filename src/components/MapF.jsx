import React from "react";
import styled from "styled-components";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
// import Map, {
//   NavigationControl,
//   GeolocateControl,
//   FullscreenControl,
// } from "react-map-gl";
// import { useState } from "react";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFqZXNoYmh1eWFuIiwiYSI6ImNsYXo2NmZ5eDBqdXYzb21veDdzeHl0N3oifQ.1FLylXhLiVDAg2635dv0Tw";

const MapF = (props) => {
  // console.log(props);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v9",
      center: [99.29011, 39.39172],
      zoom: 3,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });
    map.addControl(directions, 'top-left');

    if (props.pickupCordinates) {
      addToMap(map, props.pickupCordinates);
    }

    if (props.dropoffCordinates) {
      addToMap(map, props.dropoffCordinates);
    }

    if (props.pickupCordinates && props.dropoffCordinates) {
      map.fitBounds([props.dropoffCordinates, props.pickupCordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCordinates, props.dropoffCordinates]);

  const addToMap = (map, cordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(cordinates).addTo(map);
  };

  return <Map1 id="map"></Map1>;
};

const Map1 = styled.div`
  /* background-color: red; */
  flex: 1;
  height: 50%;
`;

export default MapF;
