import BaseResource from '@/resources/BaseResource'

export function useAxiosSamplePageFetchData() {
  const resource = new BaseResource()

  return async () => {
    const [users, cars, makers] = await Promise.all([
      resource.get('/users'),
      resource.get('/cars'),
      resource.get('/makers')
    ])

    return {
      users,
      cars,
      makers,
    }
  }
}