import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Counter App', () => {
  test('renders title and initial count', () => {
    render(<App />);
    
    expect(screen.getByText(/Simple Counter App/i)).toBeInTheDocument();
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  test('increments count when + button is clicked', () => {
    render(<App />);
    
    const incrementBtn = screen.getByTestId('increment-btn');
    const countElement = screen.getByTestId('count');

    fireEvent.click(incrementBtn);
    expect(countElement).toHaveTextContent('1');

    fireEvent.click(incrementBtn);
    expect(countElement).toHaveTextContent('2');
  });

  test('decrements count when - button is clicked', () => {
    render(<App />);
    
    const decrementBtn = screen.getByTestId('decrement-btn');
    const countElement = screen.getByTestId('count');

    // First increment so we can decrement
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(countElement).toHaveTextContent('1');

    fireEvent.click(decrementBtn);
    expect(countElement).toHaveTextContent('0');
  });

  test('resets count to 0 when Reset is clicked', () => {
    render(<App />);
    
    const resetBtn = screen.getByTestId('reset-btn');
    const countElement = screen.getByTestId('count');

    // Change count first
    fireEvent.click(screen.getByTestId('increment-btn'));
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(countElement).toHaveTextContent('2');

    fireEvent.click(resetBtn);
    expect(countElement).toHaveTextContent('0');
  });
});