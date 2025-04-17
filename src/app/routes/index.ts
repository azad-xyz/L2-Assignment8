import express from "express";
import { customerRoutes } from "../modules/customer/customer.route";
import { bikeRoutes } from "../modules/bike/bike.route";
import { serviceRecordRoutes } from "../modules/service/service.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRoutes,
  },
  {
    path: "/bikes",
    route: bikeRoutes,
  },
  {
    path: "/services",
    route: serviceRecordRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
