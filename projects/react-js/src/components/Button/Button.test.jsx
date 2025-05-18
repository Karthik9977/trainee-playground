import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders with default props', () => {
    render(<Button>Click me</Button>);
    
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
    expect(buttonElement).toHaveClass('button-primary');
  });

  test('applies secondary variant class when specified', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveClass('button-secondary');
    expect(buttonElement).not.toHaveClass('button-primary');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const buttonElement = screen.getByTestId('button');
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies hovered class on mouse enter and removes on mouse leave', () => {
    render(<Button>Hover me</Button>);
    
    const buttonElement = screen.getByTestId('button');
    
    // Initially no hovered class
    expect(buttonElement).not.toHaveClass('hovered');
    
    // Apply hover
    fireEvent.mouseEnter(buttonElement);
    expect(buttonElement).toHaveClass('hovered');
    
    // Remove hover
    fireEvent.mouseLeave(buttonElement);
    expect(buttonElement).not.toHaveClass('hovered');
  });
});
