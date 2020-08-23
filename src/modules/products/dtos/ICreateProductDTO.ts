export default interface ICreateProductDTO {
  name: string;
  color_id: string;
  size_id: string;
  category_id: string;
  price: number;
  quantity: number;
  pricePromotion: number;
  DatePromoStart: Date;
  DatePromoEnd: Date;
  description: string;
  image: string;
}
