import dayjs from 'dayjs'

const today = () => dayjs(new Date()).format('YYYY-MM-DD')

export {
  today
}
