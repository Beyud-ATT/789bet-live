import axoisBase from "./axiosBase";

const endpoint = "presents";

async function getPresentComments() {
  try {
    const res = await axoisBase.get(`${endpoint}/top`);
    return res;
  } catch (error) {
    console.error("Error in getPresentComments:", error);
    throw error;
  }
}

export { getPresentComments };
