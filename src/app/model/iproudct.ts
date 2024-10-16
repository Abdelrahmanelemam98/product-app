export interface IReview {
  rating?: number;
  comment?: string;
  date?: string;
  reviewerName?: string;
  reviewerEmail?: string;
}

export interface IDimensions {
  width?: number;
  height?: number;
  depth?: number;
}

export interface IMeta {
  createdAt?: string;
  updatedAt?: string;
  barcode?: string;
  qrCode?: string;
}

export interface IProudct {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: IDimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: IReview[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: IMeta;
  thumbnail?: string; // Assuming thumbnail will have a string URL
  images?: string[]; // Assuming images will have string URLs
}

export interface IProductResponse {
  products: IProudct[];
  tota?: number;
  skip?: number;
  limit?: number;
}