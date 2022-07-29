// import Prismic from '@prismicio/client'

// export function getPrismicClient(req?: unknown){
//   const prismic = Prismic.client(
//     process.env.PRISMIC_ACCESS,
//     {
//       req,
//       acessToken:process.env.PRISMIC_ACCESS_TOKEN
//     }
//   )
//   return prismic;
  
// }


// import * as prismic from '@prismicio/client'

// const endpoint = prismic.getEndpoint('https://mbeventos.prismic.io/api/v2')
// const accessToken = 'MC5ZdUFpT2hBQUFDWUFQaFVI.77-9XEdX77-9Iu-_vTgmWO-_vRZBWGQg77-9YO-_vRYB77-9dUdM77-977-9HO-_vQJ4dQ'// Set an access token

// const routes = [
//   { type: 'Mbeventos', path: '/Evento' }
// ]
// export const client = prismic.createClient(endpoint, { routes, accessToken })


import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'Mbeventos'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5ZdUFpT2hBQUFDWUFQaFVI.77-9XEdX77-9Iu-_vTgmWO-_vRZBWGQg77-9YO-_vRYB77-9dUdM77-977-9HO-_vQJ4dQ',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'evento',
      path: '/',
    },
  ],
})