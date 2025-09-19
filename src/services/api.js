import axios from 'axios';

// API configuration
const API_CONFIG = {
  // baseURL: 'https://admin.gaet.edu.in/api',
  baseURL: 'https://spacekids.in/api',
  apiKey: '123456',
  branchId: 1,
};

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_CONFIG.apiKey,
  },
});

// API endpoints
export const endpoints = {
  about: '/about',
  advantages: '/advantages',
  association: '/association',
  admission: '/admission',
  contactus: '/contact-us',
  faq: '/faq',
  founder: '/founder',
  governingBody: '/governing-body',
  home: '/home',
  journey: '/journey',
  menu: '/menu',
  ourSchool: '/our-school',
  photoGallery: '/photo-gallery',
  settings: '/settings',
  visionMission: '/vision-mission',
  supportLegal: '/support-legal',
};

// Generic API call function
export const apiCall = async (endpoint, method = 'POST', params = {}) => {
  try {
    const response = await apiClient.request({
      url: endpoint,
      method,
      params: { branch_id: API_CONFIG.branchId, ...params },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'An error occurred');
    }
    throw error;
  }
};