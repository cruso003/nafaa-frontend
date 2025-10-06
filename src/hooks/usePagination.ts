"use client";

import { useState, useCallback } from "react";

interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

interface UsePaginationOptions {
  initialPage?: number;
  initialPageSize?: number;
  totalItems?: number;
}

export function usePagination(options: UsePaginationOptions = {}) {
  const {
    initialPage = 1,
    initialPageSize = 10,
    totalItems = 0,
  } = options;

  const [state, setState] = useState<PaginationState>({
    currentPage: initialPage,
    pageSize: initialPageSize,
    totalItems,
    totalPages: Math.ceil(totalItems / initialPageSize),
  });

  const setPage = useCallback((page: number) => {
    setState((prev) => ({
      ...prev,
      currentPage: Math.max(1, Math.min(page, prev.totalPages)),
    }));
  }, []);

  const setPageSize = useCallback((size: number) => {
    setState((prev) => ({
      ...prev,
      pageSize: size,
      totalPages: Math.ceil(prev.totalItems / size),
      currentPage: 1, // Reset to first page when changing page size
    }));
  }, []);

  const setTotalItems = useCallback((total: number) => {
    setState((prev) => ({
      ...prev,
      totalItems: total,
      totalPages: Math.ceil(total / prev.pageSize),
    }));
  }, []);

  const nextPage = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentPage: Math.min(prev.currentPage + 1, prev.totalPages),
    }));
  }, []);

  const previousPage = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentPage: Math.max(prev.currentPage - 1, 1),
    }));
  }, []);

  const goToFirstPage = useCallback(() => {
    setPage(1);
  }, [setPage]);

  const goToLastPage = useCallback(() => {
    setState((prev) => ({ ...prev, currentPage: prev.totalPages }));
  }, []);

  const canGoNext = state.currentPage < state.totalPages;
  const canGoPrevious = state.currentPage > 1;

  const startIndex = (state.currentPage - 1) * state.pageSize;
  const endIndex = Math.min(startIndex + state.pageSize, state.totalItems);

  return {
    ...state,
    setPage,
    setPageSize,
    setTotalItems,
    nextPage,
    previousPage,
    goToFirstPage,
    goToLastPage,
    canGoNext,
    canGoPrevious,
    startIndex,
    endIndex,
  };
}
