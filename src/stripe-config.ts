export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_NyEC57Eas5Gei1',
    priceId: 'price_1NCHkFAa8g8lb2HO14JQt9OG',
    name: '5 Pack Seeds',
    description: 'Whether you are a novice gardener or someone looking to expand your collection, these seeds provide the perfect opportunity to embark on a rewarding gardening journey.',
    mode: 'subscription',
    price: 100.00
  }
];

export const getProductById = (id: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.id === id);
};

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};