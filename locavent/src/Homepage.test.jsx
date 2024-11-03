import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Menu from './Menu';

test('renders Menu component', () => {
  render(<Menu />);
  expect(screen.getByText('HOME')).toBeDefined();
  expect(screen.getByText('CELENDAR')).toBeDefined();
  expect(screen.getByText('SAVED EVENT')).toBeDefined();
  expect(screen.getByText('MY TICKETS')).toBeDefined();
  expect(screen.getByText('NOTIFICATION')).toBeDefined();
});

test('renders all buttons', () => {
  render(<Menu />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(5);
});

test('renders images', () => {
  render(<Menu />);
  const images = screen.getAllByRole('img');
  expect(images).toHaveLength(2);
});