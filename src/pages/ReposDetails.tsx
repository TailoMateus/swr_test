import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const ReposDetails = () => {
  const { name } = useParams()
  const { data } = useFetch<TRepos>(`repos/tailomateus/${name}`)

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      <li>ID: {data?.id}</li>
      <li>Name: {data?.name}</li>
    </ul>
  );
}

export default ReposDetails