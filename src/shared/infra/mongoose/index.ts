import mongoose from 'mongoose'

mongoose
  .connect('mongodb://localhost:27017/vuttr', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // eslint-disable-next-line no-console
  .catch(console.error)
