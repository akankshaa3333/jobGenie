import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // You need Router to handle the routes in the test
import App from './App';

describe('App', () => {
  test('renders the home page by default', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    // Check if the Home component is rendered by looking for text in it
    expect(screen.getByText(/Upcoming Competitions/i)).toBeInTheDocument();
  });

  test('navigates to the Ebook page when clicking the Ebook link', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    
    // Simulate clicking the 'Explore Resources' link (Ebook route)
    fireEvent.click(screen.getByText(/Ebook/i));
    
    // Check if the Ebook page is rendered
    expect(screen.getByText(/Explore ebooks and resources/i)).toBeInTheDocument();
  });

  test('navigates to the Interactive Tutorial page when clicking the Interactive Tutorial link', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Simulate clicking the 'Start Learning' link (Interactive Tutorial route)
    fireEvent.click(screen.getByText(/Int Tutorial/i));

    // Check if the Interactive Tutorial page is rendered
    expect(screen.getByText(/Start learning with our interactive tutorials/i)).toBeInTheDocument();
  });

  test('navigates to the Watch Videos page when clicking the Watch Videos link', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Simulate clicking the 'Watch Videos' link (Watch Video route)
    fireEvent.click(screen.getByText(/Watch Videos/i));

    // Check if the Watch Video page is rendered
    expect(screen.getByText(/Here, you can watch tutorials to improve your skills!/i)).toBeInTheDocument();
  });
});