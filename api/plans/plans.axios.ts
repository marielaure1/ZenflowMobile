import apiClient from '@api/api.axios';
// import PlansProps from "@interfaces/plans.interface"

export async function fetchPlansAxios() {
  const response = await apiClient.get(`/plans`);
  return response.data;
}

// export async function fetchMePlanAxios() {
//   const response = await apiClient.get(`/plans/me`);
//   return response.data;
// }
