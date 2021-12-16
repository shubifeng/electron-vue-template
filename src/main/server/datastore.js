import { app } from 'electron'
import path from 'path'
import Datastore from 'nedb'

export default new Datastore({
    autoload: true,
    filename: path.join("D:\\", '/data.db')
    //filename: path.join(app.getPath('userData'), '/data.db')
})
