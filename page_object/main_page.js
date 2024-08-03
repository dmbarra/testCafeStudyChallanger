import { Selector, t } from "testcafe";

class MainPage {
  constructor() {
    this.mainTable = Selector(".device-main-box");
    this.addDevice = Selector(".submitButton");
  }

  async clickToAddNewDevice() {
    await t.click(this.addDevice);
  }

  async verifyTextElementsOnTable(name, capacity, type) {
    const elementToBeFind = this.mainTable.find(".device-name").withText(name);

    const elementDeviceType = elementToBeFind
      .parent(".device-info")
      .find(".device-type").innerText;

    const elementCapacityType = elementToBeFind
      .parent(".device-info")
      .find(".device-capacity").innerText;

    await t.expect(elementToBeFind.exists).ok();
    await t.expect(elementDeviceType).eql(type);
    await t.expect(elementCapacityType).contains(capacity);
  }

  async verifyButtonsElementsOnTable(name) {
    const elementToBeFind = this.mainTable.find(".device-name").withText(name);

    const elementToEdit = elementToBeFind
      .parent(".device-main-box")
      .find(".device-edit")
      .withText("EDIT");

    const elementToRemove = elementToBeFind
      .parent(".device-main-box")
      .find(".device-remove")
      .withText("REMOVE");

    await t.expect(elementToBeFind.exists).ok(`Failed to exist ${name}`);
    await t
      .expect(elementToEdit.exists)
      .ok(`Failed to exist the edit for ${name}`);
    await t
      .expect(elementToRemove.exists)
      .ok(`Failed to exist the remove for ${name}`);
  }
}

export default new MainPage();
