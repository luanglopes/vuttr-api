import { Entity, Column, ObjectIdColumn } from 'typeorm'

import transformer from '@shared/infra/typeorm/utils/objectIdTransformer'

@Entity('tools')
class Tool {
  @ObjectIdColumn({ transformer })
  id: string

  @Column()
  title: string

  @Column()
  link: string

  @Column()
  description: string

  @Column()
  tags: string[]
}

export default Tool
