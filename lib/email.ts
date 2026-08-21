// Email service utilities (to be implemented with Resend or Nodemailer)

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  // Implementation will go here
  console.log('Email would be sent to:', options.to);
};

export const sendVerificationEmail = async (
  email: string,
  firstName: string,
  token: string,
  appUrl: string
): Promise<void> => {
  const verificationLink = `${appUrl}/verify-email?token=${token}`;
  const html = `
    <h2>Welcome to ElectroHub, ${firstName}!</h2>
    <p>Please verify your email address by clicking the link below:</p>
    <a href="${verificationLink}">${verificationLink}</a>
    <p>This link will expire in 24 hours.</p>
  `;

  await sendEmail({
    to: email,
    subject: 'Verify your ElectroHub account',
    html,
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  firstName: string,
  token: string,
  appUrl: string
): Promise<void> => {
  const resetLink = `${appUrl}/reset-password?token=${token}`;
  const html = `
    <h2>Password Reset Request</h2>
    <p>Hi ${firstName},</p>
    <p>Click the link below to reset your password:</p>
    <a href="${resetLink}">${resetLink}</a>
    <p>This link will expire in 30 minutes.</p>
  `;

  await sendEmail({
    to: email,
    subject: 'Reset your ElectroHub password',
    html,
  });
};

export const sendOrderConfirmationEmail = async (
  email: string,
  firstName: string,
  orderNumber: string,
  total: number
): Promise<void> => {
  const html = `
    <h2>Order Confirmation</h2>
    <p>Hi ${firstName},</p>
    <p>Thank you for your order!</p>
    <p>Order Number: ${orderNumber}</p>
    <p>Total: ₹${total}</p>
    <p>You will receive a tracking link via email soon.</p>
  `;

  await sendEmail({
    to: email,
    subject: `Order Confirmation - ${orderNumber}`,
    html,
  });
};
