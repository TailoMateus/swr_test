# SWR Test

Testando aplicação com SWR:

## Estrutura de pastas

```bash
src 
  hooks/
    useFetch.ts
  pages/
    ReposDetails.tsx
    ReposList.tsx
  services/
    api.ts
  utils/
    types.ts
  Routes.tsx
```

## Requisitos

- [NodeJS v10 LTS](https://nodejs.org)
- [Yarn v1.17+](https://yarnpkg.com)

### Instalação para Desenvolvimento

- Instalar dependências do `package.json` usando Yarn - `yarn install`
- Executar servidor na url: http://localhost:3000 - `yarn start`
  
## Informações gerais

- O projeto foi iniciado com `create-react-app`.
- Utilizado a [API do GitHub](https://developer.github.com/v3/)