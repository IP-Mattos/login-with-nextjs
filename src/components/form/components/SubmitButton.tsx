import { Loader } from '@/components/Loader/Index'
import styles from './styles.module.css'
interface SubmitButtonProps {
  buttonText: string
  isLoading?: boolean
}
export function SubmitButton({ buttonText, isLoading }: SubmitButtonProps) {
  return (
    <button className={styles.submitButton} type='submit' disabled={isLoading}>
      {isLoading ? <Loader /> : buttonText}
    </button>
  )
}
