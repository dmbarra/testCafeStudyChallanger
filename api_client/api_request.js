import { t } from "testcafe";

const host = "http://localhost:3000";

export function makeGetToListDevices() {
  return t.request({ url: host + "/devices", method: "get" });
}

export async function makeAUpdateOnFirstDevice(body) {
  const result = await t.request({ url: host + "/devices", method: "get" });

  return await t.request({
    url: host + "/devices/" + result.body[0].id,
    method: "put",
    body: body,
  });
}

export async function makeADeleteOnLastDevice() {
  const result = await t.request({ url: host + "/devices", method: "get" });
  const theLastDevice = result.body[result.body.length - 1];

  return [
    await t.request({
      url: host + "/devices/" + theLastDevice.id,
      method: "delete",
    }),
    theLastDevice,
  ];
}
