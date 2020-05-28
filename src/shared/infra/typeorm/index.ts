import { createConnection, getConnectionOptions } from 'typeorm'

const initDatabase = async () => {
  const connOptions = await getConnectionOptions()

  if (process.env.NODE_ENV === 'production') {
    Object.assign(connOptions, {
      entities: [
        connOptions.entities?.map((path) =>
          path.toString().replace('src', 'dist'),
        ),
      ],
    })
  }

  await createConnection(connOptions)
}

initDatabase()
