import {
  createSchema,
  Type,
  typedModel,
  ExtractDoc,
  ExtractProps,
} from 'ts-mongoose'

const toolSchema = createSchema({
  title: Type.string({ required: true }),
  link: Type.string({ required: true }),
  description: Type.string({ required: true }),
  tags: Type.array({ required: true }).of(Type.string()),
})

export type ToolDocument = ExtractDoc<typeof toolSchema>
export type ToolProps = ExtractProps<typeof toolSchema>

export default typedModel('Tool', toolSchema)
