import { createClient } from '@supabase/supabase-js';
import { AppError } from '../utils/error-handler';

export class SupabaseClient {
  private client;

  constructor() {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
      throw new AppError({
        message: 'Faltan variables de entorno de Supabase',
        code: 'CONFIG_ERROR'
      });
    }
    
    this.client = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );
  }

  async getProperties() {
    const { data, error } = await this.client
      .from('properties')
      .select('*');

    if (error) throw new AppError({
      message: error.message,
      code: 'DATABASE_ERROR',
      details: error
    });

    return data;
  }
}

export const supabaseClient = new SupabaseClient(); 