import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component Counter Functionality', () => {
  test('renders with initial count of 0', () => {
    render(<App />);
    
    // Find the button that contains the counter text
    const counterButton = screen.getByRole('button', { name: /count is 0/i });
    expect(counterButton).toBeInTheDocument();
    expect(counterButton).toHaveTextContent('count is 0');
  });

  test('increments counter when button is clicked', () => {
    render(<App />);
    
    // Find the counter button
    const counterButton = screen.getByRole('button', { name: /count is 0/i });
    
    // Click the button to increment counter
    fireEvent.click(counterButton);
    
    // Counter should now be 1
    expect(counterButton).toHaveTextContent('count is 1');
    
    // Click again to make sure it continues incrementing
    fireEvent.click(counterButton);
    expect(counterButton).toHaveTextContent('count is 2');
  });

  test('counter increments by 1 each time', () => {
    render(<App />);
    
    // Find the counter button and initial state
    const counterButton = screen.getByRole('button', { name: /count is 0/i });
    
    // Click multiple times and check value after each click
    for (let i = 1; i <= 5; i++) {
      fireEvent.click(counterButton);
      expect(counterButton).toHaveTextContent(`count is ${i}`);
    }
  });

  test('renders Vite and React logos', () => {
    render(<App />);
    
    // Check for logo images
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test('has correct links for Vite and React', () => {
    render(<App />);
    
    // Check for links
    const viteLink = screen.getByRole('link', { name: /vite logo/i });
    const reactLink = screen.getByRole('link', { name: /react logo/i });
    
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
  });
});
