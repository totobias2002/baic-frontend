import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchVehicleBySlugRequest } from '../../api/vehicles.js'
import { models } from '../../data/models.js'

export const fetchVehicleBySlug = createAsyncThunk(
  'vehicleDetail/fetchVehicleBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      return await fetchVehicleBySlugRequest(slug)
    } catch (err) {
      const fallback = models.find((m) => m.slug === slug)
      if (fallback) return fallback
      return rejectWithValue(err.message)
    }
  }
)
