import { create } from 'zustand';
import { supabaseClient } from '~/lib/supabase/client';
import type { Property } from '~/lib/types/property';

interface PropertyStore {
  properties: Property[];
  selectedProperty: Property | null;
  isLoading: boolean;
  error: Error | null;
  fetchProperties: () => Promise<void>;
  setSelectedProperty: (property: Property | null) => void;
}

export const usePropertyStore = create<PropertyStore>((set) => ({
  properties: [],
  selectedProperty: null,
  isLoading: false,
  error: null,
  fetchProperties: async () => {
    set({ isLoading: true });
    try {
      const properties = await supabaseClient.getProperties();
      set({ properties, error: null });
    } catch (error) {
      set({ error: error as Error });
    } finally {
      set({ isLoading: false });
    }
  },
  setSelectedProperty: (property) => set({ selectedProperty: property })
})); 