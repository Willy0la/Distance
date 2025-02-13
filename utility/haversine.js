class Haversine_Formular {
    constructor(earthRadius = 6371) {
      this.earthRadius = earthRadius;
    }
  
    deg2radius = (degree) => {
      return degree * (Math.PI / 180);
    };
  
    disTrav = (lat1, lat2, lon1, lon2) => {
      // converting lat and lon to radians
      const lat_1_radian = this.deg2radius(lat1);
      const lat_2_radian = this.deg2radius(lat2);
      const lon_1_radian = this.deg2radius(lon1);
      const lon_2_radian = this.deg2radius(lon2);
  
      // difference between lat and lon
  
      const difLat = lat_1_radian - lat_2_radian;
      const difLon = lon_1_radian - lon_2_radian;
  
      const a =
        Math.sin(difLat / 2) ** 2 +
        Math.cos(lat_1_radian) *
          Math.cos(lat_2_radian) *
          Math.sin(difLon / 2) ** 2;
  
      // calculating the angular distance
  
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
      return c * this.earthRadius;
    };
  }
  
  export default Haversine;