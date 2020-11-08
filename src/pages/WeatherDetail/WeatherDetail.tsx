import { Collapse } from "antd";
import PageHeaderWrapper from "components/PageHeaderWrapper";
import React, { useCallback, useEffect, useMemo } from "react";
import { ILocation } from "services/typings/location";
import WeatherItem from "./components/WeatherItem";
import WeatherItemPlaceholder from "./components/WeatherItemPlaceholder";
import useQueryParam from "hooks/useQueryParam";
interface Props {
  data: ILocation | undefined;
  loading?: boolean;
  onGetLocation: (id: string) => void;
  id: string;
}

const WeatherDetail: React.FC<Props> = (props) => {
  const { onGetLocation, id, data, loading } = props;

  const [date, setDate] = useQueryParam({ key: "d", method: "replace" });

  const handleCollapseChange = useCallback((key: any) => {
    setDate(key.join(','));
  }, [setDate]);

  const activeKeys = useMemo(() => date?.split(','), [date]);

  useEffect(() => {
    onGetLocation(id);
  }, [onGetLocation, id]);

  const fetched = !!data;

  const slicedWeather = useMemo(
    () =>
      !data?.consolidated_weather?.length ||
      data?.consolidated_weather?.length < 5
        ? data?.consolidated_weather
        : data?.consolidated_weather?.slice(0, 5),
    [data]
  );

  return (
    <PageHeaderWrapper
      title={data?.title}
      backVisible
      loading={loading && !fetched}
    >
      <Collapse
        onChange={handleCollapseChange}
        activeKey={activeKeys}
        bordered={false}
        expandIconPosition={"right"}
      >
        {loading && !fetched ? (
          <>
            <WeatherItemPlaceholder />
            <WeatherItemPlaceholder />
            <WeatherItemPlaceholder />
            <WeatherItemPlaceholder />
            <WeatherItemPlaceholder />
          </>
        ) : (
          slicedWeather?.map((weather) => (
            <WeatherItem data={weather} key={weather?.applicable_date} />
          ))
        )}
      </Collapse>
    </PageHeaderWrapper>
  );
};

export default React.memo(WeatherDetail);
