import { toast } from 'sonner'

export function handleError(error: Error) {
  console.error(error)
  toast.error(error.message)
}
