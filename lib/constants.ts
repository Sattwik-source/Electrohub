export const API_ROUTES = {
  AUTH: '/api/auth',
  PRODUCTS: '/api/products',
  CATEGORIES: '/api/categories',
  CART: '/api/cart',
  WISHLIST: '/api/wishlist',
  ORDERS: '/api/orders',
  REVIEWS: '/api/reviews',
  USERS: '/api/users',
  ADMIN: '/api/admin',
} as const;

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  RETURNED: 'returned',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
} as const;

export const ADDRESS_TYPE = {
  HOME: 'home',
  OFFICE: 'office',
  OTHER: 'other',
} as const;

export const COUPON_TYPE = {
  PERCENTAGE: 'percentage',
  FIXED: 'fixed',
} as const;

export const CATEGORIES = [
  'Mechanical Keyboards',
  'Gaming Mice',
  'Projectors',
  'Monitors',
  'Headphones',
  'Speakers',
  'SSDs',
  'Keycaps',
  'Accessories',
] as const;

export const ITEMS_PER_PAGE = 12;
export const MAX_FILE_SIZE = 5242880; // 5MB
export const JWT_EXPIRE = '7d';
export const EMAIL_VERIFY_EXPIRE = 24 * 60 * 60 * 1000; // 24 hours
export const PASSWORD_RESET_EXPIRE = 30 * 60 * 1000; // 30 minutes
