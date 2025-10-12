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
  try {
    console.log('Creating Anna client in Supabase:', client);
    const { data, error } = await supabase
      .from('anna_clients')
      .insert([client])
      .select()
      .single();

    if (error) {
      console.error('Supabase error creating Anna client:', error);
      throw error;
    }

    console.log('Successfully created Anna client:', data);
    return data;
  } catch (error) {
    console.error('Error in createAnnaClient:', error);
    return null;
  }
};

export const updateAnnaClient = async (id: string, updates: AnnaClientUpdate): Promise<AnnaClient | null> => {
  try {
    const { data, error } = await supabase
      .from('anna_clients')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating Anna client:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in updateAnnaClient:', error);
    return null;
  }
};

export const deleteAnnaClient = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('anna_clients')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting Anna client:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteAnnaClient:', error);
    return false;
  }
};

// Natalia Clients API
export const getNataliaClients = async (): Promise<NataliaClient[]> => {
  return fetchClientsREST('natalia_clients', 'Natalia') as Promise<NataliaClient[]>;
};

export const createNataliaClient = async (client: Omit<NataliaClientInsert, 'id' | 'created_at'>): Promise<NataliaClient | null> => {
  try {
    const { data, error } = await supabase
      .from('natalia_clients')
      .insert([client])
      .select()
      .single();

    if (error) {
      console.error('Error creating Natalia client:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in createNataliaClient:', error);
    return null;
  }
};

export const updateNataliaClient = async (id: string, updates: NataliaClientUpdate): Promise<NataliaClient | null> => {
  try {
    const { data, error } = await supabase
      .from('natalia_clients')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating Natalia client:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in updateNataliaClient:', error);
    return null;
  }
};

export const deleteNataliaClient = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('natalia_clients')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting Natalia client:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteNataliaClient:', error);
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
  try {
    console.log('Creating Yulia client in Supabase:', client);
    const { data, error } = await supabase
      .from('yulia_clients')
      .insert([client])
      .select()
      .single();

    if (error) {
      console.error('Supabase error creating Yulia client:', error);
      throw error;
    }

    console.log('Successfully created Yulia client:', data);
    return data;
  } catch (error) {
    console.error('Error in createYuliaClient:', error);
    return null;
  }
};

export const updateYuliaClient = async (id: string, updates: YuliaClientUpdate): Promise<YuliaClient | null> => {
  try {
    const { data, error } = await supabase
      .from('yulia_clients')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating Yulia client:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in updateYuliaClient:', error);
    return null;
  }
};

export const deleteYuliaClient = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('yulia_clients')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting Yulia client:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteYuliaClient:', error);
    return false;
  }
};

// Lera Clients API
export const getLeraClients = async (): Promise<LeraClient[]> => {
  return fetchClientsREST('lera_clients', 'Lera') as Promise<LeraClient[]>;
};

export const createLeraClient = async (client: Omit<LeraClientInsert, 'id' | 'created_at'>): Promise<LeraClient | null> => {
  try {
    console.log('Creating Lera client in Supabase:', client);
    const { data, error } = await supabase
      .from('lera_clients')
      .insert([client])
      .select()
      .single();

    if (error) {
      console.error('Supabase error creating Lera client:', error);
      throw error;
    }

    console.log('Successfully created Lera client:', data);
    return data;
  } catch (error) {
    console.error('Error in createLeraClient:', error);
    return null;
  }
};

export const updateLeraClient = async (id: string, updates: LeraClientUpdate): Promise<LeraClient | null> => {
  try {
    const { data, error } = await supabase
      .from('lera_clients')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating Lera client:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in updateLeraClient:', error);
    return null;
  }
};

export const deleteLeraClient = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('lera_clients')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting Lera client:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteLeraClient:', error);
    return false;
  }
};

// Liudmila Clients API
export const getLiudmilaClients = async (): Promise<LiudmilaClient[]> => {
  return fetchClientsREST('liudmila_clients', 'Liudmila') as Promise<LiudmilaClient[]>;
};

export const createLiudmilaClient = async (client: Omit<LiudmilaClientInsert, 'id' | 'created_at'>): Promise<LiudmilaClient | null> => {
  try {
    console.log('Creating Liudmila client in Supabase:', client);
    const { data, error } = await supabase
      .from('liudmila_clients')
      .insert([client])
      .select()
      .single();

    if (error) {
      console.error('Supabase error creating Liudmila client:', error);
      throw error;
    }

    console.log('Successfully created Liudmila client:', data);
    return data;
  } catch (error) {
    console.error('Error in createLiudmilaClient:', error);
    return null;
  }
};

export const updateLiudmilaClient = async (id: string, updates: LiudmilaClientUpdate): Promise<LiudmilaClient | null> => {
  try {
    const { data, error } = await supabase
      .from('liudmila_clients')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating Liudmila client:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in updateLiudmilaClient:', error);
    return null;
  }
};

export const deleteLiudmilaClient = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('liudmila_clients')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting Liudmila client:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteLiudmilaClient:', error);
    return false;
  }
};