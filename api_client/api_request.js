const host = "http://localhost:3000";

export function makeGetToListDevices(t) {
  return t.request({ url: host + "/devices", method: "get" });
}
