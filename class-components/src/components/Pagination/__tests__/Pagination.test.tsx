import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../Pagination';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('Pagination Component', () => {
  it('calls onPageChange with correct arguments when buttons are clicked', () => {
    const onPageChangeMock = vi.fn();
    render(
      <MemoryRouter>
        <Pagination currentPage={3} totalPages={9} onPageChange={onPageChangeMock} />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText('Prev'));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });
  it('disables next button on the last page and enables previous button', () => {
    const onPageChangeMock = vi.fn();
    render(
      <MemoryRouter>
        <Pagination currentPage={9} totalPages={9} onPageChange={onPageChangeMock} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('button', { name: 'Prev' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  });
  it('enables next button on the first page and disables previous button', () => {
    const onPageChangeMock = vi.fn();
    render(
      <MemoryRouter>
        <Pagination currentPage={1} totalPages={9} onPageChange={onPageChangeMock} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('button', { name: 'Prev' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled();
  });
});
