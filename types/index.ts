export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  googleId?: string;
  isEmailVerified: boolean;
  isActive: boolean;
  isAdmin: boolean;
  avatar?: string;
  addresses?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice: number;
  discount: number;
  stock: number;
  sku: string;
  categoryId: string;
  brandId?: string;
  images: Array<{ url: string; alt: string; isPrimary: boolean }>;
  specifications: Array<{ key: string; value: string }>;
  rating: number;
  reviewCount: number;
  warranty?: string;
  warrantyMonths?: number;
  returnable: boolean;
  returnDays?: number;
  isActive: boolean;
  isFeatured: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  isTrendingGadget: boolean;
  isDealOfDay: boolean;
  viewCount: number;
  wishlistCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  icon?: string;
  parentCategoryId?: string;
  isActive: boolean;
  productCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  _id: string;
  productId: string;
  product?: Product;
  quantity: number;
  price: number;
  addedAt: Date;
}

export interface Cart {
  _id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  taxAmount: number;
  shippingCost: number;
  discountAmount: number;
  total: number;
  appliedCouponId?: string;
  couponCode?: string;
  couponDiscount?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface WishlistItem {
  _id: string;
  productId: string;
  product?: Product;
  addedAt: Date;
  notifyOnPriceDrop?: boolean;
}

export interface Wishlist {
  _id: string;
  userId: string;
  items: WishlistItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  _id: string;
  productId: string;
  productName: string;
  sku: string;
  quantity: number;
  price: number;
  discount: number;
  total: number;
}

export interface Order {
  _id: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  taxAmount: number;
  shippingCost: number;
  discountAmount: number;
  couponDiscount?: number;
  total: number;
  paymentMethod: 'razorpay' | 'stripe' | 'upi';
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddressId: string;
  billingAddressId: string;
  shippingMethod: string;
  estimatedDelivery?: Date;
  returnRequested: boolean;
  returnReason?: string;
  returnStatus?: 'pending' | 'approved' | 'rejected' | 'completed';
  customerNotes?: string;
  adminNotes?: string;
  orderDate: Date;
  confirmedAt?: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
  cancelledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  _id: string;
  productId: string;
  userId: string;
  user?: Partial<User>;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  isVerifiedPurchase: boolean;
  purchaseOrderId?: string;
  helpfulCount: number;
  unhelpfulCount: number;
  isApproved: boolean;
  isFlagged: boolean;
  flagReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  _id: string;
  userId: string;
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  addressType: 'home' | 'office' | 'other';
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Coupon {
  _id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  maxDiscount?: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  maxUsage: number;
  usageCount: number;
  maxUsagePerUser: number;
  minPurchaseAmount: number;
  applicableCategories?: string[];
  usedBy?: Array<{ userId: string; count: number }>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  _id: string;
  orderId: string;
  userId: string;
  amount: number;
  currency: string;
  paymentMethod: 'razorpay' | 'stripe';
  status: 'pending' | 'success' | 'failed' | 'cancelled' | 'refunded';
  statusReason?: string;
  razorpayPaymentId?: string;
  razorpayOrderId?: string;
  stripePaymentIntentId?: string;
  refundAmount?: number;
  refundReason?: string;
  refundedAt?: Date;
  receiptUrl?: string;
  invoiceUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface APIResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string>;
  statusCode: number;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  page: number;
  limit: number;
  total: number;
  pages: number;
}
