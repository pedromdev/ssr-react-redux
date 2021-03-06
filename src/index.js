import 'babel-polyfill';
import express from 'express';
import render from './helpers/render'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import proxy from 'express-http-proxy'


const app = express();

app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
      }
    })
  );

app.use(express.static('public'))

app.get("*",(req,res) => {
    const store = createStore(req);

    const promices = matchRoutes(Routes,req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null
    })

    Promise.all(promices).then(() => {
        res.send(render(req,store));
    })

});

app.listen(3000,() => {
    console.log("porta 3000")
});

