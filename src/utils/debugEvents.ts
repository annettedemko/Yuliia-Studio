import { supabase } from '@/lib/supabase';

export const debugEventsTable = async () => {
  console.log('=== EVENTS TABLE DEBUGGING ===');

  try {
    // 1. Базовая проверка подключения к таблице
    console.log('1. Testing basic table access...');
    const { data: basicTest, error: basicError } = await supabase
      .from('events')
      .select('count');

    if (basicError) {
      console.error('❌ Basic table access failed:', basicError);
      return;
    }
    console.log('✅ Basic table access OK:', basicTest);

    // 2. Проверяем структуру таблицы
    console.log('2. Checking table structure...');
    const { data: structureTest, error: structureError } = await supabase
      .from('events')
      .select('*')
      .limit(1);

    if (structureError) {
      console.error('❌ Structure check failed:', structureError);
    } else {
      console.log('✅ Table structure OK. Sample row:', structureTest?.[0] || 'No data');
    }

    // 3. Проверяем количество записей
    console.log('3. Checking row count...');
    const { count, error: countError } = await supabase
      .from('events')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Count check failed:', countError);
    } else {
      console.log(`✅ Total events in table: ${count}`);
    }

    // 4. Проверяем is_published фильтр
    console.log('4. Checking is_published filter...');
    const { data: publishedEvents, error: publishedError } = await supabase
      .from('events')
      .select('*')
      .eq('is_published', true);

    if (publishedError) {
      console.error('❌ Published filter failed:', publishedError);
    } else {
      console.log(`✅ Published events: ${publishedEvents?.length || 0}`);
      console.log('Published events data:', publishedEvents);
    }

    // 5. Проверяем date фильтр - сравнение с сегодняшней датой
    console.log('5. Checking date filter...');
    const today = new Date().toISOString().split('T')[0];
    console.log('Today date string:', today);

    const { data: futureEvents, error: dateError } = await supabase
      .from('events')
      .select('*')
      .gte('date', today);

    if (dateError) {
      console.error('❌ Date filter failed:', dateError);
    } else {
      console.log(`✅ Future events: ${futureEvents?.length || 0}`);
      console.log('Future events data:', futureEvents);
    }

    // 6. Проверяем комбинированный фильтр
    console.log('6. Checking combined filter (published + future)...');
    const { data: combinedEvents, error: combinedError } = await supabase
      .from('events')
      .select('*')
      .eq('is_published', true)
      .gte('date', today)
      .order('date', { ascending: true });

    if (combinedError) {
      console.error('❌ Combined filter failed:', combinedError);
    } else {
      console.log(`✅ Published future events: ${combinedEvents?.length || 0}`);
      console.log('Combined events data:', combinedEvents);
    }

    // 7. Тестируем insert права
    console.log('7. Testing insert permissions...');
    const testEvent = {
      title: 'Test Event Debug',
      date: '2025-12-31',
      time: '23:59',
      location: 'Test Location',
      description: 'Test Description',
      is_published: true
    };

    const { data: insertTest, error: insertError } = await supabase
      .from('events')
      .insert(testEvent)
      .select()
      .maybeSingle();

    if (insertError) {
      console.error('❌ Insert test failed:', insertError);
    } else {
      console.log('✅ Insert test successful:', insertTest);

      // Удаляем тестовое событие
      if (insertTest?.id) {
        await supabase.from('events').delete().eq('id', insertTest.id);
        console.log('🗑️ Test event cleaned up');
      }
    }

    // 8. Проверяем политики RLS
    console.log('8. Checking RLS policies...');
    const { data: anonTest, error: anonError } = await supabase
      .from('events')
      .select('*')
      .limit(1);

    if (anonError) {
      console.error('❌ Anonymous access failed:', anonError);
    } else {
      console.log('✅ Anonymous access OK');
    }

  } catch (error) {
    console.error('💥 Debug function crashed:', error);
  }

  console.log('=== DEBUG COMPLETE ===');
};

// Функция для сравнения типов данных
export const checkEventDataTypes = () => {
  console.log('=== DATA TYPE ANALYSIS ===');

  // Структура в БД (указанная пользователем)
  const dbStructure = {
    id: 'uuid (PK, gen_random_uuid())',
    title: 'text NOT NULL',
    date: 'date (может быть NULL)',
    time: 'text NULL',
    location: 'text NULL',
    address: 'text NULL',
    description: 'text NULL',
    is_published: 'boolean (default true)',
    created_at: 'timestamptz (default now())',
    updated_at: 'timestamptz (default now())',
    user_id: 'uuid NULL'
  };

  // Структура в TypeScript
  const tsStructure = {
    id: 'string',
    title: 'string',
    date: 'string | null',
    time: 'string | null',
    location: 'string | null',
    address: 'string | null',
    description: 'string | null',
    is_published: 'boolean',
    created_at: 'string',
    updated_at: 'string'
    // user_id отсутствует в TS типах!
  };

  console.log('DB Structure:', dbStructure);
  console.log('TS Structure:', tsStructure);

  // Потенциальные проблемы
  console.log('🚨 POTENTIAL ISSUES:');
  console.log('1. user_id field missing in TypeScript types');
  console.log('2. date field: DB uses DATE type, TS uses string - could cause comparison issues');
  console.log('3. timestamp fields: DB uses timestamptz, TS uses string - should be OK');

  console.log('=== TYPE ANALYSIS COMPLETE ===');
};