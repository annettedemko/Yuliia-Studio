import { getContentData } from './contentAPI'
import { pricesService, subscriptionsService, eventsService } from '@/services/contentService'
import type { ServicePrice, SubscriptionPackage, Event } from '@/types/admin'

export async function migrateLocalStorageToSupabase() {
  try {
    console.log('Starting data migration from localStorage to Supabase...')

    // Get data from localStorage
    const localData = getContentData()

    // Migrate prices
    console.log('Migrating prices...')
    const pricePromises = localData.prices.map(async (price: ServicePrice) => {
      try {
        return await pricesService.create({
          service: price.service,
          price: price.price,
          category: price.category,
          note: price.note
        })
      } catch (error) {
        console.error('Error migrating price:', price.service, error)
        return null
      }
    })

    const migratedPrices = await Promise.all(pricePromises)
    const successfulPrices = migratedPrices.filter(p => p !== null)
    console.log(`Migrated ${successfulPrices.length}/${localData.prices.length} prices`)

    // Migrate subscriptions
    console.log('Migrating subscriptions...')
    const subscriptionPromises = localData.subscriptions.map(async (subscription: SubscriptionPackage) => {
      try {
        return await subscriptionsService.create({
          name: subscription.name,
          price: subscription.price,
          period: subscription.period,
          treatments: subscription.treatments,
          frequency: subscription.frequency,
          features: subscription.features,
          popular: subscription.popular
        })
      } catch (error) {
        console.error('Error migrating subscription:', subscription.name, error)
        return null
      }
    })

    const migratedSubscriptions = await Promise.all(subscriptionPromises)
    const successfulSubscriptions = migratedSubscriptions.filter(s => s !== null)
    console.log(`Migrated ${successfulSubscriptions.length}/${localData.subscriptions.length} subscriptions`)

    // Migrate events
    console.log('Migrating events...')
    const eventPromises = localData.events.map(async (event: Event) => {
      try {
        return await eventsService.create({
          title: event.title,
          date: event.date,
          time: event.time,
          location: event.location,
          address: event.address,
          description: event.description
        })
      } catch (error) {
        console.error('Error migrating event:', event.title, error)
        return null
      }
    })

    const migratedEvents = await Promise.all(eventPromises)
    const successfulEvents = migratedEvents.filter(e => e !== null)
    console.log(`Migrated ${successfulEvents.length}/${localData.events.length} events`)

    console.log('Migration completed successfully!')

    return {
      prices: successfulPrices.length,
      subscriptions: successfulSubscriptions.length,
      events: successfulEvents.length,
      total: successfulPrices.length + successfulSubscriptions.length + successfulEvents.length
    }

  } catch (error) {
    console.error('Migration failed:', error)
    throw error
  }
}

// Helper function to run migration from browser console
if (typeof window !== 'undefined') {
  (window as any).migrateData = migrateLocalStorageToSupabase
}