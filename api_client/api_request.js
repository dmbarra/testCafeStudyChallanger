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
