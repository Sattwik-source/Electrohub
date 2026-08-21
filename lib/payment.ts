import crypto from 'crypto';

export const razorpayConfig = {
  keyId: process.env.RAZORPAY_KEY_ID,
  keySecret: process.env.RAZORPAY_KEY_SECRET,
};

export const stripeConfig = {
  publicKey: process.env.STRIPE_PUBLIC_KEY,
  secretKey: process.env.STRIPE_SECRET_KEY,
};

export const verifyRazorpaySignature = (
  orderId: string,
  paymentId: string,
  signature: string
): boolean => {
  if (!razorpayConfig.keySecret) {
    throw new Error('RAZORPAY_KEY_SECRET is not defined');
  }

  const message = `${orderId}|${paymentId}`;
  const generated_signature = crypto
    .createHmac('sha256', razorpayConfig.keySecret)
    .update(message)
    .digest('hex');

  return generated_signature === signature;
};

export interface PaymentOrder {
  amount: number;
  currency: string;
  receipt: string;
}

export const createRazorpayOrder = async (order: PaymentOrder): Promise<any> => {
  if (!razorpayConfig.keyId || !razorpayConfig.keySecret) {
    throw new Error('Razorpay credentials are not configured');
  }

  try {
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${razorpayConfig.keyId}:${razorpayConfig.keySecret}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error('Failed to create Razorpay order');
    }

    return await response.json();
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    throw error;
  }
};

export interface StripePaymentIntent {
  amount: number;
  currency: string;
  metadata?: Record<string, string>;
}

export const createStripePaymentIntent = async (
  paymentIntent: StripePaymentIntent
): Promise<any> => {
  // This would use Stripe SDK in a real implementation
  console.log('Stripe payment intent creation (to be implemented)', paymentIntent);
  throw new Error('Stripe integration not yet implemented');
};
