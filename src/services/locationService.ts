import RestAPIClient from "./RestAPIClient";
import { ILocation, ISearchLocation } from "./typings/location";

class LocationService extends RestAPIClient {
  constructor() {
    super("location");
  }

  search = (query: string): Promise<ISearchLocation[]> => {
    if (!query) return Promise.resolve([]);
    return this.get(`/search?query=${query}`);
  };

  getLocation = (id: string): Promise<ILocation> => {
    return this.get(`/${id}`);
  };
}

export default new LocationService();
