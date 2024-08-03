import {
  makeGetToListDevices,
  makeAUpdateOnFirstDevice,
} from "../api_client/api_request";
import MainPage from "../page_object/main_page";
import AddNewDevicePage from "../page_object/add_new_device_page";

const host = "http://localhost:3001/";

fixture("Challenger tests");

test("Verify List of Devices", async (t) => {
  const apiResults = await makeGetToListDevices();
  await t.expect(apiResults.status).eql(200);

  await t.navigateTo(host);

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
  await t.navigateTo(host);
  await MainPage.clickToAddNewDevice();

  await AddNewDevicePage.typeName("NEW_DEVICE");
  await AddNewDevicePage.selectType("MAC");
  await AddNewDevicePage.typeCapacity("1");
  await AddNewDevicePage.clickToSave();

  await MainPage.verifyTextElementsOnTable("NEW_DEVICE", "1", "MAC");
});

test("Update the first Device", async (t) => {
  const apiResults = await makeAUpdateOnFirstDevice({
    system_name: "Renamed Device",
    hdd_capacity: "1",
    type: "MAC",
  });
  await t.expect(apiResults.status).eql(200);

  await t.navigateTo(host);

  await MainPage.verifyTextElementsOnTable("Renamed Device", "1", "MAC");
});
