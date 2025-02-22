import { render } from '@testing-library/vue'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrNavigationItem from './DsfrNavigationItem.vue'

describe('DsfrNavigationItem', () => {
  it('should render a navigation item', () => {
    const content = 'Contenu d’un item de menu de navigation'
    const id = 'dsfr-id'
    const { getByText } = render(DsfrNavigationItem, {
      props: {
        id,
      },
      slots: {
        default: content,
      },
    })

    const liEl = getByText(content)

    expect(liEl).toHaveClass('fr-nav__item')
    expect(liEl).not.toHaveClass('fr-nav__item--active')
    expect(liEl).toHaveAttribute('id')
    expect(liEl.id).toBe(id)
  })
})
