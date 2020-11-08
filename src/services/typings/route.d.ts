export interface IRouteConfig {
    routes?: IRouteConfig[];
    name?: string;
    key?: React.Key;
    location?: Location;
    component?: React.ComponentType<any>;
    path?: string | string[];
    exact?: boolean;
    strict?: boolean;
    render?: (props: any) => React.ReactNode;
  }