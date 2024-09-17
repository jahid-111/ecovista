// import "server-only";  //    <----- Avoid CORS

export const getLocations = async () => {
  const location = await import("../data/location.json");
  return location;
};

export const getLocationByName = async (location) => {
  const { default: locationData } = await import("../data/location.json");
  if (!location) return null;

  const found = locationData[0].find(
    (item) => item.location.toLocaleLowerCase() === location.toLocaleLowerCase()
  );
  return found || {};
};
