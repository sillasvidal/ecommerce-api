import User from '@modules/users/infra/typeorm/entities/User';

interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

export default interface ICreateOrderDTO {
  user: User;
  products: IProduct[];
}
