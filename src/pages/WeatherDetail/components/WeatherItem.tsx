import { Collapse, Image, Row, Col } from "antd";
import React, { useMemo } from "react";
import { IConsolidatedWeather } from "services/typings/location";
import styled from "themes/styled";
import { numberFormatter } from "utils/formatters";
import { getDayOfWeek } from "utils/date";
import Box from "components/base/Box";
import { padStart } from "lodash";
import { getWeatherStateImageURL } from "../utils";
import { ReactComponent as WindIcon } from "../svgs/wind.svg";
import { ReactComponent as AirPressureIcon } from "../svgs/air-pressure.svg";
import { ReactComponent as HumidityIcon } from "../svgs/humidity.svg";

import Icon, { EyeOutlined, PercentageOutlined } from "@ant-design/icons";
import { useTheme } from "themes/useTheme";

const { Panel } = Collapse;

interface Props {
  data: IConsolidatedWeather;
}

const WeatherItem: React.FC<Props> = (props) => {
  const { data, ...rest } = props;

  const day = useMemo(() => `${getDayOfWeek(data?.applicable_date)}`, [
    data?.applicable_date,
  ]);

  const temp = useMemo(() => numberFormatter(data?.the_temp, 0), [
    data?.the_temp,
  ]);

  const minTemp = useMemo(() => numberFormatter(data?.min_temp, 0), [
    data?.min_temp,
  ]);

  const windSpeed = useMemo(() => numberFormatter(data?.wind_speed, 2), [
    data?.wind_speed,
  ]);

  const visibility = useMemo(() => numberFormatter(data?.visibility, 2), [
    data?.visibility,
  ]);

  const date = useMemo(() => {
    const date = new Date(data?.applicable_date).getDate();
    return padStart(`${date}`, 2, "0");
  }, [data?.applicable_date]);

  const stateIconURL = useMemo(
    () => getWeatherStateImageURL(data?.weather_state_abbr),
    [data?.weather_state_abbr]
  );

  const { themeVariables } = useTheme();

  return (
    <Panel
      key={data?.applicable_date}
      {...rest}
      header={
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Box width={80} fontWeight="bold">
              {day} {date}
            </Box>
            <Box ml={2}>
              <b>{temp}°</b>/{minTemp}°
            </Box>
            <Box ml={3}>
              <Image src={stateIconURL} width={30} preview={false} />
            </Box>
            <Box ml={2}>{data?.weather_state_name}</Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            width={160}
          >
            <Box mr={1}>
              <StyledIcon component={WindIcon} />
            </Box>

            <Box mr={1}>{data?.wind_direction_compass}</Box>
            <Box mr={1}>{windSpeed} mph</Box>
          </Box>
        </Box>
      }
    >
      <Box mt={2}>
        <Row gutter={[themeVariables.spacing_md, themeVariables.spacing_md]}>
          <Col lg={12} md={12} xs={24}>
            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <StyledIcon component={AirPressureIcon} />
              </Box>
              <span>
                <b>Air Pressure:</b> {data?.air_pressure} mbar
              </span>
            </Box>
          </Col>
          <Col lg={12} md={12} xs={24}>
            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <StyledIcon component={HumidityIcon} />
              </Box>
              <span>
                <b>Humidity:</b> {data?.humidity}%
              </span>
            </Box>
          </Col>
          <Col lg={12} md={12} xs={24}>
            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <EyeOutlined style={{ color: themeVariables.colors.primary }} />{" "}
              </Box>
              <span>
                <b>Visibility:</b> {visibility} miles
              </span>
            </Box>
          </Col>
          <Col lg={12} md={12} xs={24}>
            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <PercentageOutlined
                  style={{ color: themeVariables.colors.primary }}
                />
              </Box>
              <span>
                <b>Predictability:</b> {data?.predictability}%
              </span>
            </Box>
          </Col>
        </Row>
      </Box>
    </Panel>
  );
};

const StyledIcon = styled(Icon)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
`;

export default React.memo(WeatherItem);
