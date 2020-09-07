import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InsuranceCard from '../InsuranceCard/InsuranceCard';
import { insuranceData } from '../../assets/data';

describe('InsuranceCard',  () => {
  it('should render correctly when type is 0',  () => {

    const { queryByTestId } = render(<InsuranceCard {...insuranceData.carrier_cards[0]}/>)

    expect(screen.queryByTestId('down-chevron')).toBeNull() // renders null because of dynamic svgs
    expect(screen.queryByTestId('blue-button')).not.toBeNull()
    expect(screen.queryByTestId('orange-button')).toBeNull()
    expect(screen.queryByTestId('carrier-tagline')).not.toBeNull()
  })

  it('should render correctly when type is 3',  () => {

    const { queryByTestId } = render(<InsuranceCard {...insuranceData.carrier_cards[0]} type={3}/>)

    expect(screen.queryByTestId('down-chevron')).toBeNull()
    expect(screen.queryByTestId('orange-button')).not.toBeNull()
    expect(screen.queryByTestId('blue-button')).toBeNull()
  })

  it('should not render tagline header if tagline does not exist', () => {

    const { queryByTestId } = render(<InsuranceCard {...insuranceData.carrier_cards[0]} tagline={null} />)
    expect(screen.queryByTestId('carrier-tagline')).toBeNull()
  })

  it('should toggle insurance body when the up/down icons are clicked correctly',  () => {

    const { queryByTestId } = render(<InsuranceCard {...insuranceData.carrier_cards[0]}/>)

    expect(screen.queryByTestId('insurance-body')).toBeVisible()
    expect(screen.queryByTestId('up-chevron')).toBeNull()

    fireEvent.click(screen.queryByTestId('down-chevron'))

    expect(screen.queryByTestId('insurance-body')).toBeVisible()
    expect(screen.queryByTestId('up-chevron')).not.toBeNull()

    fireEvent.click(queryByTestId('up-chevron'))

    expect(screen.queryByTestId('insurance-body')).not.toBeVisible()
    expect(screen.queryByTestId('up-chevron')).toBeNull()
    // expect().toBeDefined()
  })
})
