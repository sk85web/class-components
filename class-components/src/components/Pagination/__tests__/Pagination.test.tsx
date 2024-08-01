import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../Pagination';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import * as reduxHooks from 'react-redux';
import * as actions from '../../../redux/slices/uiSlice';

// import { cardAPI } from '../../../redux/services/CardService';
import { beforeEach } from 'node:test';
// import { setCurrentPage } from '../../../redux/slices/uiSlice';

vi.mock('react-redux');
// const useGetAllCardsQueryMock = vi.spyOn(cardAPI, 'useGetAllCardsQuery');
const mockDispatch = vi.spyOn(reduxHooks, 'useDispatch');
const mockSelector = vi.spyOn(reduxHooks, 'useSelector');

describe('Pagination Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls onPageChange with correct arguments when buttons are clicked', () => {
    // const onPageChangeMock = vi.fn();
    const dispatch = vi.fn();
    mockDispatch.mockReturnValue(dispatch);
    mockSelector.mockReturnValue(1);

    // const mockData = {
    //   count: 82,
    // };
    // useGetAllCardsQueryMock.mockReturnValue({
    //   data: mockData,
    //   isLoading: false,
    //   error: null,
    //   refetch: vi.fn(),
    // });

    // mockDispatch.mockReturnValue(actions.setCurrentPage(currentPage: 2))

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Pagination />
        </MemoryRouter>
      </Provider>,
    );
    // fireEvent.click(screen.getByText('1'));
    // expect(dispatch).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('2'));
    expect(dispatch).toHaveBeenCalledWith(actions.setCurrentPage(2));
    fireEvent.click(screen.getByText('3'));
    expect(dispatch).toHaveBeenCalledWith(actions.setCurrentPage(3));
  });

  // it('disables next button on the last page and enables previous button', () => {
  //   render(
  //     <MemoryRouter>
  //       <Pagination />
  //     </MemoryRouter>,
  //   );
  //   expect(screen.getByRole('button', { name: 'Prev' })).toBeEnabled();
  //   expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  // });
  // it('enables next button on the first page and disables previous button', () => {
  //   render(
  //     <MemoryRouter>
  //       <Pagination />
  //     </MemoryRouter>,
  //   );
  //   expect(screen.getByRole('button', { name: 'Prev' })).toBeDisabled();
  //   expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled();
  // });
});
