import { Entity, ObjectIdColumn, Column } from 'typeorm'

import transformer from '@shared/infra/typeorm/utils/objectIdTransformer'

@Entity('users')
class User {
  @ObjectIdColumn({ transformer })
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
}

export default User
