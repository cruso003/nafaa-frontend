import axiosInstance from "@/lib/axios";
import { USE_MOCK_DATA } from "@/config/constants";
import { mockVessels, type Vessel } from "@/lib/mock-data";

export const vesselsService = {
  /**
   * Get all vessels
   */
  async getAll(params?: {
    page?: number;
    limit?: number;
    status?: string;
    type?: string;
  }): Promise<{ vessels: Vessel[]; total: number }> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filtered = [...mockVessels];

      if (params?.status) {
        filtered = filtered.filter((v) => v.status === params.status);
      }

      if (params?.type) {
        filtered = filtered.filter((v) => v.type === params.type);
      }

      const start = ((params?.page || 1) - 1) * (params?.limit || 10);
      const end = start + (params?.limit || 10);

      return {
        vessels: filtered.slice(start, end),
        total: filtered.length,
      };
    }

    const { data } = await axiosInstance.get<{ vessels: Vessel[]; total: number }>(
      "/vessels",
      { params }
    );
    return data;
  },

  /**
   * Get vessel by ID
   */
  async getById(id: string): Promise<Vessel> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const vessel = mockVessels.find((v) => v.id === id);
      if (!vessel) throw new Error("Vessel not found");
      return vessel;
    }

    const { data } = await axiosInstance.get<Vessel>(`/vessels/${id}`);
    return data;
  },

  /**
   * Create new vessel
   */
  async create(vesselData: Omit<Vessel, "id">): Promise<Vessel> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        id: Date.now().toString(),
        ...vesselData,
      };
    }

    const { data } = await axiosInstance.post<Vessel>("/vessels", vesselData);
    return data;
  },

  /**
   * Update vessel
   */
  async update(id: string, vesselData: Partial<Vessel>): Promise<Vessel> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const vessel = mockVessels.find((v) => v.id === id);
      if (!vessel) throw new Error("Vessel not found");
      return { ...vessel, ...vesselData };
    }

    const { data } = await axiosInstance.put<Vessel>(`/vessels/${id}`, vesselData);
    return data;
  },

  /**
   * Delete vessel
   */
  async delete(id: string): Promise<void> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return;
    }

    await axiosInstance.delete(`/vessels/${id}`);
  },
};
