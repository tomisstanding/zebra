import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import InsuranceCard from './InsuranceCard'

import data from '../../carrier_cards.json'

describe('InsuranceCard',  () => {
  it('should render correctly hen type is 0',  () => {

    const { queryByTestId } = render(<InsuranceCard {...data.carrier_cards[0]}/>)

    expect(queryByTestId('down-chevron')).not.toBeNull()
    expect(queryByTestId('blue-button')).not.toBeNull()
    expect(queryByTestId('orange-button')).toBeNull()
    expect(queryByTestId('carrier-tagline')).not.toBeNull()
  })

  it('should render correctly when type is 3',  () => {

    const { queryByTestId } = render(<InsuranceCard {...data.carrier_cards[0]} type={3}/>)

    expect(queryByTestId('down-chevron')).not.toBeNull()
    expect(queryByTestId('orange-button')).not.toBeNull()
    expect(queryByTestId('blue-button')).toBeNull()
  })

  it('should not render tagline header if tagline does not exist', () => {

    const { queryByTestId } = render(<InsuranceCard {...data.carrier_cards[0]} tagline={null} />)
    expect(queryByTestId('carrier-tagline')).toBeNull()
  })

  it('should toggle insurance body when the up/down icons are clicked correctly',  () => {

    const { queryByTestId } = render(<InsuranceCard {...data.carrier_cards[0]}/>)

    expect(queryByTestId('insurance-body')).toBeNull()
    expect(queryByTestId('up-chevron')).toBeNull()

    fireEvent.click(queryByTestId('down-chevron'))

    expect(queryByTestId('insurance-body')).not.toBeNull()
    expect(queryByTestId('up-chevron')).not.toBeNull()

    fireEvent.click(queryByTestId('up-chevron'))

    expect(queryByTestId('insurance-body')).toBeNull()
    expect(queryByTestId('up-chevron')).toBeNull()
    // expect().toBeDefined()
  })
})
