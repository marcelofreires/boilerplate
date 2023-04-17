import { queryByText, render } from '@testing-library/react'

import { Main } from './'
import { BACKGROUND_COLOR, TITLE_COLOR } from './styles'

describe('<Main />', () => {
  it('should render the component', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(queryByText(container, 'Next.js boilerplate')).toBeInTheDocument()
  })

  it('should render the background color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': BACKGROUND_COLOR
    })
  })

  it('should render the title color correctly', () => {
    const { container } = render(<Main />)

    expect(queryByText(container, 'Next.js boilerplate')).toHaveStyle({
      color: TITLE_COLOR
    })
  })
})
