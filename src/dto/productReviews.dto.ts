export interface IProductReviewDTO {
  id: number;
  product: number;
  rate: number;
  text: string;
  created_by: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  created_at: string;
}

export interface ISendProductReviewDTO {
  rate: number;
  text: string;
}

export interface ISendProductReviewSuccessDTO {
  success: true;
}