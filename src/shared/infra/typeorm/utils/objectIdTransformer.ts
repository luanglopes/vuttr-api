import { ObjectID } from 'mongodb'

export default {
  from: (value: string | ObjectID): string =>
    typeof value !== 'string' ? String(value) : value,
  to: (value: string | ObjectID): ObjectID =>
    typeof value === 'string' ? new ObjectID(value) : value,
}
