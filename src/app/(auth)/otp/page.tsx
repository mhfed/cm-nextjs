'use client'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { OtpStyledInput } from '@/components/extension/otp-input'

const OtpTest = () => {
  const form = useForm({
    defaultValues: {
      otp: '',
    },
  })

  const onSubmit = (data: { otp: string }) => {
    console.log(data)
    toast.success(`Success , Your Otp code is : ${data.otp}`)
  }
  return (
    <div className='flex h-fit w-fit items-center justify-center rounded-md bg-background p-4 outline outline-1 outline-muted'>
      <div className='w-full space-y-2'>
        <div className='space-y-1'>
          <h2 className='font-semibold'>OTP verification</h2>
          <p className='text-xs'>
            Enter the 5-digit code sent to your email address or phone number
          </p>
        </div>
        <Form {...form}>
          <form className='grid gap-2' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='otp'
              render={({ field }) => (
                <FormControl>
                  <>
                    <FormItem>
                      <OtpStyledInput
                        numInputs={6}
                        inputType='number'
                        {...field}
                      />
                    </FormItem>
                    <FormMessage />
                  </>
                </FormControl>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default OtpTest
