export class Shop {
  constructor(
    public id: string,
    public name: string,
    public children: Shop[] = [],
    public manager_access: boolean = false,
    public admin_access: boolean = false
  ) {}

  static fromJSON(json: any): Shop {
    let children: Shop[] = [];

    // call the function again for each children
    json.children.forEach((element: Shop) => {
      children.push(Shop.fromJSON(element));
    });

    return new Shop(json.id, json.name, children);
  }

  hasChild(): boolean {
    return this.children?.length > 0;
  }

  hasAdminAccess(): boolean {
    // if no children, return admin_access
    if (!this.hasChild()) return this.admin_access;
    // else foreach of children
    let res = true;
    this.children.forEach((child) => {
      if (!child.hasAdminAccess()) res = false;
    });

    return res;
  }

  setAdminAccess(access: boolean) {
    // if no children & children, set the access value
    this.admin_access = access;
    if (this.hasChild()) {
      // call back for children too
      this.children.forEach((child) => {
        child.setAdminAccess(access);
      });
    }
  }
}
