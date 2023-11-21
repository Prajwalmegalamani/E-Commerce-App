import { rest } from "msw";

import { MOCK_PRODUCTS } from "./products.mock";
import { baseUrl } from "../config";

export const handlers = [
  rest.get(`${baseUrl}/products`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ products: MOCK_PRODUCTS, limit: 30, skip: 0, total: 3 })
    );
  }),
  rest.post(`/users/add`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: true,
      })
    );
  }),
  rest.post(`/auth/login/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: true,
        data: {
          id: 15,
          username: "kminchelle",
          email: "kminchelle@qq.com",
          firstName: "Jeanne",
          lastName: "Halvorson",
          gender: "female",
          image: "https://robohash.org/autquiaut.png?size=50x50&set=set1",
        },
      })
    );
  }),
  rest.get(`/products/search`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ products: MOCK_PRODUCTS, limit: 30, skip: 0, total: 3 })
    );
  }),
  rest.post(`/auth/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: true,
        data: {
          id: 15,
          username: "kminchelle",
          email: "kminchelle@qq.com",
          firstName: "Jeanne",
          lastName: "Halvorson",
          gender: "female",
          image: "https://robohash.org/autquiaut.png?size=50x50&set=set1",
        },
      })
    );
  }),
  rest.get(`/users/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: true,
        data: {
          id: "1",
          firstName: "Terry",
          lastName: "Medhurst",
          gender: "male",
          email: "atuny0@sohu.com",
          phone: "+63 791 675 8914",
          birthDate: "2000-12-25",
          password: "Hello@123",
        },
      })
    );
  }),
  rest.put(`/users/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: true,
        data: {
          id: "1",
          firstName: "Terry",
          lastName: "Medhurst",
          gender: "male",
          email: "atuny0@sohu.com",
          phone: "+63 791 675 8914",
          birthDate: "2000-12-25",
          password: "Hello@123",
        },
      })
    );
  }),
];
