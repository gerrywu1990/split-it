import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Stack, Button } from '@chakra-ui/core'
import { useAuth } from '../../hooks/useAuth'
import DateInput from './DateInput'
import MoneyInput from './MoneyInput'
import ShareExpense from './ShareExpense'
import PayerSelect from './PayerSelect'
import EvenSliptSwitch from './EvenSplitSwitch'
import SplitOptions from './SplitOptions'
import Input from '../Input'
import { dateToShortDate } from '../../utils/date'

const ExpenseForm = ({ members }) => {
  const {
    user: { displayName },
  } = useAuth()
  members = [displayName, ...members]

  const defaultValues = {
    date: dateToShortDate(new Date()),
    isNonEven: false,
    splitMethod: 'weight',
    shareExpense: members.map(member => ({
      member,
      isChecked: true,
      portion: null,
    })),
  }
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    control,
    unregister,
  } = useForm({
    defaultValues,
  })

  console.log('errors, ', errors)

  useEffect(() => {
    register({ name: 'splitMethod' })
  }, [register])

  const onSubmit = data => console.log(data)

  const isNonEven = watch('isNonEven')
  const splitMethod = watch('splitMethod')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DateInput
        {...{ register, setValue, name: 'date', error: errors.date }}
      />
      <Input
        {...{
          register,
          label: 'Description',
          name: 'desc',
          errors: errors.desc,
        }}
      />
      <MoneyInput
        {...{ register, name: 'amount', error: errors.amount }}
      />
      <PayerSelect
        {...{ members, register, name: 'payer', error: errors.payer }}
      />
      <EvenSliptSwitch {...{ control, name: 'isNonEven' }} />
      {isNonEven && (
        <SplitOptions {...{ control, name: 'splitMethod' }} />
      )}
      <ShareExpense
        {...{
          members,
          register,
          setValue,
          splitMethod,
          isNonEven,
          watch,
          unregister,
          name: 'shareExpense',
        }}
      />
      <Stack py={5} spacing={5} isInline={[false, true]}>
        <Button w="100%">Save and New</Button>
        <Button type="submit" w="100%" variantColor="blue">
          Save and Close
        </Button>
      </Stack>
    </form>
  )
}

export default ExpenseForm
