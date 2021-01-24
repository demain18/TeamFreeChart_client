import Api from '../axiosConfig';

export async function loginApi(
  { form }
) {
  const response = await Api.post('/auth_user', {
    auth: form,
  });
  console.log(response);
  return response.data;
}
