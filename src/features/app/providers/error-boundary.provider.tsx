import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Button } from "@/features/app";

interface ErrorBoundaryProviderProps {
  children: React.ReactNode;
}

export const ErrorBoundaryProvider = ({
  children,
}: ErrorBoundaryProviderProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => alert("reset")}
    >
      {children}
    </ErrorBoundary>
  );
};

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div
      role="alert"
      className="flex h-screen w-screen flex-col items-center justify-center space-y-5 text-center"
    >
      <p className="text-7xl  text-kera-pink/90">⚠</p>
      <p className="text-4xl font-bold text-kera-pink/90">
        Something went wrong!
      </p>
      <pre className="w-full overflow-scroll break-words rounded-sm bg-kera-gray-300/30 py-2 px-6 text-center ring-1 ring-kera-blue-900/10 backdrop-blur-sm">
        {error.message}
      </pre>

      <Button
        varient="primary"
        className="font-semibold"
        size="md"
        onClick={resetErrorBoundary}
      >
        Go to home page →
      </Button>
    </div>
  );
};
