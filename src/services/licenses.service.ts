import axiosInstance from "@/lib/axios";
import { USE_MOCK_DATA } from "@/config/constants";
import { mockLicenses, type License } from "@/lib/mock-data";

export const licensesService = {
  /**
   * Get all licenses
   */
  async getAll(params?: {
    page?: number;
    limit?: number;
    status?: string;
    type?: string;
  }): Promise<{ licenses: License[]; total: number }> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filtered = [...mockLicenses];

      if (params?.status) {
        filtered = filtered.filter((l) => l.status === params.status);
      }

      if (params?.type) {
        filtered = filtered.filter((l) => l.type === params.type);
      }

      const start = ((params?.page || 1) - 1) * (params?.limit || 10);
      const end = start + (params?.limit || 10);

      return {
        licenses: filtered.slice(start, end),
        total: filtered.length,
      };
    }

    const { data } = await axiosInstance.get<{ licenses: License[]; total: number }>(
      "/licenses",
      { params }
    );
    return data;
  },

  /**
   * Get license by ID
   */
  async getById(id: string): Promise<License> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const license = mockLicenses.find((l) => l.id === id);
      if (!license) throw new Error("License not found");
      return license;
    }

    const { data } = await axiosInstance.get<License>(`/licenses/${id}`);
    return data;
  },

  /**
   * Apply for new license
   */
  async apply(licenseData: Omit<License, "id" | "status">): Promise<License> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return {
        id: Date.now().toString(),
        status: "Pending",
        ...licenseData,
      };
    }

    const { data } = await axiosInstance.post<License>("/licenses/apply", licenseData);
    return data;
  },

  /**
   * Renew license
   */
  async renew(id: string): Promise<License> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const license = mockLicenses.find((l) => l.id === id);
      if (!license) throw new Error("License not found");

      const newExpiryDate = new Date(license.expiryDate);
      newExpiryDate.setFullYear(newExpiryDate.getFullYear() + 1);

      return {
        ...license,
        issueDate: new Date().toISOString().split("T")[0],
        expiryDate: newExpiryDate.toISOString().split("T")[0],
        status: "Active",
      };
    }

    const { data } = await axiosInstance.post<License>(`/licenses/${id}/renew`);
    return data;
  },

  /**
   * Update license
   */
  async update(id: string, licenseData: Partial<License>): Promise<License> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const license = mockLicenses.find((l) => l.id === id);
      if (!license) throw new Error("License not found");
      return { ...license, ...licenseData };
    }

    const { data } = await axiosInstance.put<License>(`/licenses/${id}`, licenseData);
    return data;
  },
};
