import { ErrorInfo } from "react";

export async function resolvePromise<T>(promise: Promise<T>): Promise<T> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return await promise;
}

type ErrorLoggingFunction = (error: Error, errorInfo?: ErrorInfo) => void;

export const errorLog: ErrorLoggingFunction = (error, errorInfo) => {
  console.error('Error capturado:', error.message);

  if (errorInfo) {
    console.error('Informacoes adicionais:', errorInfo);
  }
}