import axios from "axios";

const apiUrl = "https://admin.gaet.edu.in/api/home";
const apiKey = 123456;
const branchId = 1;

export const fetchData = async () => {
    try {
        const response = await axios.post(
            `${apiUrl}?branch_id=${branchId}`,
            {},
            {
                headers: {
                    "x-api-key": apiKey,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
