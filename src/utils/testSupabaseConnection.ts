import { supabase } from '@/lib/supabase';

export const testSupabaseConnection = async () => {
  console.log('=== SUPABASE CONNECTION TEST ===');

  // 1. Test basic client initialization
  console.log('1. Supabase client:', supabase);
  console.log('2. Environment variables:');
  console.log('   VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
  console.log('   VITE_SUPABASE_ANON_KEY length:', import.meta.env.VITE_SUPABASE_ANON_KEY?.length);

  // 2. Test simple HTTP request to Supabase
  try {
    console.log('3. Testing direct fetch to Supabase...');
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/`, {
      method: 'GET',
      headers: {
        'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
      }
    });
    console.log('   Fetch response status:', response.status);
    console.log('   Fetch response ok:', response.ok);
  } catch (fetchError) {
    console.error('   Direct fetch failed:', fetchError);
  }

  // 3. Test Supabase client
  try {
    console.log('4. Testing Supabase client...');
    const { data, error } = await supabase
      .from('prices')  // Use existing table
      .select('count')
      .limit(1);

    if (error) {
      console.error('   Supabase client error:', error);
    } else {
      console.log('   Supabase client success:', data);
    }
  } catch (clientError) {
    console.error('   Supabase client exception:', clientError);
  }

  // 4. Test events table specifically
  try {
    console.log('5. Testing events table...');
    const { data, error } = await supabase
      .from('events')
      .select('count')
      .limit(1);

    if (error) {
      console.error('   Events table error:', error);
      console.log('   This means events table probably doesn\'t exist');
    } else {
      console.log('   Events table success:', data);
    }
  } catch (eventsError) {
    console.error('   Events table exception:', eventsError);
  }

  console.log('=== TEST COMPLETE ===');
};