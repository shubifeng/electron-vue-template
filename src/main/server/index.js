/* eslint-disable prefer-promise-reject-errors */
import app from './server'
import http from 'http'
import config from '@config'
const port = config.BuiltInServerPort
var server = null
app.set('port', port)

// 引入DB数据库文件
import db from './datastore'

export default {
  StatrServer () {
    return new Promise((resolve, reject) => {

      // 查找数据
      db.find({"age":100}, (err, docs)=>{
        if(err){
          console.log(err);
          return;
        };
        console.log("查找数据");
        console.log(docs);
      });


// 插入数据
      db.insert({"name":20,"age":100},function(err,doc){
        if(err){
          console.log(err);
          return;
        }
        console.log("插入数据");
        console.log(doc);
      })

// 更新数据
      db.update({"_id":"cHODtJOIft1YcOMN"},{$set:{"name":"赵六"}},function(err,data){
        if(err){
          console.log(err);
          return;
        }
        console.log("更新数据");
        console.log(data);
      })

// 移除数据
      db.remove({"_id":"6nAYPLImXRs7mB0P"},{},function(err,data){
        if(err){
          console.log(err);
          return;
        }
        console.log("移除数据");
        console.log(data);
      })

      server = http.createServer(app)
      server.listen(port)
      server.on('error', (error) => {
        switch (error.code) {
          case 'EACCES':
            reject('权限不足内置服务器启动失败，请使用管理员权限运行。')
            break
          case 'EADDRINUSE':
            reject('内置服务器端口已被占用，请检查。')
            break
          default:
            reject(error)
        }
      })
      server.on('listening', () => {
        resolve('服务端运行中')
      })
    })
  },
  StopServer () {
    return new Promise((resolve, reject) => {
      console.log(server)
      if (server) {
        server.close()
        server.on('close', () => {
          server = null
          resolve(1)
        })
      } else {
        reject('服务端尚未开启')
      }
    })
  }
}


