import { StatusNotification } from '@/Interface'
import styles from './styles.module.scss'

interface Props {
  status: StatusNotification
  msj: string | null
}

export const Notification = ({ status, msj }: Props) => {
  return (
    msj && (
      <div className={`${styles.notification} ${styles[status!]}`}>
        <p>{msj}</p>
      </div>
    )
  )
}
