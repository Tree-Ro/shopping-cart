import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Sidebar } from '../src/components';

describe('Sidebar', () => {
  it('should display the correct number of items in cart', () => {
    const items = [{ item1: 'value' }, { item2: 'value' }, { item3: 'value' }];
    render(<Sidebar itemsInCart={items} />);

    const itemsText = screen.getByRole("button", { name: `Checkout ${items.length}` });
    
    expect(itemsText).toBeInTheDocument();
  });
});

//doesn't work atm