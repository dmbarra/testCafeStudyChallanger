import {
  makeGetToListDevices,
  makeAUpdateOnFirstDevice,
  makeADeleteOnLastDevice,
  makeNewDevice,
} from "../api_client/api_request";
import MainPage from "../page_object/main_page";
import AddNewDevicePage from "../page_object/add_new_device_page";
import config from "../.testcaferc.cjs";
import { generateRandomNumber } from "../helper/random_number";

fixture("Challenger tests");

test("Verify List of Devices", async (t) => {
  const apiResults = await makeGetToListDevices();
  await t.expect(apiResults.status).eql(200);

  await t.navigateTo(config.baseUrl);

  for (let i = 0; i < apiResults.body.length; i = i + 1) {
    await MainPage.verifyTextElementsOnTable(
      apiResults.body[i].system_name,
      apiResults.body[i].hdd_capacity,
      apiResults.body[i].type
    );
    await MainPage.verifyButtonsElementsOnTable(apiResults.body[i].system_name);
  }
});

test("Create a new Device", async (t) => {
  await t.navigateTo(config.baseUrl);
  await MainPage.clickToAddNewDevice();

  const newDeviceName = "NEW_DEVICE - " + generateRandomNumber();

  await AddNewDevicePage.typeName(newDeviceName);
  await AddNewDevicePage.selectType("MAC");
  await AddNewDevicePage.typeCapacity("1");
  await AddNewDevicePage.clickToSave();

  await MainPage.verifyTextElementsOnTable(newDeviceName, "1", "MAC");
});

test("Update the first Device", async (t) => {
  const updateDeviceName = "Renamed Device - " + generateRandomNumber();

  const apiResults = await makeAUpdateOnFirstDevice({
    system_name: updateDeviceName,
    hdd_capacity: "1",
    type: "MAC",
  });
  await t.expect(apiResults.status).eql(200);

  await t.navigateTo(config.baseUrl);

  await MainPage.verifyTextElementsOnTable(updateDeviceName, "1", "MAC");
});

test("Delete the last Device", async (t) => {
  const newDeviceName = "NEW_DEVICE - " + generateRandomNumber();

  const apiResultsCreate = await makeNewDevice({
    system_name: newDeviceName,
    hdd_capacity: "1",
    type: "MAC",
  });
  await t.expect(apiResultsCreate.status).eql(200);

  const apiResultsDelete = await makeADeleteOnLastDevice();
  await t.expect(apiResultsDelete[0].status).eql(200);

  await t.navigateTo(config.baseUrl);

  await MainPage.verifyTextElementsDisappearFromTheTable(
    apiResultsDelete[1].system_name
  );
});
