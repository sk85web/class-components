import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DetailCardInfo from '../DetailCardInfo';
import '@testing-library/jest-dom';

// const mockDetailInfo = {
//   name: 'Luke Skywalker',
//   height: '172',
//   mass: '77',
//   hair_color: 'blond',
//   skin_color: 'fair',
//   eye_color: 'blue',
//   birth_year: '19BBY',
//   created: '2014-12-09T13:50:51.644000Z',
//   url: 'https://swapi.dev/api/people/1/',
// };

const renderDetailCardInfo = (itemId: string, onClose = vi.fn()) => {
  return render(<DetailCardInfo itemId={itemId} onClose={onClose} />);
};

describe('DetailCardInfo компонент', () => {
  it('Check that a loading indicator is displayed while fetching data', () => {
    renderDetailCardInfo('1');

    expect(screen.getByText('Loading detail info...')).toBeInTheDocument();
  });

  // it('Validate that card component correctly displays the detailed card data', async () => {
  //   const { findByText } = renderDetailCardInfo('1');

  //   const nameElement = await findByText(mockDetailInfo.name);
  //   const heightElement = await findByText(`Height: ${mockDetailInfo.height}`);
  //   const massElement = await findByText(`Mass: ${mockDetailInfo.mass}`);
  //   const hairElement = await findByText(`Hair color: ${mockDetailInfo.hair_color}`);
  //   const skinElement = await findByText(`Skin color: ${mockDetailInfo.skin_color}`);
  //   const eyeElement = await findByText(`Eye color: ${mockDetailInfo.eye_color}`);
  //   const yearElement = await findByText(`Birth year: ${mockDetailInfo.birth_year}`);
  //   const createElement = await findByText(`Created: ${mockDetailInfo.created}`);

  //   expect(nameElement).toBeInTheDocument();
  //   expect(heightElement).toBeInTheDocument();
  //   expect(massElement).toBeInTheDocument();
  //   expect(hairElement).toBeInTheDocument();
  //   expect(skinElement).toBeInTheDocument();
  //   expect(eyeElement).toBeInTheDocument();
  //   expect(yearElement).toBeInTheDocument();
  //   expect(createElement).toBeInTheDocument();
  // });
  // it('Check that clicking the close button hides the component.', () => {
  //   const handleClose = vi.fn();

  //   render(<DetailCardInfo itemId="1" onClose={handleClose} />);

  //   const closeButton = screen.getByRole('button', { name: 'X' });

  //   fireEvent.click(closeButton);

  //   expect(handleClose).toHaveBeenCalled();
  // });
});
