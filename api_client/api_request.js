import { t } from "testcafe";
import config from "../.testcaferc.cjs";

export function makeGetToListDevices() {
  return t.request({
    url: config.baseUrlApi + "/devices",
    method: "get",
  });
}

export async function makeAUpdateOnFirstDevice(body) {
  const result = await t.request({
    url: config.baseUrlApi + "/devices",
    method: "get",
  });

  return await t.request({
    url: config.baseUrlApi + "/devices/" + result.body[0].id,
    method: "put",
    body: body,
  });
}

export async function makeADeleteOnLastDevice() {
  const result = await t.request({
    url: config.baseUrlApi + "/devices",
    method: "get",
  });
  const theLastDevice = result.body[result.body.length - 1];

  return [
    await t.request({
      url: config.baseUrlApi + "/devices/" + theLastDevice.id,
      method: "delete",
    }),
    theLastDevice,
  ];
}

export function makeNewDevice(body) {
  return t.request({
    url: config.baseUrlApi + "/devices",
    method: "post",
    body: body,
  });
}
