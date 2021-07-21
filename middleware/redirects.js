export default function (ctx) {
  const redirects = [
    // pricing
    { from: '^/pricing$', to: '/pricing/box', statusCode: 301 },
    { from: '^/fr/tarifs$', to: '/fr/tarifs/box', statusCode: 301 },
    { from: '^/de/preise$', to: '/de/preise/box', statusCode: 301 },

    { from: '^/products$', to: '/products/box', statusCode: 301 },
    { from: '^/fr/produits$', to: '/fr/produits/box', statusCode: 301 },
    { from: '^/de/produkte$', to: '/de/produkte/box', statusCode: 301 },

    // customer stories
    {
      from: '^/customer-stories$',
      to: '/resources/customer-stories',
      statusCode: 301,
    },
    {
      from: '^/experiences-client$',
      to: '/fr/ressources/experiences-client',
      statusCode: 301,
    },
    {
      from: '^/kundengeschichten$',
      to: '/de/ressourcen/kundengeschichten',
      statusCode: 301,
    },

    // customer stories - smartvent -> calidity
    {
      from: '^/resources/customer-stories/smartvent$',
      to: '/resources/customer-stories/calidity',
      statusCode: 301,
    },
    {
      from: '^/fr/ressources/experiences-client/smartvent$',
      to: '/fr/ressources/experiences-client/calidity',
      statusCode: 301,
    },
    {
      from: '^/de/ressourcen/kundengeschichten/smartvent$',
      to: '/de/ressourcen/kundengeschichten/calidity',
      statusCode: 301,
    },

    // proptechs
    {
      from: '^/benefits/proptech$',
      to: '/benefits/proptechs',
      statusCode: 301,
    },
    {
      from: '^/fr/benefices/proptech$',
      to: '/fr/benefices/proptechs',
      statusCode: 301,
    },
    {
      from: '^/de/benefits/proptech$',
      to: '/de/benefits/proptechs',
      statusCode: 301,
    },
  ]

  for (const redirect of redirects) {
    const regex = new RegExp(redirect.from, 'gi')
    if (regex.test(ctx.route.fullPath)) {
      return ctx.redirect(redirect.statusCode, redirect.to)
    }
  }
}
