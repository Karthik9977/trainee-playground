import { describe, it, expect } from 'vitest';
import { render, screen } from './test/test-utils';
import App from './App';

describe('App Component', () => {
  it('renders headline', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it('renders logos', () => {
    render(<App />);
    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument();
  });

  it('increments count when button is clicked', async () => {
    const { user } = render(<App />);
    
    // Initial count is 0
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
    
    // Click the button
    const button = screen.getByRole('button', { name: /count is/i });
    await user.click(button);
    
    // Count should be incremented to 1
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });
});
