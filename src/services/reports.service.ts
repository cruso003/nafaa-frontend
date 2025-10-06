import axiosInstance from "@/lib/axios";
import { USE_MOCK_DATA } from "@/config/constants";
import { mockCatchReports, mockPayments, type CatchReport, type Payment } from "@/lib/mock-data";

export const reportsService = {
  /**
   * Get all catch reports
   */
  async getAllCatchReports(params?: {
    page?: number;
    limit?: number;
    vesselId?: string;
    status?: string;
  }): Promise<{ reports: CatchReport[]; total: number }> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filtered = [...mockCatchReports];

      if (params?.vesselId) {
        filtered = filtered.filter((r) => r.vesselId === params.vesselId);
      }

      if (params?.status) {
        filtered = filtered.filter((r) => r.status === params.status);
      }

      const start = ((params?.page || 1) - 1) * (params?.limit || 10);
      const end = start + (params?.limit || 10);

      return {
        reports: filtered.slice(start, end),
        total: filtered.length,
      };
    }

    const { data } = await axiosInstance.get<{ reports: CatchReport[]; total: number }>(
      "/reports/catch",
      { params }
    );
    return data;
  },

  /**
   * Submit catch report
   */
  async submitCatchReport(reportData: Omit<CatchReport, "id" | "status">): Promise<CatchReport> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        id: Date.now().toString(),
        status: "Submitted",
        ...reportData,
      };
    }

    const { data } = await axiosInstance.post<CatchReport>("/reports/catch", reportData);
    return data;
  },

  /**
   * Get all payments
   */
  async getAllPayments(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }): Promise<{ payments: Payment[]; total: number }> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filtered = [...mockPayments];

      if (params?.status) {
        filtered = filtered.filter((p) => p.status === params.status);
      }

      const start = ((params?.page || 1) - 1) * (params?.limit || 10);
      const end = start + (params?.limit || 10);

      return {
        payments: filtered.slice(start, end),
        total: filtered.length,
      };
    }

    const { data } = await axiosInstance.get<{ payments: Payment[]; total: number }>(
      "/payments",
      { params }
    );
    return data;
  },

  /**
   * Process payment
   */
  async processPayment(paymentData: {
    invoiceId: string;
    amount: number;
    paymentMethod: string;
  }): Promise<Payment> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const payment = mockPayments.find((p) => p.id === paymentData.invoiceId);
      if (!payment) throw new Error("Invoice not found");

      return {
        ...payment,
        status: "Paid",
        paidDate: new Date().toISOString().split("T")[0],
        paymentMethod: paymentData.paymentMethod,
        transactionId: "TXN-" + Date.now(),
      };
    }

    const { data } = await axiosInstance.post<Payment>("/payments/process", paymentData);
    return data;
  },
};
