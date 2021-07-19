export default function (ctx) {
  const redirects = [
    { from: '^/pricing$', to: '/pricing/box', statusCode: 301 },
    { from: '^/fr/tarifs$', to: '/fr/tarifs/box', statusCode: 301 },
    { from: '^/de/preise$', to: '/de/preise/box', statusCode: 301 },

    { from: '^/products$', to: '/products/box', statusCode: 301 },
    { from: '^/fr/produits$', to: '/fr/produits/box', statusCode: 301 },
    { from: '^/de/produkte$', to: '/de/produkte/box', statusCode: 301 },
  ]

  for (const redirect of redirects) {
    const regex = new RegExp(redirect.from, 'gi')
    if (regex.test(ctx.route.fullPath)) {
      return ctx.redirect(redirect.statusCode, redirect.to)
    }
  }
}
