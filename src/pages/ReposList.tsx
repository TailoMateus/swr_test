import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


const ReposList = () => {
  const { data } = useFetch<TRepos[]>('users/tailomateus/repos')

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {data.map(repos => (
        <li key={repos.id}>
          <Link to={`/repos/${repos.name}`}>
            {repos.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ReposList