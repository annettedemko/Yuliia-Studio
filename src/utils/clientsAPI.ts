import { supabase } from '@/lib/supabase';
import type { Client } from '@/types/admin';
import type { Database } from '@/lib/supabase';

const SUPABASE_URL = 'https://knmompemjlboqzwcycwe.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubW9tcGVtamxib3F6d2N5Y3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTUzNjQsImV4cCI6MjA3NDM3MTM2NH0.j4db0ohPVgWLHUGF_Cdd1v33j7ggj375_FTpaizr8gM'

// Helper to get auth token - always use ANON_KEY for REST API
const getAuthToken = (): string => {
  // ANON KEY is correct - RLS policies handle authorization
  return SUPABASE_ANON_KEY;
};

type AnnaClient = Database['public']['Tables']['anna_clients']['Row'];
type NataliaClient = Database['public']['Tables']['natalia_clients']['Row'];
type YuliaClient = Database['public']['Tables']['yulia_clients']['Row'];
type LeraClient = Database['public']['Tables']['lera_clients']['Row'];
type LiudmilaClient = Database['public']['Tables']['liudmila_clients']['Row'];
type AnnaClientInsert = Database['public']['Tables']['anna_clients']['Insert'];
type NataliaClientInsert = Database['public']['Tables']['natalia_clients']['Insert'];
type YuliaClientInsert = Database['public']['Tables']['yulia_clients']['Insert'];
type LeraClientInsert = Database['public']['Tables']['lera_clients']['Insert'];
type LiudmilaClientInsert = Database['public']['Tables']['liudmila_clients']['Insert'];
type AnnaClientUpdate = Database['public']['Tables']['anna_clients']['Update'];
type NataliaClientUpdate = Database['public']['Tables']['natalia_clients']['Update'];
type YuliaClientUpdate = Database['public']['Tables']['yulia_clients']['Update'];
type LeraClientUpdate = Database['public']['Tables']['lera_clients']['Update'];
type LiudmilaClientUpdate = Database['public']['Tables']['liudmila_clients']['Update'];

// Helper function for GET requests
const fetchClientsREST = async (tableName: string, ownerName: string): Promise<any[]> => {
  console.log(`Fetching ${ownerName} clients...`);
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${tableName}?select=*&order=created_at.desc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const elapsed = Date.now() - startTime;
    console.log(`${ownerName} clients: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error(`Error fetching ${ownerName} clients:`, error);
      return [];
    }

    const data = await response.json();
    console.log(`Successfully fetched ${ownerName} clients:`, data.length);
    return data || [];
  } catch (error) {
    console.error(`Error in fetch ${ownerName} clients:`, error);
    return [];
  }
};

// Anna Clients API
export const getAnnaClients = async (): Promise<AnnaClient[]> => {
  return fetchClientsREST('anna_clients', 'Anna') as Promise<AnnaClient[]>;
};

export const createAnnaClient = async (client: Omit<AnnaClientInsert, 'id' | 'created_at'>): Promise<AnnaClient | null> => {
  console.log('Creating Anna client via REST API:', client);
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/anna_clients`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(client)
    });

    const elapsed = Date.now() - startTime;
    console.log(`createAnnaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('createAnnaClient: Error creating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('createAnnaClient: Successfully created client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('createAnnaClient: Exception:', error);
    return null;
  }
};

export const updateAnnaClient = async (id: string, updates: AnnaClientUpdate): Promise<AnnaClient | null> => {
  console.log('Updating Anna client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/anna_clients?id=eq.${id}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(updates)
    });

    const elapsed = Date.now() - startTime;
    console.log(`updateAnnaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('updateAnnaClient: Error updating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('updateAnnaClient: Successfully updated client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('updateAnnaClient: Exception:', error);
    return null;
  }
};

