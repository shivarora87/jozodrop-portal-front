const useFetch = async (url, method = 'GET', options = {}) => {
  const res = await fetch(`/api${url}`, { method, ...options })
  const {data,code,msg} = await res.json()
  if (code !== 0) {
    throw new Error(msg)
  }
  return data
}
export default useFetch
