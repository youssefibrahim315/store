export class PageInfo {
  currentPage?: number = 1;
  itemsPerPage?: number = 10;

  constructor(currentPage: number = 1, itemsPerPage: number=10) {
    this.currentPage = currentPage;
    this.itemsPerPage = itemsPerPage;
  }

  get query() {
    return { currentPage: this.currentPage, itemsPerPage: this.itemsPerPage };
  }
}
