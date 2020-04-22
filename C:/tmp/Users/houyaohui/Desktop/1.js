const http = require('http')
const fs = require('fs')
const path = require('path')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})
let link = '/Users/houyaohui/Desktop/Web'
let arr = 
[['内置模块',
'内置模块.md']
  ,['资源压缩-zlib',
  '模块/zlib.md']
  ,['文件系统操作-fs',
  '模块/fs.md']
  ,['域名解析-dns',
  '模块/dns.md']
  ,['网络服务-http',
  '模块/http.md']
  ,['网络服务-http-req',
  '模块/http.req.md']
  ,['网络服务-http-res',
  '模块/http.res.md']
  ,['网络服务-http-client',
  '模块/http.client.md']
  ,['网络服务-http-server',
  '模块/http.server.md']
  ,['网络服务-https(ok)',
  '模块/https.md']
  ,['网络TCP-net',
  '模块/net.md']
  ,['网络UDP-dgram(ok)',
  '模块/dgram.md']
  ,['网络地址解析-url',
  '模块/url.md']
  ,['数据加密-crypto(OK)',
  '模块/crypto.md']
  ,['URL查询字符串-querystring',
  '模块/querystring.md']
  ,['二进制数据-buffer',
  '模块/buffer.md']
  ,['子进程-child_process',
  '模块/child_process.md']
  ,['进程相关-process(ok)',
  '模块/process.md']
  ,['集群-cluster(ok)',
  '模块/cluster.md']
  ,['基础调试-console(ok)',
  '模块/console.md']
  ,['进阶调试-debugger(ok)',
  '模块/debug.md'],
  ,['事件机制-events(ok)',
  '模块/events.md'],
  ,['本地路径处理-path',
  '模块/path.md']
  ,['逐行读取-readline(ok)',
  '模块/readline.md'],
  ,['实用工具模块-util(ok)',
  '模块/util.md']
  ,['流操作-stream(ok)',
  '模块/stream.md']
  ,['二进制解码-string_decoder',
  '模块/string_decoder.md'],
  ,['Nodejs进阶：服务端字符编解码&乱码处理(ok)',
  '进阶/charset-enc-dec.md']
  ,['Nodejs进阶：MD5入门介绍及crypto模块的应用(ok)',
  '模块/crypto.md5.md']
  ,['Nodejs 进阶：Express 常用中间件 body-parser 实现解析(ok)',
  '进阶/body-parser.md']
  ,['基于express+muter的文件上传(ok)',
  '进阶/文件上传-multer.md']
  ,['将图片转成datauri嵌入到html(ok)',
  '/进阶/图片地址转成datauri.md']
  ,['本地调试远程服务器上的Node代码(ok)',
  '/模块/debug.md']
  ,['express+session实现简易身份认证(ok)',
  '进阶/express+session实现简易身份认证.md']
  ,['express+morgan：从入门使用到源码剖析(ok)',
  '进阶/日志模块morgan.md']
  ,['express+cookie-parser：签名机制深入剖析(ok)',
  '进阶/cookie-parser-deep-in.md']
  ,['Nodejs 进阶：log4js入门实例(ok)',
  '进阶/log4js.md']
  ,['调试日志打印：debug模块',
  '/进阶/debug-log.md']
  ,['Nodejs进阶：crypto模块之理论篇',
  '/进阶/crypto-theory.md']
  ,['Nodejs进阶：5分钟入门非对称加密用法',
  '/进阶/asymmetric-enc-dec.md']
  ]
let files = []
arr.forEach(item=>{
  let node = '/Users/houyaohui/wwwroot/GitHub/YaohuiHou/myVuepresss/docs/Node/'
  let l = item[1]
  let d;
    new Promise((resolve,reject)=>{
      fs.readFile(node+l, 'utf-8',  (err, data)=> {
          d = data
          fs.writeFile(node+l, `## ${item[0]} \n ${d}`,(res)=>{
            resolve()
            console.log('done');
          })
      });
    })
})

// fs.readdirSync(path.resolve(__dirname, link)).map((filename) => {
//   fs.rename(
//     `${link}/${filename}`,
//     `${link}/${filename.split('-')[0]}`,
//     function (err) {
//       // console.log(err, n[0])
//     }
//   )
// })

// fs.readdirSync(path.resolve(__dirname, link)).map((filename) => {
//   // console.log(filename)
//   var stat = fs.lstatSync(`${link}/${filename}`)
//   var is_direc = stat.isDirectory() // true || false 判断是不是文件夹
//   if (filename.indexOf('.md') == -1 && is_direc) {
//     let childs = fs
//       .readdirSync(path.resolve(__dirname, link + '/' + filename + '/'))
//       .map((name, index) => {
//         let n = name.slice(0, -3).split('-')
//         fs.rename(
//           `${link}/${filename}/${name}`,
//           `${link}/${filename}/${index}.md`,
//           function (err) {
//             console.log(err, n[0])
//           }
//         )
//         // console.log(n)
//         // return 'Web/' + filename + '/' + name.slice(0, -3)
//       })
//     // let o = {
//     //   title: filename,
//     //   collapsable: false,
//     //   children: childs,
//     // }
//     // officalPluginsChilds.push(o)
//   }
// })

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
