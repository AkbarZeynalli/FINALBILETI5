// import * as Yup from 'yup';
// export const pSchema = object({
//     name: string().required(),
//     price: number().required().positive(),
//     image: string().url().required(),
//     category: string().url().nullable(),
// });
// import { object, string, number, date, InferType } from 'yup';

// import * as Yup from 'yup';

// export const pSchema = Yup.object({
//     name: Yup.string().required('Name is required'),
//     price: Yup.number().requ ired('Price is required').positive('Price must be a positive number'),
//     image: Yup.string().url('Invalid image URL').required('Image is required'),
//     category: Yup.string().nullable(),
// });

import * as Yup from 'yup';

export const pSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required().positive(),
    image: Yup.string().url().required(),
    category: Yup.string().url().nullable(),
});
