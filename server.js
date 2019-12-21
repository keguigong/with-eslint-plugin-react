const express = require('express')
const next = require('next')
const http = require('http')
// const https = require('https')
// const fs = require('fs')

// var credentials = {
//   key: fs.readFileSync('./assets/certificate/nioint.com.key'),
//   ca: fs.readFileSync('./assets/certificate/nioint.com.crt'),
//   cert: fs.readFileSync('./assets/certificate/nioint.com.pem')
// }

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = dev
  ? {
    http: 3000,
    https: 443
  }
  : {
    http: 80,
    https: 443
  }

app
  .prepare()
  .then(() => {
    const server = express()
    // const httpServer = express()

    // httpServer.get("*", (req, res) => {
    //   console.log(`user came to http 😨`);
    //   res.writeHead(302, {
    //     Location: "https://" + req.headers.host + req.url
    //   });
    //   res.end();
    // });

    server.get('/p/:id', (req, res) => {
      const actualPage = '/batman'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    http.createServer(server).listen(port.http, err => {
      if (err) throw err
      console.log(`> Ready on http://127.0.0.1:${port.http}`)
    })

    // https.createServer(credentials, server).listen(port.https, err => {
    //   if (err) throw err
    //   console.log(`> Ready on http://127.0.0.1:${port.https}`)
    // })

    // server.listen(port, err => {
    //   if (err) throw err
    //   console.log(`> Ready on http://127.0.0.1:${port}`)
    // })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })