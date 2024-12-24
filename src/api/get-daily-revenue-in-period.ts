import { api } from '@/lib/axios'

export type DailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod() {
  const response = await api.get<DailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
  )

  return response.data
}
