import { makeGetToListDevices } from "../api_client/api_request";
import MainPage from "../page_object/main_page";

fixture("Challenger tests");

test("Verify List of Devices", async (t) => {
  const apiResults = await makeGetToListDevices(t);
  await t.expect(apiResults.status).eql(200);

  await t.navigateTo("http://localhost:3001/");

  for (let i = 0; i < apiResults.body.length; i = i + 1) {
    await MainPage.verifyTextElementsOnTable(
      apiResults.body[i].system_name,
      apiResults.body[i].hdd_capacity,
      apiResults.body[i].type
    );
    await MainPage.verifyButtonsElementsOnTable(apiResults.body[i].system_name);
  }
});
