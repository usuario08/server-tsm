import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export class AdapterApiRequest {

  async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    try {
      const response: AxiosResponse = await axios.post(url, data, config)
      return response.data
    } catch (error) {
      throw error
    }
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<any> {
    try {
      const response: AxiosResponse = await axios.get(url, config)
      return response.data
    } catch (error) {
      throw error
    }
  }

}