export const deleteAnnaClient = async (id: string): Promise<boolean> => {
  console.log('Deleting Anna client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/anna_clients?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const elapsed = Date.now() - startTime;
    console.log(`deleteAnnaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('deleteAnnaClient: Error deleting client:', error);
      return false;
    }

    console.log('deleteAnnaClient: Successfully deleted client', id);
    return true;
  } catch (error) {
    console.error('deleteAnnaClient: Exception:', error);
    return false;
  }
};

// Natalia Clients API
export const getNataliaClients = async (): Promise<NataliaClient[]> => {
  return fetchClientsREST('natalia_clients', 'Natalia') as Promise<NataliaClient[]>;
};

export const createNataliaClient = async (client: Omit<NataliaClientInsert, 'id' | 'created_at'>): Promise<NataliaClient | null> => {
  console.log('Creating Natalia client via REST API:', client);
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/natalia_clients`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(client)
    });

    const elapsed = Date.now() - startTime;
    console.log(`createNataliaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('createNataliaClient: Error creating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('createNataliaClient: Successfully created client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('createNataliaClient: Exception:', error);
    return null;
  }
};

export const updateNataliaClient = async (id: string, updates: NataliaClientUpdate): Promise<NataliaClient | null> => {
  console.log('Updating Natalia client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/natalia_clients?id=eq.${id}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(updates)
    });

    const elapsed = Date.now() - startTime;
    console.log(`updateNataliaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('updateNataliaClient: Error updating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('updateNataliaClient: Successfully updated client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('updateNataliaClient: Exception:', error);
    return null;
  }
};

export const deleteNataliaClient = async (id: string): Promise<boolean> => {
  console.log('Deleting Natalia client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/natalia_clients?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const elapsed = Date.now() - startTime;
    console.log(`deleteNataliaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('deleteNataliaClient: Error deleting client:', error);
      return false;
    }

    console.log('deleteNataliaClient: Successfully deleted client', id);
    return true;
  } catch (error) {
    console.error('deleteNataliaClient: Exception:', error);
    return false;
  }
};

// Generic helper functions
export const getClientsByRole = async (role: 'anna' | 'natalia' | 'yulia' | 'lera' | 'liudmila'): Promise<AnnaClient[] | NataliaClient[] | YuliaClient[] | LeraClient[] | LiudmilaClient[]> => {
  switch (role) {
    case 'anna':
      return await getAnnaClients();
    case 'natalia':
      return await getNataliaClients();
    case 'yulia':
      return await getYuliaClients();
    case 'lera':
      return await getLeraClients();
    case 'liudmila':
      return await getLiudmilaClients();
    default:
      return [];
  }
};

export const createClientByRole = async (
  role: 'anna' | 'natalia' | 'yulia' | 'lera' | 'liudmila',
  client: Omit<AnnaClientInsert, 'id' | 'created_at'>
): Promise<AnnaClient | NataliaClient | YuliaClient | LeraClient | LiudmilaClient | null> => {
  switch (role) {
    case 'anna':
      return await createAnnaClient(client);
    case 'natalia':
      return await createNataliaClient(client);
    case 'yulia':
      return await createYuliaClient(client);
    case 'lera':
      return await createLeraClient(client);
    case 'liudmila':
      return await createLiudmilaClient(client);
    default:
      return null;
  }
};

export const updateClientByRole = async (
  role: 'anna' | 'natalia' | 'yulia' | 'lera' | 'liudmila',
  id: string,
  updates: AnnaClientUpdate | NataliaClientUpdate | YuliaClientUpdate | LeraClientUpdate | LiudmilaClientUpdate
): Promise<AnnaClient | NataliaClient | YuliaClient | LeraClient | LiudmilaClient | null> => {
  switch (role) {
    case 'anna':
      return await updateAnnaClient(id, updates);
    case 'natalia':
      return await updateNataliaClient(id, updates);
    case 'yulia':
      return await updateYuliaClient(id, updates);
    case 'lera':
      return await updateLeraClient(id, updates);
    case 'liudmila':
      return await updateLiudmilaClient(id, updates);
    default:
      return null;
  }
};

export const deleteClientByRole = async (role: 'anna' | 'natalia' | 'yulia' | 'lera' | 'liudmila', id: string): Promise<boolean> => {
  switch (role) {
    case 'anna':
      return await deleteAnnaClient(id);
    case 'natalia':
      return await deleteNataliaClient(id);
    case 'yulia':
      return await deleteYuliaClient(id);
    case 'lera':
      return await deleteLeraClient(id);
    case 'liudmila':
      return await deleteLiudmilaClient(id);
    default:
      return false;
  }
};

// Yulia Clients API
export const getYuliaClients = async (): Promise<YuliaClient[]> => {
  return fetchClientsREST('yulia_clients', 'Yulia') as Promise<YuliaClient[]>;
};

export const createYuliaClient = async (client: Omit<YuliaClientInsert, 'id' | 'created_at'>): Promise<YuliaClient | null> => {
  console.log('Creating Yulia client via REST API:', client);
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/yulia_clients`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(client)
    });

    const elapsed = Date.now() - startTime;
    console.log(`createYuliaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('createYuliaClient: Error creating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('createYuliaClient: Successfully created client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('createYuliaClient: Exception:', error);
    return null;
  }
};

export const updateYuliaClient = async (id: string, updates: YuliaClientUpdate): Promise<YuliaClient | null> => {
  console.log('Updating Yulia client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/yulia_clients?id=eq.${id}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(updates)
    });

    const elapsed = Date.now() - startTime;
    console.log(`updateYuliaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('updateYuliaClient: Error updating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('updateYuliaClient: Successfully updated client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('updateYuliaClient: Exception:', error);
    return null;
  }
};

export const deleteYuliaClient = async (id: string): Promise<boolean> => {
  console.log('Deleting Yulia client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/yulia_clients?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const elapsed = Date.now() - startTime;
    console.log(`deleteYuliaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('deleteYuliaClient: Error deleting client:', error);
      return false;
    }

    console.log('deleteYuliaClient: Successfully deleted client', id);
    return true;
  } catch (error) {
    console.error('deleteYuliaClient: Exception:', error);
    return false;
  }
};

// Lera Clients API
export const getLeraClients = async (): Promise<LeraClient[]> => {
  return fetchClientsREST('lera_clients', 'Lera') as Promise<LeraClient[]>;
};

export const createLeraClient = async (client: Omit<LeraClientInsert, 'id' | 'created_at'>): Promise<LeraClient | null> => {
  console.log('Creating Lera client via REST API:', client);
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/lera_clients`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(client)
    });

    const elapsed = Date.now() - startTime;
    console.log(`createLeraClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('createLeraClient: Error creating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('createLeraClient: Successfully created client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('createLeraClient: Exception:', error);
    return null;
  }
};

export const updateLeraClient = async (id: string, updates: LeraClientUpdate): Promise<LeraClient | null> => {
  console.log('Updating Lera client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/lera_clients?id=eq.${id}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(updates)
    });

    const elapsed = Date.now() - startTime;
    console.log(`updateLeraClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('updateLeraClient: Error updating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('updateLeraClient: Successfully updated client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('updateLeraClient: Exception:', error);
    return null;
  }
};

export const deleteLeraClient = async (id: string): Promise<boolean> => {
  console.log('Deleting Lera client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/lera_clients?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const elapsed = Date.now() - startTime;
    console.log(`deleteLeraClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('deleteLeraClient: Error deleting client:', error);
      return false;
    }

    console.log('deleteLeraClient: Successfully deleted client', id);
    return true;
  } catch (error) {
    console.error('deleteLeraClient: Exception:', error);
    return false;
  }
};

// Liudmila Clients API
export const getLiudmilaClients = async (): Promise<LiudmilaClient[]> => {
  return fetchClientsREST('liudmila_clients', 'Liudmila') as Promise<LiudmilaClient[]>;
};

export const createLiudmilaClient = async (client: Omit<LiudmilaClientInsert, 'id' | 'created_at'>): Promise<LiudmilaClient | null> => {
  console.log('Creating Liudmila client via REST API:', client);
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/liudmila_clients`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(client)
    });

    const elapsed = Date.now() - startTime;
    console.log(`createLiudmilaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('createLiudmilaClient: Error creating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('createLiudmilaClient: Successfully created client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('createLiudmilaClient: Exception:', error);
    return null;
  }
};

export const updateLiudmilaClient = async (id: string, updates: LiudmilaClientUpdate): Promise<LiudmilaClient | null> => {
  console.log('Updating Liudmila client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/liudmila_clients?id=eq.${id}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(updates)
    });

    const elapsed = Date.now() - startTime;
    console.log(`updateLiudmilaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('updateLiudmilaClient: Error updating client:', error);
      return null;
    }

    const data = await response.json();
    console.log('updateLiudmilaClient: Successfully updated client:', data[0]);
    return data[0] || null;
  } catch (error) {
    console.error('updateLiudmilaClient: Exception:', error);
    return null;
  }
};

export const deleteLiudmilaClient = async (id: string): Promise<boolean> => {
  console.log('Deleting Liudmila client', id, 'via REST API...');
  const startTime = Date.now();

  try {
    const token = getAuthToken();
    const response = await fetch(`${SUPABASE_URL}/rest/v1/liudmila_clients?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const elapsed = Date.now() - startTime;
    console.log(`deleteLiudmilaClient: REST API ответил за ${elapsed}ms`);

    if (!response.ok) {
      const error = await response.json();
      console.error('deleteLiudmilaClient: Error deleting client:', error);
      return false;
    }

    console.log('deleteLiudmilaClient: Successfully deleted client', id);
    return true;
  } catch (error) {
    console.error('deleteLiudmilaClient: Exception:', error);
    return false;
  }
};