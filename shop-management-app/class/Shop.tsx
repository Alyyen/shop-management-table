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
}
