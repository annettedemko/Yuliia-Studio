import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/supabase';

export type Event = Database['public']['Tables']['events']['Row'];
export type CreateEvent = Database['public']['Tables']['events']['Insert'];
export type UpdateEvent = Database['public']['Tables']['events']['Update'];

// Get all events (for admin dashboard - includes drafts)
export const getEvents = async (): Promise<Event[]> => {
  console.log('getEvents: Fetching ALL events from Supabase (including drafts)...');
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true });

  if (error) {
    console.error('getEvents: Error fetching events:', error);
    console.error('getEvents: Error details:', JSON.stringify(error, null, 2));
    return [];
  }

  console.log('getEvents: Raw data from Supabase:', data);
  console.log('getEvents: Returning events:', data || []);
  return data || [];
};

// Get upcoming events (not past, published only)
export const getUpcomingEvents = async (): Promise<Event[]> => {
  const today = new Date().toISOString().split('T')[0];
  console.log('getUpcomingEvents: Today date string:', today);

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_published', true)
    .gte('date', today)
    .order('date', { ascending: true });

  if (error) {
    console.error('Error fetching upcoming events:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    return [];
  }

  console.log('getUpcomingEvents: Found events:', data?.length || 0);
  return data || [];
};

// Create new event
export const createEvent = async (event: Omit<CreateEvent, 'id' | 'created_at' | 'updated_at' | 'user_id'>): Promise<Event | null> => {
  const { data, error } = await supabase
    .from('events')
    .insert({
      ...event,
      is_published: true
    })
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error creating event:', error);
    return null;
  }

  return data;
};

// Update event
export const updateEvent = async (id: string, updates: UpdateEvent): Promise<Event | null> => {
  const { data, error } = await supabase
    .from('events')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating event:', error);
    return null;
  }

  return data;
};

// Delete event
export const deleteEvent = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting event:', error);
    return false;
  }

  return true;
};

// Migrate CSV data to Supabase
export const migrateCSVEventsToSupabase = async (): Promise<void> => {
  const csvEvents = [
    {
      title: 'DEKA Beauty Day',
      date: '2025-10-05',
      time: '18:00',
      location: 'Yuliia Cheporska Studio',
      address: 'Elsässer Straße 33, 81667 München',
      description: 'Exklusive Präsentation der neuesten DEKA Technologien mit Live-Demonstrationen'
    },
    {
      title: 'BEAUTY FORUM Festival 2025',
      date: '2025-10-18',
      time: '10:00–17:00',
      location: 'Messe München',
      address: 'Am Messesee 2, 81829 München',
      description: 'Besuchen Sie den DEKA-Stand – innovative Lösungen für Haarentfernung, Hautverjüngung und Körperformung: Motus AX, Again COS, Motus PRO, PHYSIQ 360 und RedTouch PRO'
    },
    {
      title: 'DEKA Beauty Day',
      date: '2025-11-09',
      time: '18:00',
      location: 'Yuliia Cheporska Studio',
      address: 'Elsässer Straße 33, 81667 München',
      description: 'Exklusive Präsentation der neuesten DEKA Technologien mit Live-Demonstrationen'
    },
    {
      title: 'DEKA Beauty Day',
      date: '2025-12-17',
      time: '18:00',
      location: 'Yuliia Cheporska Studio',
      address: 'Elsässer Straße 33, 81667 München',
      description: 'Exklusive Präsentation der neuesten DEKA Technologien mit Live-Demonstrationen'
    }
  ];

  try {
    // Check if each event exists before inserting
    for (const event of csvEvents) {
      // Check if event with same title and date already exists
      const { data: existingEvent } = await supabase
        .from('events')
        .select('id')
        .eq('title', event.title)
        .eq('date', event.date)
        .maybeSingle();

      // Only insert if event doesn't exist
      if (!existingEvent) {
        console.log(`Inserting new event: ${event.title} on ${event.date}`);
        await createEvent(event);
      } else {
        console.log(`Event already exists: ${event.title} on ${event.date}`);
      }
    }

    console.log('CSV events migration completed successfully');
  } catch (error) {
    console.error('Error migrating CSV events:', error);
  }
};