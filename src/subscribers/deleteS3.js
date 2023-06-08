class DeleteS3Subscriber {
  constructor({ productService, eventBusService }) {
    this.productService = productService;
    eventBusService.subscribe('product.updated', this.handleDelete);
  }

  handleDelete = async (data) => {
    console.log('Product updated: ' + data);
    console.dir(data);
    const product = await this.productService.count();
    console.log(product);
  };
}

export default DeleteS3Subscriber;
