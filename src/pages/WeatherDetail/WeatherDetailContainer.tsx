import React from "react";
import { useParams } from "react-router";
import { useLocation } from "./hooks";
import WeatherDetail from "./WeatherDetail";

interface Props {}

const WeatherDetailContainer: React.FC<Props> = (props) => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, dispatchGetLocation } = useLocation(id);
  return (
    <WeatherDetail
      data={data}
      loading={loading}
      onGetLocation={dispatchGetLocation}
      id={id}
    />
  );
};

export default WeatherDetailContainer;
