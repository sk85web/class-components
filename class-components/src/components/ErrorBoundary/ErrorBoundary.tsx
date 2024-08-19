import { Component, ErrorInfo } from 'react';

import { IErrorProps, IErrorState } from '../../types/SearchTypes';

class ErrorBoundary extends Component<IErrorProps, IErrorState> {
  constructor(props: IErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): IErrorState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Reload page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
