import * as yup from 'yup'

const userSchema = yup.object().shape({
  name: yup.string().required(),
  band: yup.string().required(),
  value: yup.number().required(),
  color: yup.string().required(),
  data: yup.date().required(),
})

