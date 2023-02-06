import mongoose from "mongoose"
import { Config } from "../config"
export class MongoHelper {
  public initiateMongoConnection(): void {
    ;(<any>mongoose).Promise = global.Promise
    mongoose.set("strictQuery", true)
    mongoose
      .connect(Config.mongoUrl, {
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
      })
      .then(() => {
        console.log("Connected to MongoDb")
      })
      .catch((err: Error) => {
        throw `There is error in connecting Mongo DB ${err.message}`
      })
  }
}
