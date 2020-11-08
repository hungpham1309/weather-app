import React from "react";
import {
  ArrowLeftOutlined,
  HomeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Result } from "antd";

interface IProps {}

interface IState {
  error: any;
  eventId?: string;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { error: null, eventId: undefined };
  }

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    if (process.env.NODE_ENV !== "development") {
      
    }
  }

  render() {
    const { error } = this.state;

    if (!!error) {
      return (
        <Result
          status="error"
          title="Oops!"
          subTitle={
            process.env.NODE_ENV === "development" ? (
              <code>{error?.message}</code>
            ) : (
              "Something went wrong. Please try again!!!"
            )
          }
          extra={[
            <Button
              icon={<ArrowLeftOutlined />}
              type="default"
              onClick={() => window.history.back()}
              key="back"
            >
              Go Back
            </Button>,
            <Button
              icon={<ReloadOutlined />}
              type="default"
              onClick={() => window.location.reload()}
              key="reload"
            >
              Try Again
            </Button>,
            <Button
              icon={<HomeOutlined />}
              type="default"
              onClick={() => {
                window.location.href = "/";
              }}
              key="home"
            >
              Home
            </Button>,
          ]}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
