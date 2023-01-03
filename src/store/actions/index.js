import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getWeatherData = createAsyncThunk(
  'weather/getWeatherData',
  async (country, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: country || 'Astana' },
      headers: {
        'X-RapidAPI-Key': 'd820813cf8mshec4b5c617fcc56cp18a9fdjsn5a87eac11a3c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    }

    try {
      const response = await axios.request(options)

      if (response.status !== 200) {
        throw new Error('Something went wrong!')
      }

      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const getUserRepos = createAsyncThunk(
  'github/getUserRepos',
  async (_, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      url: `https://api.github.com/users/dior1726/repos`,
    }

    try {
      const response = await axios.request(options)

      if (response.status !== 200) {
        throw new Error('Something went wrong!')
      }

      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const getUser = createAsyncThunk(
  'github/getUser',
  async (_, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      url: `https://api.github.com/users/dior1726`,
    }

    try {
      const response = await axios.request(options)

      if (response.status !== 200) {
        throw new Error('Something went wrong!')
      }

      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const getCharacters = createAsyncThunk(
  'rickandmorty/getCharacters',
  async (page = 1, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/?page=${page}`,
    }

    try {
      const response = await axios.request(options)

      if (response.status !== 200) {
        throw new Error('Something went wrong!')
      }
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const getLocations = createAsyncThunk(
  'rickandmorty/getLocations',
  async (page = 1, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      url: `https://rickandmortyapi.com/api/location/?page=${page}`,
    }

    try {
      const response = await axios.request(options)

      if (response.status !== 200) {
        throw new Error('Something went wrong!')
      }
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const getEpisodes = createAsyncThunk(
  'rickandmorty/getEpisodes',
  async (page = 1, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      url: `https://rickandmortyapi.com/api/episode/?page=${page}`,
    }

    try {
      const response = await axios.request(options)

      if (response.status !== 200) {
        throw new Error('Something went wrong!')
      }
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
