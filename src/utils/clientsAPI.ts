import { supabase } from '@/lib/supabase';
import type { Client } from '@/types/admin';
import type { Database } from '@/lib/supabase';

type AnnaClient = Database['public']['Tables']['anna_clients']['Row'];
type NataliaClient = Database['public']['Tables']['natalia_clients']['Row'];
type AnnaClientInsert = Database['public']['Tables']['anna_clients']['Insert'];
type NataliaClientInsert = Database['public']['Tables']['natalia_clients']['Insert'];
type AnnaClientUpdate = Database['public']['Tables']['anna_clients']['Update'];
type NataliaClientUpdate = Database['public']['Tables']['natalia_clients']['Update'];

// Anna Clients API
export const getAnnaClients = async (): Promise<AnnaClient[]> => {
  try {
    const { data, error } = await supabase
      .from('anna_clients')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching Anna clients:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAnnaClients:', error);
    return [];
  }
};

export const createAnnaClient = async (client: Omit<AnnaClientInsert, 'id' | 'created_at'>): Promise<AnnaClient | null> => {
  try {
    const { data, error } = await supabase
      .from('anna_clients')
      .insert([client])
      .select()
      .single();

    if (error) {
      console.error('Error creating Anna client:', error);
      throw error;
    }

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
  try {
    const { data, error } = await supabase
      .from('natalia_clients')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching Natalia clients:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getNataliaClients:', error);
    return [];
  }
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
export const getClientsByRole = async (role: 'anna' | 'natalia'): Promise<AnnaClient[] | NataliaClient[]> => {
  if (role === 'anna') {
    return await getAnnaClients();
  } else {
    return await getNataliaClients();
  }
};

export const createClientByRole = async (
  role: 'anna' | 'natalia',
  client: Omit<AnnaClientInsert, 'id' | 'created_at'>
): Promise<AnnaClient | NataliaClient | null> => {
  if (role === 'anna') {
    return await createAnnaClient(client);
  } else {
    return await createNataliaClient(client);
  }
};

export const updateClientByRole = async (
  role: 'anna' | 'natalia',
  id: string,
  updates: AnnaClientUpdate | NataliaClientUpdate
): Promise<AnnaClient | NataliaClient | null> => {
  if (role === 'anna') {
    return await updateAnnaClient(id, updates);
  } else {
    return await updateNataliaClient(id, updates);
  }
};

export const deleteClientByRole = async (role: 'anna' | 'natalia', id: string): Promise<boolean> => {
  if (role === 'anna') {
    return await deleteAnnaClient(id);
  } else {
    return await deleteNataliaClient(id);
  }
};