import { Selector, t } from "testcafe";

class AddNewDevicePage {
  constructor() {
    this.name = Selector("#system_name");
    this.type = Selector("#type");
    this.capacity = Selector("#hdd_capacity");
    this.submitButton = Selector(".submitButton");
  }

  async typeName(name) {
    await t.typeText(this.name, name);
  }

  async selectType(type) {
    await t.click(this.type).typeText(this.type, type).pressKey("enter");
  }

  async typeCapacity(capacity) {
    await t.typeText(this.capacity, capacity);
  }

  async clickToSave() {
    await t.click(this.submitButton);
  }
}

export default new AddNewDevicePage();
