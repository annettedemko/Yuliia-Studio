import { supabase } from '@/lib/supabase';

// CSV data from form_submisssions.csv
const csvEvents = [
  {
    id: '12061488-6d96-4d72-b591-6ca7e18437c4',
    title: 'DEKA Beauty Day',
    date: '2025-12-17',
    time: '18:00',
    location: 'Yuliia Cheporska Studio',
    address: 'Elsässer Straße 33, 81667 München',
    description: 'Exklusive Präsentation der neuesten DEKA Technologien mit Live-Demonstrationen',
    is_published: true
  },
  {
    id: '3262cb2d-491f-4e05-846d-bbfe280df742',
    title: 'BEAUTY FORUM Festival 2025',
    date: '2025-10-18',
    time: '10:00–17:00',
    location: 'Messe München',
    address: 'Am Messesee 2, 81829 München',
    description: 'Besuchen Sie den DEKA-Stand – innovative Lösungen für Haarentfernung, Hautverjüngung und Körperformung: Motus AX, Again COS, Motus PRO, PHYSIQ 360 und RedTouch PRO',
    is_published: true
  },
  {
    id: 'a01e848b-5b5d-43ce-a932-22ae85f8da13',
    title: 'DEKA Beauty Day',
    date: '2025-10-05',
    time: '18:00',
    location: 'Yuliia Cheporska Studio',
    address: 'Elsässer Straße 33, 81667 München',
    description: 'Exklusive Präsentation der neuesten DEKA Technologien mit Live-Demonstrationen',
    is_published: true
  },
  {
    id: 'f31f9122-5b3a-4805-80ef-291858807ed2',
    title: 'DEKA Beauty Day',
    date: '2025-11-09',
    time: '18:00',
    location: 'Yuliia Cheporska Studio',
    address: 'Elsässer Straße 33, 81667 München',
    description: 'Exklusive Präsentation der neuesten DEKA Technологien mit Live-Demonstrationen',
    is_published: true
  }
];

export const migrateEventsFromCSV = async (): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('Starting CSV migration...');
    console.log('Events to migrate:', csvEvents);

    // Test basic Supabase connection
    console.log('Testing Supabase connection...');
    console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);

    const { data: testData, error: testError } = await supabase
      .from('events')
      .select('count');

    if (testError) {
      console.error('Supabase connection test failed:', testError);
      console.error('Error details:', JSON.stringify(testError, null, 2));
      return { success: false, message: `Supabase Verbindungsfehler: ${testError.message}` };
    }
    console.log('Supabase connection test passed:', testData);

    // Skip clearing for now to test insertion
    console.log('Skipping clearing events for debugging...');

    // Insert CSV events - test with first event only
    console.log('Inserting first CSV event for testing...');
    const testEvent = csvEvents[0];
    console.log('Test event data:', testEvent);

    const { data: insertData, error: insertError } = await supabase
      .from('events')
      .insert({
        title: testEvent.title,
        date: testEvent.date,
        time: testEvent.time,
        location: testEvent.location,
        address: testEvent.address,
        description: testEvent.description,
        is_published: testEvent.is_published
      })
      .select();

    if (insertError) {
      console.error('Error inserting test event:', insertError);
      console.error('Insert error details:', JSON.stringify(insertError, null, 2));
      return { success: false, message: `Fehler beim Einfügen von Test Event: ${insertError.message}` };
    }

    console.log('Test event inserted successfully:', insertData);

    // If test event works, insert the rest
    console.log('Test successful, inserting remaining events...');
    for (let i = 1; i < csvEvents.length; i++) {
      const event = csvEvents[i];
      console.log('Inserting event:', event.title);

      const { error: insertError } = await supabase
        .from('events')
        .insert({
          title: event.title,
          date: event.date,
          time: event.time,
          location: event.location,
          address: event.address,
          description: event.description,
          is_published: event.is_published
        });

      if (insertError) {
        console.error('Error inserting event:', insertError);
        return { success: false, message: `Fehler beim Einfügen von Event "${event.title}": ${insertError.message}` };
      }
      console.log('Event inserted successfully:', event.title);
    }

    console.log('Events migrated successfully from CSV');
    return { success: true, message: `${csvEvents.length} Events erfolgreich aus CSV migriert!` };
  } catch (error) {
    console.error('Migration error:', error);
    return { success: false, message: `Migrationsfehler: ${error}` };
  }
};