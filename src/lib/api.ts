/**
 * Universal API Utility
 * 
 * This file provides a centralized way to make API calls in the application.
 * It uses the NEXT_PUBLIC_API_URL environment variable to determine the base URL.
 * In development, this could be http://localhost:3000/api, while in production
 * it can point to your actual production API URL.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

interface RequestOptions extends RequestInit {
  // Add any custom options here
  params?: Record<string, string>;
}

export const api = {
  /**
   * Helper function to build the full URL with query parameters
   */
  buildUrl(endpoint: string, params?: Record<string, string>): string {
    const url = new URL(`${API_BASE_URL}${endpoint}`, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, value);
        }
      });
    }
    
    // If we're on the client and using a relative path (e.g. '/api'), just return the pathname + search
    // This avoids issues with hardcoding the origin when it's not needed.
    if (API_BASE_URL.startsWith('/')) {
      return `${API_BASE_URL}${endpoint}${url.search}`;
    }
    
    return url.toString();
  },

  /**
   * Generic request method
   */
  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { params, ...fetchOptions } = options;
    const url = this.buildUrl(endpoint, params);

    const defaultHeaders = {
      'Content-Type': 'application/json',
      // Add any default headers here (e.g., Authorization)
    };

    const config: RequestInit = {
      ...fetchOptions,
      headers: {
        ...defaultHeaders,
        ...fetchOptions.headers,
      },
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP Error: ${response.status}`);
      }

      // Return parsed JSON data
      return await response.json();
    } catch (error) {
      console.error(`[API Error] ${endpoint}:`, error);
      throw error;
    }
  },

  /**
   * GET request
   */
  get<T>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>) {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  },

  /**
   * POST request
   */
  post<T>(endpoint: string, data: any, options?: Omit<RequestOptions, 'method'>) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * PUT request
   */
  put<T>(endpoint: string, data: any, options?: Omit<RequestOptions, 'method'>) {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * DELETE request
   */
  delete<T>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>) {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
};
