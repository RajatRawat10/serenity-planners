import { z } from 'zod';

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(80, 'Full name is too long.'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.'),

  phone: z
    .string()
    .trim()
    .min(8, 'Please enter a valid phone number.')
    .max(20, 'Please enter a valid phone number.')
    .regex(
      /^[+]?[\d\s()-]+$/,
      'Please enter a valid phone number.'
    ),

  travelType: z
    .string()
    .min(1, 'Please select a travel type.'),

  destination: z
    .string()
    .trim()
    .max(120, 'Destination is too long.')
    .optional()
    .or(z.literal('')),

  travelDate: z
    .string()
    .optional()
    .or(z.literal('')),

  travelers: z
    .string()
    .optional()
    .or(z.literal('')),

  budget: z
    .string()
    .optional()
    .or(z.literal('')),

  message: z
    .string()
    .trim()
    .min(10, 'Please tell us a little more about your trip.')
    .max(1500, 'Please keep your message under 1500 characters.'),
});

export const validateEnquiry = (req, res, next) => {
  const result = enquirySchema.safeParse(req.body);

  if (!result.success) {
    const issues = result.error?.issues || result.error?.errors || [];
    const formattedErrors = issues.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed for enquiry submission.',
      errors: formattedErrors,
    });
  }

  req.validatedBody = result.data;
  next();
};
