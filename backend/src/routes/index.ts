import express from 'express';
import authRoute from './fat-content.route';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to the API!' });
});

const defaultRoutes = [
 
  {
    path: '/auth',
    route: authRoute
  }
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
