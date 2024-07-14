import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DetailCardInfo from '../DetailCardInfo';
import '@testing-library/jest-dom';

const renderDetailCardInfo = (itemId: string, onClose = vi.fn()) => {
  return render(<DetailCardInfo itemId={itemId} onClose={onClose} />);
};

describe('DetailCardInfo компонент', () => {
  it('Check that a loading indicator is displayed while fetching data', () => {
    renderDetailCardInfo('1');

    expect(screen.getByText('Loading detail info...')).toBeInTheDocument();
  });
});
