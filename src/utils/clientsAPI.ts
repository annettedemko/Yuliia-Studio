import { supabase } from '@/lib/supabase';
import type { Client } from '@/types/admin';
import type { Database } from '@/lib/supabase';

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

// Anna Clients API
export const getAnnaClients = async (): Promise<AnnaClient[]> => {
  try {
    console.log('Fetching Anna clients from Supabase...');
    const { data, error } = await supabase
      .from('anna_clients')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error fetching Anna clients:', error);
      throw error;
    }

    console.log('Successfully fetched Anna clients:', data);
    return data || [];
  } catch (error) {
    console.error('Error in getAnnaClients:', error);
    return [];
  }
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

// Yulia Clients API
export const getYuliaClients = async (): Promise<YuliaClient[]> => {
  try {
    console.log('Fetching Yulia clients from Supabase...');
    const { data, error } = await supabase
      .from('yulia_clients')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error fetching Yulia clients:', error);
      throw error;
    }

    console.log('Successfully fetched Yulia clients:', data);
    return data || [];
  } catch (error) {
    console.error('Error in getYuliaClients:', error);
    return [];
  }
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
  try {
    console.log('Fetching Lera clients from Supabase...');
    const { data, error } = await supabase
      .from('lera_clients')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error fetching Lera clients:', error);
      throw error;
    }

    console.log('Successfully fetched Lera clients:', data);
    return data || [];
  } catch (error) {
    console.error('Error in getLeraClients:', error);
    return [];
  }
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
  try {
    console.log('Fetching Liudmila clients from Supabase...');
    const { data, error } = await supabase
      .from('liudmila_clients')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error fetching Liudmila clients:', error);
      throw error;
    }

    console.log('Successfully fetched Liudmila clients:', data);
    return data || [];
  } catch (error) {
    console.error('Error in getLiudmilaClients:', error);
    return [];
  }
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